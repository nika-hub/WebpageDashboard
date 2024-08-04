import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
