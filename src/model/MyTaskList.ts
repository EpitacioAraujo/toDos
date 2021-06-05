import { ITheme } from "./Theme";

export interface IMyTasksList {
    tasks: {
      id: number;
      title: string;
      done: boolean;
    }[];
    themes: ITheme[];
    currentTheme: number;
    onPress: (id: number) => void;
    onLongPress: (id: number) => void;
}