import './App.css';
import Navbar from "./Components/Heading/Navbar.jsx";
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
         <Navbar 
         img='https://www.chaabi.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchaabiLogo.ae532a35.png&w=384&q=75'
         name='Puneet Dhiman'
         summary="Following Is Your Organization's Performance Summary"
         />
         <Home/>
    </div>
  );
}

export default App;
