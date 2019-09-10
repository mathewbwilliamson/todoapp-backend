export interface Todo {
    id: number;
    title: string;
    person: string;
    completed: boolean;
}

export const fakeTodoDB: Todo[] = [
    {
        id: 1,
        title: 'take out trash',
        person: 'matt',
        completed: false
    },
    {
        id: 2,
        title: 'pet cat',
        person: 'julie',
        completed: false
    },
    {
        id: 3,
        title: 'wash dishes',
        person: 'matt',
        completed: true
    },
    {
        id: 4,
        title: 'go to dinner',
        person: 'julie',
        completed: false
    },
    {
        id: 5,
        title: 'clean table',
        person: 'matt',
        completed: true
    },
]