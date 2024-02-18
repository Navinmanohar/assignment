import './App.css';
import Transactions from './components/Transactions';
import Nav from './components/Nav/Nav';
import {BrowserRouter} from "react-router-dom"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Transactions/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
