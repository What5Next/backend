import { Module } from '@nestjs/common';
import { DatasetController } from './dataset.controller';
import { DatasetService } from './dataset.service';
import { DatasetRepository } from './dataset.repository';
import { MulterModule } from '@nestjs/platform-express';
import * as mime from 'mime-types';
import { diskStorage } from 'multer';

@Module({
  imports: [
    // MulterModule.register({
    //   storage: diskStorage({
    //     destination: (req, file, cb) => {
    //       cb(null, './uploads');
    //     },
    //     filename: (req, file, cb) => {
    //       cb(null, `${new Date().getTime()}.${mime.extension(file.mimetype)}`);
    //     },
    //   }),
    //   limits: {
    //     files: 100,
    //   },
    //   fileFilter(req, file, cb) {
    //     cb(null, true);
    //   },
    // }),
  ],
  controllers: [DatasetController],
  providers: [DatasetService, DatasetRepository],
})
export class DatasetModule {}
