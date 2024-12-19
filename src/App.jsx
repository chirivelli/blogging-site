import {useState} from "react";

const App = () => {
    const [todos, setTodos] = useState([{'id': 'Item 1', 'name': 'Item 1'}])
    const addTodo = (e) => {
        e.preventDefault()
        const todoInput = document.querySelector('#todo-input')
        setTodos([...todos, {'id': todoInput.value, 'name': todoInput.value}])
        todoInput.value = null
    }
    const deleteTodo = (e) => {
        e.target.parentElement.remove()
    }

    const clearTodos = (e) => {
        e.preventDefault()
        setTodos([])
    }

    return (
        <div className="flex items-center bg-gradient-to-t from-blue-500 to-black min-h-screen overflow-hidden">
            <div
                className='container mx-auto p-6 bg-slate-200 shadow-2xl rounded max-w-96 min-h-96'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-3xl'> Todo App</h1>
                    <button onClick={e => {
                        clearTodos(e)
                    }} className='p-1 text-slate-200 text-md bg-blue-500 rounded hover:bg-blue-400'>
                        Clear All
                    </button>
                </div>
                <div className='flex pt-3 justify-between gap-2'>
                    <input id='todo-input' className='flex-1 rounded ring-1 ring-slate-300 p-3' type='text'
                           placeholder='Add a new todo'/>
                    <button className='size-12 text-slate-200 text-4xl bg-slate-700 rounded hover:bg-slate-800'
                            onClick={e => addTodo(e)}>
                        +
                    </button>
                </div>
                <div className='mt-3'>
                    <ul id='todo-list' className='flex flex-col space-y-3'>
                        {todos.map(x =>
                            <li key={x.id} className='flex justify-between rounded bg-slate-300 p-2'>
                                <p>{x.name}</p>
                                <button onClick={e => deleteTodo(e)} className='size-8 text-xl'>❌</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App
