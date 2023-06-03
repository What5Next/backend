import { Injectable } from '@nestjs/common';
import { DatasetRepository } from './dataset.repository';
import { DatasetDto } from './dto/dataset.dto';
import multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { Dataset } from './dataset.entity';

@Injectable()
export class DatasetService {
  constructor(private readonly datasetRepository: DatasetRepository) {}

  async createDataset(datasetDto: DatasetDto): Promise<Dataset> {
    return this.datasetRepository.createDataset(datasetDto);
  }
}
