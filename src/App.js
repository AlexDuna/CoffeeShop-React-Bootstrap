import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div >
      <Navbar expand="lg" className='fixed-top bg-body-tertiary-shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success text-black fw-semibold'>
              Coffee Shop
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse if='basic-navbar-nav'>
          <Nav className='me-auto.justify-content-end.w-100'>
          <Nav.Link href='/' className='active text-uppercase text-black'>Home</Nav.Link>
              <Nav.Link href='/Menu' className='text-uppercase text-black'>Menu</Nav.Link>
              <Nav.Link href='/About' className='text-uppercase text-black'>About</Nav.Link>
              <Nav.Link href='/Contact' className='text-uppercase text-black'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>

    <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>@ AlexDuna Web Development</p>
    </footer>


    </div>
  );
}

export default App;
