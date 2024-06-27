import { TaskStatusEnum } from '../base/enumerators/tasks.enum';

export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: TaskStatusEnum,
    public taskManagerId: string,
  ) {}
}