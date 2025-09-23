import { v7 } from 'uuid';
import { type Task as ITask } from "@/types";

export class Task {
  protected _id: string = v7();
  protected _completed: boolean = false;

  constructor(public readonly name: string) { }

  get completed() {
    return this._completed;
  }

  get id() {
    return this._id;
  }

  interact() {
    this._completed = !this._completed;
  }

  static build(task: ITask): Task {
    const newInstance = new Task(task.name);
    newInstance._id = task.id;
    newInstance._completed = task.completed;

    return newInstance;
  }

  serialize(): ITask {
    return {
      id: this.id,
      completed: this.completed,
      name: this.name
    }
  }
}
