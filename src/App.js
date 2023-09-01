
import {Name} from './components/form.jsx';
import {Email} from './components/form.jsx';
import './App.css';

function App() {
  const val = false;
  const today = new Date();
  const year = today.getFullYear();

  const names = ['abhi','raghav','rahul','tej'];

  return (
      <div className='App'>
        <span>Welcome {val? "Abhi" : "Guest"} {year}</span>
        <Name/>
        <Email/>
      </div>
  );
}

export default App;
