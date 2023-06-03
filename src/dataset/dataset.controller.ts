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
import { DatasetRepository } from './dataset.repository';

@Controller('dataset')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  createDataset(
    @Body() datasetDto: DatasetDto,
    @UploadedFiles() files: Express.Multer.File,
  ): Promise<Dataset> {
    console.log(files);
    return this.datasetService.createDataset(datasetDto);
  }
}
