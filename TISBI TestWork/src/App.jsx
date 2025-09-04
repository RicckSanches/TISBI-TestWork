
import Header from './components/header/header.jsx';
import Slider from './components/slider/slider.jsx';
import Search from "./components/searchBlock/search.jsx";
import './App.scss'
import BusinessToDate from "./components/BusinessToDate/BusinessToDate.jsx";
import ApplicationForm from "./components/End-Form/Form.jsx";


function App() {

  return (
    <>

        <Header />
        <main>
           <Slider />
            <Search />
            <BusinessToDate />
            <ApplicationForm />
        </main>

    </>
  )
}

export default App
