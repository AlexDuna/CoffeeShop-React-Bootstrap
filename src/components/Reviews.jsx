import React from "react";
import {Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../resources/images/Person1.jpg';
import Person2 from '../resources/images/Person2.jpg';
import Person3 from '../resources/images/Person3.jpg';
import Person4 from '../resources/images/Person4.jpg';
import Person5 from '../resources/images/Person5.jpg';
import Person6 from '../resources/images/Person6.jpg';


export function Reviews(){
    return(
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-3">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>Atmosfera este minunată - relaxantă, primitoare și plină de farmec. Interiorul este frumos decorat, iar muzica ambientală creează o ambianță plăcută. Este locul perfect pentru a te bucura de o cafea în timp ce te relaxezi sau lucrezi.</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Sarah Smith</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>Personalul este extrem de amabil, prompt și bine informat despre cafea. Au fost receptivi la preferințele noastre și ne-au oferit recomandări excelente. Comenzile au fost servite rapid și cu un zâmbet, ceea ce a făcut întreaga experiență plăcută și relaxantă.</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Daniel Trasher</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>Cafeaua este pur și simplu delicioasă! Am savurat un cappuccino perfect echilibrat și un latte cu o spumă bogată și arome intense. Boabele de cafea de specialitate prăjite local adaugă o notă distinctivă fiecărei băuturi. Este clar că se acordă o atenție deosebită calității cafelei.</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">John Krasinski</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>Raportul calitate-preț este excelent. Prețurile sunt rezonabile pentru cafea de înaltă calitate și pentru atmosfera oferită. Este un loc unde primești cu adevărat valoare pentru fiecare leu cheltuit.</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Mark Holland</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>Am avut o experiență absolut fantastică la AstroCafe și nu pot să recomand acest loc suficient de mult!</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person5} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Elisabeth Parker</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                <i>AstroCafe este o bijuterie ascunsă în inima orașului și trebuie să spun că este una dintre cele mai plăcute descoperiri pe care le-am făcut în materie de cafenele!</i>
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person6} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Martha Ollsen</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}