import { ITheme } from "./Theme";

export interface ITodoInput {
    themes: ITheme[];
    currentTheme: number;
    addTask: (task: string) => void;
}