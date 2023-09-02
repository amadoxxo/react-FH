import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks";

export const TodoApp = () => {


    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToogle } = useTodo();

    return (

        <>
            <h1>TodoList: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr/>


            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToogle } />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoAdd 
                        onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
