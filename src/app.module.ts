import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyModule } from './modules/survey/survey.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-survey-menager'),
    SurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
