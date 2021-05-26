
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';
import './App.css';


const App = () => {
  return (
    <div>
      <div class="navbar">
        <a href="/">Home</a>
      </div>
      <div className='rowC'>
        <Create />
        <Delete />
        <Update />
      </div>
      <Read />
    </div>
  );
}

export default App;