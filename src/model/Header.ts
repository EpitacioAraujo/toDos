import { ITheme } from "./Theme";

export interface IHeader {
    themes: ITheme[];
    currentTheme: number;
    handleToggleTheme: () => void;
}