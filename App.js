// import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLanding } from './components/MainLanding';
import{Login} from './components/Login';

function App() {
  return (
    <div className="App">
      <MainLanding/>
      <Login/>

    </div>
  );
}

export default App;
