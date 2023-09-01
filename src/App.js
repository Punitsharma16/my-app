
import {Name} from './components/form.jsx';
import {Email} from './components/form.jsx';
import {PrintArray} from './components/printArray.jsx';
import './App.css';

function App() {
  const val = false;
  const today = new Date();
  const year = today.getFullYear();

  return (
      <div className='App'>
        <span>Welcome {val? "Abhi" : "Guest"} {year}</span>
        <Name/>
        <Email/>
        <PrintArray/>
      </div>
  );
}

export default App;
