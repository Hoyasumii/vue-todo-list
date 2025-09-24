import { v7 } from 'uuid';
import { type ITask } from "@/types";

export class Task {
  protected _id: string = v7();
  protected _completed: boolean = false;
  protected _createdAt: Date = new Date();

  constructor(public readonly name: string) { }

  get completed(): typeof this._completed {
    return this._completed;
  }

  get id(): typeof this._id {
    return this._id;
  }

  get createdAt(): typeof this._createdAt {
    return this._createdAt;
  }

  interact(): void {
    this._completed = !this._completed;
  }

  static build(task: ITask): Task {
    const newInstance = new Task(task.name);
    newInstance._id = task.id;
    newInstance._completed = task.completed;
    newInstance._createdAt = new Date(task.createdAt);

    return newInstance;
  }

  serialize(): ITask {
    return {
      id: this.id,
      completed: this.completed,
      name: this.name,
      createdAt: this._createdAt.toISOString(),
    }
  }
}
