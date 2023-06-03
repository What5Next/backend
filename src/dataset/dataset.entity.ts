import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity()
@Unique(['cid'])
export class Dataset extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userAddress: string;

  @Column()
  cid: string;

  @Column()
  characterName: string;

  @Column('text')
  description: string;
}
