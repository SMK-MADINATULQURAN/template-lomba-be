import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';


@Module({
  // imports:[CloudinaryService],
  controllers: [UploadController],
})
export class UploadModule {}
