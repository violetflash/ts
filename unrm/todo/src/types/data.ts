export type idType = number;

export interface ITodo {
    id: idType;
    title: string;
    completed: boolean;
}

export interface ITodoItemStyle {
    style: { textDecoration: 'lineThrough' } | null;
}
