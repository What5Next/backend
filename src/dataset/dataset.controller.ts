import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { DatasetService } from './dataset.service';
import { DatasetDto } from './dto/dataset.dto';
import { Dataset } from './dataset.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

@Controller('dataset')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Post(':cid')
  @UseInterceptors(
    FilesInterceptor('files', 50, {
      storage: diskStorage({
        destination: async (req, file, cb) => {
          const dir = `./upload/${req.params.cid}`;
          fs.mkdir(dir, { recursive: true }, (error) => cb(error, dir));
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname)); // to avoid filename conflict
        },
      }),
    }),
  )
  createDataset(
    @Body() datasetDto: DatasetDto,
    @UploadedFiles() files: Express.Multer.File,
  ): Promise<Dataset> {
    console.log(files);
    return this.datasetService.createDataset(datasetDto);
  }
}
