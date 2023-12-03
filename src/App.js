import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainscreen from './components/mainscreen';
import Navbar from './components/navbar';
import Popularteachers from './components/popularteachers';
import Topsubs from './components/topsubs';
import Tutorfindscreen from './components/tutorfindscreen'
function App() {
  return (
    <div className="container screen">
      <Navbar />
      <Mainscreen />
      <Popularteachers/>
      <Topsubs/>
      <Tutorfindscreen/>
    </div>
  );
}

export default App;
