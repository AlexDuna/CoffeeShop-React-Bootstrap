import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';
import about from './pages/about';

function App() {
  return (
    <div >
      <Navbar expand="lg" className='fixed-top bg-body-tertiary-shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Coffee Shop
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse if='basic-navbar-nav'>
            <Nav className='me-auto.justify-content-end.w-100'>
              <Nav.Link href='/' className='active text-uppercase'> Home </Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Routes>
      <Route path='/' element={<home/>}/>
      <Route path='/' element={<menu/>}/>
      <Route path='/' element={<about/>}/>
      <Route path='/' element={<contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
