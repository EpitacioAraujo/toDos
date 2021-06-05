import { ITheme } from "./Theme";

export interface IHome {
    themes: ITheme[];
    currentTheme: number;
    handleToggleTheme: () => void
}