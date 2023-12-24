import './App.css';
import QueryDashboard from './components/QueryDashboard';
import Footer from './components/footer/Footer';
import MainNavbar from './components/header/MainNavbar';
import GetStarted from './components/GetStarted';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <MainNavbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route path="/query-database" element={<QueryDashboard />} /> 
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
