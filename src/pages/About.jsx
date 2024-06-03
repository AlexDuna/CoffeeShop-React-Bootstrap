import React from 'react';
import './About.css';
import AboutBarman1 from '../resources/images/aboutbarman1.avif';
import AboutBarman2 from '../resources/images/aboutbarman2.jpg';
import AboutCeo from '../resources/images/aboutceo.jpeg';
import { AboutGallery} from '../components/AboutGallery';
import { Reviews } from '../components/Reviews';

function About(){
    return(
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-6'>
                        <img src={AboutCeo} className='img-fluid my-4' alt="" />
                    </div>
                </div>
            <h2 className="text-center fs-5 mb-5"><i>-Alex Duna (CEO of AstroCafe)</i></h2>
            <p><i>"La AstroCafe, ne pasă de fiecare client. Vrem să te simți ca acasă, așa că ne străduim să creăm un spațiu prietenos și confortabil, unde poți să te relaxezi sau să lucrezi în liniște.

Echipa noastră este formată din barista pasionați și experimentați, mereu pregătiți să îți ofere cea mai bună experiență de cafea. Fie că preferi un espresso intens, un cappuccino cremos sau o cafea de filtru bogată în arome, suntem aici să te bucuri de fiecare înghițitură."</i></p>
            
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-6'>
                        <img src={AboutBarman1} className='img-fluid my-4' alt="" />
                    </div>
                </div>
            <h2 className="text-center fs-5 mb-5"><i>-Kendrick Kaarl (barista)</i></h2>
            <p><i>"Pentru mine, cafeaua nu este doar o băutură, ci o artă. Am învățat să apreciez fiecare aspect al procesului de preparare a cafelei, de la selecția boabelor până la prepararea cu atenție a fiecărei cești. Ne mândrim cu cafelele noastre de specialitate, selectate din regiuni exotice din întreaga lume și prăjite pentru a-ți oferi cele mai bogate arome."</i></p>

            <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-6'>
                        <img src={AboutBarman2} className='img-fluid my-4' alt="" />
                    </div>
                </div>
            <h2 className="text-center fs-5 mb-5"><i>-Hannelore Dan (barista)</i></h2>
            <p><i>"AstroCafe este mai mult decât un simplu coffee shop. Este un loc unde comunitatea se adună pentru a savura o cafea de calitate și pentru a petrece timp de calitate împreună. Atmosfera noastră este prietenoasă și relaxantă, perfectă pentru o întâlnire cu prietenii sau pentru a te bucura de puțin timp pentru tine.

            Îmi place să întâlnesc oameni noi și să le ofer o experiență de cafea de neuitat. Fie că îți place un espresso puternic, un latte cremos sau o cafea de filtru aromată, sunt aici să te ghidez și să te asigur că primești exact ce îți dorești."</i></p>
            
            </div>

            <div className='bg-dark text-light'>
                <AboutGallery/>
            </div>
            
            <div className='my-5'>
                <Reviews/>
            </div>

        </div>
    )
}

export default About;
