
import './App.css'; 
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import RouteSwitch from './RouteSwitch';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouteSwitch />
  </BrowserRouter>
  );
}

export default App;
