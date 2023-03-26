import { ColumnType } from "./enums";

export type Media = {
    id: string;
    title: string;
    image: string;
    column: ColumnType;
}

export type DragItem = {
    index: number;
    id: Media['id'];
    from: ColumnType;
}