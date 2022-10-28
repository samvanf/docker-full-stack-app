import { ApiProperty, ApiResponse } from '@nestjs/swagger';
export class TaskDto {
  @ApiProperty({
    description: 'This is the id of the tasks',
    default: 'This is a fake ID',
  })
  id: number;

  @ApiProperty({
    description: 'The title of the task',
    minLength: 3,
    maxLength: 30,
    default: 'This is a fake title'
  })
  title: string;

  @ApiProperty({
    description: 'A brief description of the task',
    maxLength: 200,
    default: 'This is a fake description'
  })
  description: string;
}
