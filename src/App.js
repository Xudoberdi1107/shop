import './App.css';
import {Route , Routes} from 'react-router-dom'
import { Home, Korzinka } from './pages';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/korzinka' element={<Korzinka/>}/>
        </Routes>
    </div>
  );
}

export default App;
