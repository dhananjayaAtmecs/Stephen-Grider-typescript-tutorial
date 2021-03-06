import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface TodoInterFace {
    id: number
    title: string
    completed: boolean
}

axios.get(url).then((res)=>{
    const todo = res.data as TodoInterFace;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed: boolean)=>{
    console.log(
        id, title, completed
    )
}
