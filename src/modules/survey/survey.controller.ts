import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { SurveyService } from '../../common/entities/survey/survey.service';
import { CreateSurveyDto } from 'src/common/entities/survey/create-survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyService.createSurvey(
      createSurveyDto.title,
      createSurveyDto.options,
    );
  }

  @Get()
  findAll() {
    return this.surveyService.getSurveys();
  }

  @Patch('vote/:id')
  vote(@Param('id') id: string, @Body('option') option: string) {
    return this.surveyService.vote(id, option);
  }
}
