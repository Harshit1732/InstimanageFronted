import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar';
import Dashboard from './Components/dashboard';

function App() {
  return (
    <div className="dashboard">
      <Sidebar/>
       <Dashboard/>
    </div>
  );
}

export default App;
