import { Todo } from './todo';
export interface TodoColumn{
    id: number,
    title: string,
    items: Todo[]
}