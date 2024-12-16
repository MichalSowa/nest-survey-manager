import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyService } from '../../common/entities/survey/survey.service';
import { SurveyController } from './survey.controller';
import { Survey, SurveySchema } from 'src/common/entities/survey/survey.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
  ],
  providers: [SurveyService],
  controllers: [SurveyController],
})
export class SurveyModule {}
