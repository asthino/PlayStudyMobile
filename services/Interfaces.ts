import { ImageSourcePropType } from "react-native";
import { Disponibility } from "./Enums";

export interface User {
    id: number,
    name: string,
    disponibility: Disponibility,
    avatarImage: undefined|ImageSourcePropType
}

export interface Game {
    name: string,
    description: string,
    color: string,
    image: undefined|ImageSourcePropType,
    level: number,
    exlpaination: string,
    progress: number,
    stages: number
}

export interface ThemeContextType {
    mode: string,
    statusBar: string
}