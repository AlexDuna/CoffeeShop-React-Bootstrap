import React from 'react';
import { MenuButton } from '../components/MenuButton';
import Menu from './Menu';
import './Home.css';
import AboutImg from '../resources/images/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../resources/images/contact-img.png';

function Home(){
    return(
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome to</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>AstroCafe</h1>
                            <MenuButton />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about-img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>
                        Bine ai venit la AstroCafe, locul unde pasiunea pentru cafea întâlnește fascinația pentru univers si astrologie! La AstroCafe, ne propunem să aducem o experiență nouă și captivantă în lumea cafelei.
Cafeaua noastră este mai mult decât o băutură matinală - este o călătorie în universul aromelor și gusturilor fine. Folosim doar cele mai proaspete boabe de cafea, atent selecționate din regiuni exotice ale lumii, și le prăjim cu grijă pentru a evidenția notele lor distinctive
                        </p>
                        <p>
                        Echipa noastră este formată din pasionați de cafea și artiști ai gustului, gata să te introducă în lumea fascinantă a cafelei premium. Fie că ești un cunoscător avansat sau doar un începător curios, la AstroCafe vei găsi mereu ceva pe placul tău.
Te invităm să ne vizitezi și să te bucuri de experiența noastră unica la AstroCafe, unde cafeaua și creativitatea se întâlnesc sub același cer. Aici, fiecare ceașcă este o călătorie spre o altă galaxie a gustului!   
                        </p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-secondary btn-lg'>More about us</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='menu-section py-5 text-light shadow'>
            <h2 className='fs-1 mb-5 text-uppercase text-center fw-bold'>Our Favorites ♡</h2>
                <div className='container d-flex d-column align-items-center'>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-5'>
                            <h3 className='fs-2 mb-3'>Coffee</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Flat White L</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>17 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Americano L</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>14 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Macchiato L</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>16 Ron</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-3'>Tea</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Nibbana Ginger Tea</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>18 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Blueberry Tea</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>18 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Maha Mandarine Tea</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>17 Ron</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-3'>Lemonade</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Limonada cu levănțică</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>18 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Limonada Lollipop</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>18 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Lemon Iced Tea</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>17 Ron</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-3'>Smoothie</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Berries Smoothie</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>19 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Smoothie cu fructe tropicale</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>20 Ron</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Smoothie cu mix de fructe</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>17 Ron</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='column text-center'>
                <Link to="/menu">
                            <button type='button' className='btn btn-outline-light btn-lg '>AstroCafe Menu</button>
                </Link>
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo/>
                        </div>
                        <div className='col-lg-7 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;