import { TaskModel } from "@/types/TaskModel";

export type AddTaskProps = {
    todosLength: number,
};

export interface AddTaskEmits {
    (event: 'add-task', task: TaskModel): void
}
