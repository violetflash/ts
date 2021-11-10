import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished);

});

function logTodo(id: number, title: string, completed: boolean) {
    console.log(`
        Todo ID: ${id}
        Todo title: ${title}
        IS todo finished: ${completed}
    `);
}

// ДЖенерик тип. Т(Type). Сначала тип указывается после имени функции, затем этот тип присваивается аргументу и
// возвращаемому из функции типу
const getter = <T>(attr: T): T => attr;
getter('123').length;
// getter(10).length;

