import { Module } from '@nestjs/common';
import { DatasetController } from './dataset.controller';
import { DatasetService } from './dataset.service';
import { DatasetRepository } from './dataset.repository';
import * as glob from 'glob';
import * as path from 'path';
import * as fs from 'fs';
import multer, { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import * as mime from 'mime-types';

// let counter = 1;

// // 서버가 시작될 때, 가장 큰 디렉토리 번호를 찾습니다.
// glob('./upload/*', (err, directories) => {
//   if (err) {
//     console.error('Failed to scan directory', err);
//     return;
//   }

//   directories.forEach((directory) => {
//     const parsedNumber = parseInt(path.basename(directory), 10);
//     if (!isNaN(parsedNumber)) {
//       counter = Math.max(counter, parsedNumber + 1);
//     }
//   });
// });

// console.log(counter);

// const storage = diskStorage({
//   destination: (req, file, cb) => {
//     const dir = `./upload/${counter}`;
//     fs.access(dir, (error) => {
//       if (error) {
//         return fs.mkdir(dir, (error) => cb(null, dir));
//       }
//       return cb(null, dir);
//     });
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads');
        },
        filename: (req, file, cb) => {
          cb(null, `${new Date().getTime()}.${mime.extension(file.mimetype)}`);
        },
      }),
      limits: {
        files: 100,
      },
      fileFilter(req, file, cb) {
        cb(null, true);
      },
    }),
  ],
  controllers: [DatasetController],
  providers: [DatasetService, DatasetRepository],
})
export class DatasetModule {}
