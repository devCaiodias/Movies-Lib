import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className={App}>
      <NavBar />
      <h2>Movies Lib</h2>
      <Outlet  />
    </div>
  )
}

export default App;
