import React from 'react';
import './Menu.css';
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap';
import BlackCoffeeImg from '../resources/images/blackcoffee-img.jpg';
import MilkCoffeeImg from '../resources/images/milkcoffee-img.jpg';
import OriginalCoffeeImg from '../resources/images/originalcoffee-img.webp';
import TeaImg from '../resources/images/tea-img.jpg';
import LemonadeImg from '../resources/images/lemonademenu-img.jpg';
import SmoothieImg from '../resources/images/smoothiemenu-img.jpg';
import MilkShakeImg from '../resources/images/milkshake-img.avif';
import {useRef} from 'react';

const blackcoffee = [
    {
        id:1,
        name: 'Americano',
        description: 'Portie tripla de espresso, apa fiebinte 340 ml',
        price: '14 Ron'
    },
    {
        id:2,
        name: 'Espresso',
        description: 'Cafea macinata, apa fierbinte 20 ml',
        price: '10 Ron' 
    },
    {
        id:3,
        name: 'Espresso double',
        description: 'Portie dubla de espresso, apa fierbinte 40 ml',
        price: '12 Ron'
    },
    {
        id:4,
        name: 'Pour Over Coffee',
        description: 'Cafea macinata, apa fierbinte 220 ml',
        price: '19 Ron'
    },
    {
        id:5,
        name: 'Large Pour Over Coffee',
        description: 'Cafea macinata, apa fierbinte 550 ml',
        price: '19 Ron'
    }
]

const milkcoffee = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Portie dubla espresso, lapte 340 ml',
        price: '17 Ron'
    },
    {
        id: 2,
        name: 'Latte',
        description: 'Portie de espresso, lapte 340 ml',
        price: '17 Ron'
    },
    {
        id: 3,
        name: 'Flat White',
        description: 'Portie dubla de espresso, lapte 170 ml',
        price: '17 Ron'
    },
    {
        id: 4,
        name: 'Hot Chocolate',
        description: 'Ciocolata neagra, smantana lichida de 10%, zahar, cacao 120 ml',
        price: '14 Ron'
    },
    {
        id: 5,
        name: 'Babyccino',
        description: 'Lapte, ciocolata neagra, sirop de zahar, cacao 170 ml',
        price: '14 Ron'
    },
    {
        id: 6,
        name: 'Macchiato',
        description: 'Lapte spumat, espresso, spuma de lapte 300 ml',
        price: '16 Ron'
    }
]

const originalcoffee = [
    {
        id: 1,
        name: 'Hippy Coffee',
        description: 'Espresso, lapte, sirop din zahar lapte condensat, smantana lichida',
        price: '23 Ron'
    },
    {
        id: 2,
        name: 'Vanilla Raf',
        description: 'Espresso, smantana lichida de 10%, zahar vanilat 340 ml',
        price: '21 Ron'
    },
    {
        id: 3,
        name: 'Salty Caramel',
        description: 'Espresso, smantana lichida de 10%, sos din caramel sarat, unt, sare',
        price: '21 Ron'
    }
]

const tea=[
    {
        id: 1,
        name: 'Ceai cu fructe',
        description: 'Apa fierbinte, fruct la alegere (fructe de padure, mar, piersica..) 400 ml',
        price: '18 Ron'
    },
    {
        id: 2,
        name: 'Nibbana Ginger Tea',
        description: 'Apa fierbinte, gem de aloe vera cu miere, ghimbir, lamaie, menta 400 ml',
        price: '19 Ron'
    },
    {
        
        id: 3,
        name: 'Blueberry Tea',
        description: 'Apa fierbinte, gem de coacaze, lime, hibiscus, menta, salvie 400 ml',
        price: '19 Ron'
    },
    {
        
        id: 4,
        name: 'Maha Mandarine Tea',
        description: 'Apa fierbinte, piure de mandarine, sirop de zahar, zmeura congelata, cardamom 400 ml',
        price: '17 Ron'
    }
]

const lemonade=[
    {
        id: 1,
        name: 'Lemonada cu levănțică',
        description: 'Gheata 75%, apa, fresh de lamaie, zahar, sirop pe baza de levănțică si zahar',
        price: '17 Ron'
    },
    {
        id: 2,
        name: 'Lemonada lollipop',
        description: 'Gheata 50%, sirop din suc de lamaie, acadele, zmeura congelata',
        price: '17 Ron'
    },
    {
        id: 3,
        name: 'Lemon Iced Tea',
        description: 'Gheata, apa, fresh de lamaie, ceai verde rece, sirop de zahar, lamaie menta',
        price: '17 Ron'
    },
    {
        id: 4,
        name: 'Orange Iced Tea',
        description: 'Gheata, apa, fresh de portocale, ceai negru rece, sirop de zahar, portocala, menta',
        price: '17 Ron'
    },
    {
        id: 5,
        name: 'Limonada Aruba Aloe & castravete',
        description: 'Gheata 50%, apa carbogazoasa, gem de aloe si miere, sirop de zahar, castravete, lime, ghimbir, menta',
        price: '17 Ron'
    },
]

const smoothie=[
    {
        id: 1,
        name: 'Berries Smoothie',
        description: 'Iaurt, lapte, fructe de padure congelate, banana, miere 400 ml',
        price: '19 Ron'
    },
    {
        id: 2,
        name: 'Smoothie cu fructe tropicale',
        description: 'Gheata 50%, mar, banana, piure de fructe tropicale, lime, coaja de lime',
        price: '19 Ron'
    },
    {
        id: 3,
        name: 'Smoothie cu mix de fructe',
        description: 'Portocala, apa, banana, kiwi, gheata 25% 400 ml',
        price: '19 Ron'
    },
    {
        id: 4,
        name: 'Banana Smoothie',
        description: 'Banane, apa, gheata 50% 400 ml',
        price: '17 Ron'
    },
    {
        id: 5,
        name: 'Strawberry Smoothie',
        description: 'Capsuni, banane, sirop de capsuni, apa, gheata 25% 400 ml',
        price: '19 Ron'
    },
]

const milkshake=[
    {
        id: 1,
        name: 'Chocolate Milkshake',
        description: 'Inghetata de vanilie, frisca batuta, lapte, ciocolata neagra 400 ml',
        price: '19 Ron'
    },
    {
        id: 2,
        name: 'Cookie Milkshake',
        description: 'Inghetata de vanilie, frisca batuta, lapte, biscuiti oreo 400 ml',
        price: '19 Ron'
    },
    {
        id: 3,
        name: 'Vanilla Milkshake',
        description: 'Inghetata de vanilie, frisca batuta, lapte, zahar vanilat 400 ml',
        price: '19 Ron'
    },
    {
        id: 4,
        name: 'Coffee Milkshake',
        description: 'Lapte, inghetata de vanilie, frisca batuta, ristretto, cafea macinata 400 ml',
        price: '19 Ron'
    },
]



function Menu(){
    const blackCoffeeRef = useRef(null);
    const milkCoffeeRef = useRef(null);
    const originalCoffeeRef = useRef(null);
    const teaRef = useRef(null);
    const lemonadeRef = useRef(null);
    const smoothieRef = useRef(null);
    const milkshakeRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleButtonClick = (ref) => {
        scrollToSection(ref);
    };

    return(
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>
            <div className='column'>
                <div className='text-center'>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(blackCoffeeRef)}>
                        Black Coffee
                    </button>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(milkCoffeeRef)}>
                        Milk Coffee
                    </button>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(originalCoffeeRef)}>
                        Original
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='text-center'>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(teaRef)}>
                        Tea
                    </button>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(lemonadeRef)}>
                        Lemonade
                    </button>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(smoothieRef)}>
                        Smoothies
                    </button>
                    <button className='btn btn-outline-dark btn-lg mt-3 mx-2 mb-1'
                        onClick={() => handleButtonClick(milkshakeRef)}>
                        Milkshakes
                    </button>
                </div>
            </div>

            <div ref={blackCoffeeRef} className='blackcoffee my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Black Coffee</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {blackcoffee.map((blackcoffee)=> (
                                    <div key={blackcoffee.id}>
                                        <Card className='border-1 border-secondary'>
                                            <CardBody>
                                                <CardTitle className='text-center fs-2 fw-bold'>
                                                    {blackcoffee.name}
                                                </CardTitle>
                                                <CardText className='text-center fs-5 text-secondary'>
                                                    {blackcoffee.description}
                                                </CardText>
                                                <CardText className='text-center fs-3 fw-bold text-success'>
                                                    {blackcoffee.price}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={BlackCoffeeImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>    
            </div>

            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={milkCoffeeRef} className='milkcoffee my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Milk Coffee</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={MilkCoffeeImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {milkcoffee.map((milkcoffee)=> (
                                <div key={milkcoffee.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {milkcoffee.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {milkcoffee.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {milkcoffee.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
            </div>

            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={originalCoffeeRef} className='originalcoffee my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Original Coffee</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {originalcoffee.map((originalcoffee)=> (
                                <div key={originalcoffee.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {originalcoffee.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {originalcoffee.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {originalcoffee.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={OriginalCoffeeImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>    
            </div>
                
            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={teaRef} className='tea my-5 bg'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Tea</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={TeaImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {tea.map((tea)=> (
                                <div key={tea.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {tea.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {tea.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {tea.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
            </div>

            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={lemonadeRef} className='lemonade my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Lemonade</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lemonade.map((lemonade)=> (
                                <div key={lemonade.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {lemonade.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {lemonade.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lemonade.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={LemonadeImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>    
            </div>
            
            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={smoothieRef} className='smoothie my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Smoothies</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={SmoothieImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {smoothie.map((smoothie)=> (
                                <div key={smoothie.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {smoothie.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {smoothie.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {smoothie.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
            </div>

            {/*Linie de separare intre categoriile din meniu*/}
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '5px'}}/>

            <div ref={milkshakeRef} className='milkshake my-5'>
                <div className='container'>
                    <h2 className='text-left fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-secondary'>Milkshakes</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {milkshake.map((milkshake)=> (
                                <div key={milkshake.id}>
                                    <Card className='border-1 border-secondary'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-2 fw-bold'>
                                                {milkshake.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5 text-secondary'>
                                                {milkshake.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {milkshake.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-left'>
                            <img src={MilkShakeImg} className='img-fluid mt-0 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>    
            </div>          
        </div>
    )
}

export default Menu;
