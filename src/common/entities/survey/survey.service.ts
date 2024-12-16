import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey } from 'src/common/entities/survey/survey.schema';

@Injectable()
export class SurveyService {
  constructor(@InjectModel(Survey.name) private surveyModel: Model<Survey>) {}

  async createSurvey(title: string, options: string[]): Promise<Survey> {
    const survey = new this.surveyModel({ title, options });
    return survey.save();
  }

  async getSurveys(): Promise<Survey[]> {
    return this.surveyModel.find().exec();
  }

  async vote(surveyId: string, option: string): Promise<Survey> {
    return this.surveyModel.findByIdAndUpdate(
      surveyId,
      { $inc: { [`votes.${option}`]: 1 } },
      { new: true },
    );
  }
}
