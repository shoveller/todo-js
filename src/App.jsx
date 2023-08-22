import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const checked = formData.get("hidden-check");
    const task = formData.get("task");
    debugger;
  };

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
          {/* task[s] */}
          <div className="group">
            {/* task label[s] */}
            <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900">
              {/* hidden check[s] */}
              <input
                className="hidden peer"
                type="checkbox"
                name="hidden-check"
              />
              {/* hidden check[e] */}
              {/* check[s]*/}
              <span
                name="check"
                className="peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:text-white flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {/* check[e]*/}
              {/* content[s] */}
              <span className="peer-checked:text-gray-500 peer-checked:line-through select-none mx-4 text-sm w-full">
                Trim the verge.
              </span>
              {/* content[e] */}
              {/* edit[s] */}
              <button className="hidden group-hover:block">
                <svg
                  className="w-5 h-5 text-gray-400 fill-current mx-1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000000"
                >
                  <polygon points="24 52 56 20 44 8 12 40 8 56 24 52" />
                  <line x1={12} y1={40} x2={24} y2={52} />
                  <line x1={36} y1={16} x2={48} y2={28} />
                </svg>
              </button>
              {/* edit[e] */}
              {/* delete[s] */}
              <button className="hidden group-hover:block">
                <svg
                  className="w-5 h-5 text-gray-400 fill-current mx-1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 27.965 27.965"
                  xmlSpace="preserve"
                >
                  <path
                    d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982
        C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78
        l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782
        c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"
                  />
                </svg>
              </button>
              {/* delete[e] */}
            </label>
            {/* task label[e] */}
          </div>
          {/* task[e] */}
          {/* form[s] */}
          <form onSubmit={onSubmit}>
            <div className="flex items-center w-full mt-2">
              <button
                type="submit"
                className="h-8 px-2 text-sm font-medium rounded"
              >
                <svg
                  className="w-5 h-5 text-gray-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              <input
                className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
                type="text"
                name="task"
                placeholder="add a new task"
              />
            </div>
          </form>
          {/* form[e] */}
        </div>
      </div>
    </div>
  );
}

export default App;
