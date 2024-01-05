import { ImageSourcePropType } from "react-native";
import { Disponibility } from "./Enums";

export interface User {
    name: string,
    disponibility: Disponibility,
    avatarImage: undefined|ImageSourcePropType
}

export interface ThemeContextType {
    mode: string,
    statusBar: string
}