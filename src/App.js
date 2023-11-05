import './App.css';
import Home from './pages/Home/Home';
import { TaskContextProvider } from './db/TaskContext';


function App() {
  return (
    <div className="w-full m-0">
      <TaskContextProvider>
     <Home />
    </TaskContextProvider>
    </div>
  );
}

export default App;
