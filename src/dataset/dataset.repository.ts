import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Dataset } from './dataset.entity';
import { DatasetDto } from './dto/dataset.dto';

@Injectable()
export class DatasetRepository extends Repository<Dataset> {
  constructor(private dataSource: DataSource) {
    super(Dataset, dataSource.createEntityManager());
  }
  async createDataset(datasetDto: DatasetDto): Promise<Dataset> {
    const dataset = this.create(datasetDto);
    await this.save(dataset);
    return dataset;
  }
}
