import { IsString, IsArray, ArrayMinSize } from 'class-validator';

export class CreateSurveyDto {
  @IsString()
  title: string;

  @IsArray()
  @ArrayMinSize(2, {
    message: 'The survey must contain at least two options',
  })
  @IsString({ each: true })
  options: string[];
}
