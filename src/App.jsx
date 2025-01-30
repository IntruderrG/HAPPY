import { useState } from "react";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  return (
    <div>
      <div className=" text-5xl text-white bg-amber-300 font-bold m-1.5 w-89 rounded-sm border-4 border-black h-20 p-2">
        {count}
      </div>
      <div>
        <button
          className="text-4xl bg-orange-400 m-1.5 rounded-sm h-20 w-44 font-bold cursor-pointer transition-all duration-100 hover:bg-orange-500 hover:scale-103 text-white active:scale-95"
          onClick={() => setcount(count + 1)}
        >
          Click Me
        </button>
        <button
          className="text-4xl bg-red-600 text-white h-20 w-44 rounded-sm font-bold cursor-pointer transition-all duration-100 hover:bg-red-700 hover:scale-103 active:scale-95"
          onClick={() => setcount(0)}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
