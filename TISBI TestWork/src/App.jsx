
import Header from './components/header/header.jsx';
import Slider from './components/slider/slider.jsx';
import Search from "./components/searchBlock/search.jsx";
import './App.scss'
import Date from "./components/BusinessToDate/date.jsx";


function App() {

  return (
    <>

        <Header />
        <main>
           <Slider />
            <Search />
            <Date />
        </main>

    </>
  )
}

export default App
