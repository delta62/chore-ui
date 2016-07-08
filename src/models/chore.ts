export interface Task {
  text: string;
  completed: boolean;
}

export interface Chore extends Task {
  tasks: Array<Task>;
}
