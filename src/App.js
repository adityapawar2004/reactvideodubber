
import './App.css';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import MyProjects from './myprojects';


function App() {
  
 
  return (
   
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/myprojects" element={<MyProjects/>}/>
    </Routes>
   
  );
}

export default App;
