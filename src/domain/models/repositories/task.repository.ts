import { Task } from '../task.model';

export abstract class TaskRepository {
  abstract save(task: Task): Task;
  abstract findById(managerId: string): Task | undefined;
}