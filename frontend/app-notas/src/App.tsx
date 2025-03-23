import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importar Router, Routes y Route
import Header from './components/Header/';
import TaskList from './components/TaskList/';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm/';

const MyApp = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/task/nueva-tarea" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyApp;
