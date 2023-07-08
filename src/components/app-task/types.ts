import { TaskModel } from "@/types/TaskModel";

export type AppTaskProps = {
    todo: TaskModel,
};

export interface AppTaskEmits {
    (event: 'set-checked', taskId: number): void
    (event: 'set-selected', taskId: number): void
}
