import { Outlet } from 'react-router-dom'

import "./App.css";

const TodoLayout = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen font-medium">
            <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
                <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
                    <div className="flex items-center mb-6">
                        <svg
                            className="h-8 w-8 text-indigo-500 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <h4 className="font-semibold ml-3 text-lg">Todo List</h4>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TodoLayout