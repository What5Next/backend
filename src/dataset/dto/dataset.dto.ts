import { IsNotEmpty, IsString } from 'class-validator';

export class DatasetDto {
  // isethereumaddress 테스트해보기
  @IsNotEmpty()
  @IsString()
  readonly userAddress: string;

  @IsNotEmpty()
  @IsString()
  readonly cid: string;

  @IsNotEmpty()
  @IsString()
  readonly characterName: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
