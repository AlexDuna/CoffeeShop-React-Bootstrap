import React from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Reviews } from '../components/Reviews';
import { Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validation = Yup.object().shape({
    firstname: Yup.string().matches(/^[A-Za-z\-]+$/, 'First name must contain only letters').required('First name is required'),
    lastname: Yup.string().matches(/^[A-Za-z\-]+$/, 'First name must contain only letters').required('Last name is required'),
    emailaddress: Yup.string().email('Invalid email').required('Email is required'),
    phonenumber: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required'),
    date: Yup.date().min(new Date(), 'Date must be later than today').required('Date is required'),
    guestsnumber: Yup.number().min(1,'Must be at least 1').required('Number of guests is required'),
    comments: Yup.string(),
});

function Contact(){
    return(
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>
            <div className='bg-dark text-light container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center mb-3'>
                        <ContactInfo />
                    </div>
                    <h2 className='text-center fw-bold'>Reservations</h2>
                    <Formik 
                        initialValues={{
                        firstname: '',
                        lastname: '',
                        emailaddress: '',
                        phonenumber: '',
                        date: '',
                        guestsnumber: 1,
                        comments: '',
                    }}
                    validationSchema={validation}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='firstname'>First Name</Form.Label>
                                    <Form.Control
                                            type='text'
                                            id='firstname'
                                            name='firstname'
                                            placeholder='Enter First Name'
                                            value={values.firstname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='firstname' component='div' className='text-danger' />
                                        {values.firstname && !errors.firstname && (
                                            <small className='text-success'>First name is valid</small>
                                        )}
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='lastname'>Last Name</Form.Label>
                                    <Form.Control
                                            type='text'
                                            id='lastname'
                                            name='lastname'
                                            placeholder='Enter Last Name'
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='lastname' component='div' className='text-danger' />
                                        {values.lastname && !errors.lastname && (
                                            <small className='text-success'>Last name is valid</small>
                                        )}
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='emailaddress'>Email</Form.Label>
                                    <Form.Control
                                    type='email'
                                            id='emailaddress'
                                            name='emailaddress'
                                            placeholder='Enter Email'
                                            value={values.emailaddress}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='emailaddress' component='div' className='text-danger' />
                                        {values.emailaddress && !errors.emailaddress && (
                                            <small className='text-success'>Valid email</small>
                                        )}
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phonenumber'>Phone Number</Form.Label>
                                    <Form.Control
                                            type='tel'
                                            id='phonenumber'
                                            name='phonenumber'
                                            placeholder='Enter Phone Number'
                                            value={values.phonenumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='phonenumber' component='div' className='text-danger' />
                                        {values.phonenumber && !errors.phonenumber && (
                                            <small className='text-success'>Valid phone number</small>
                                        )}
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control
                                            type='date'
                                            id='date'
                                            name='date'
                                            value={values.date}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='date' component='div' className='text-danger' />
                                        {values.date && !errors.date && (
                                            <small className='text-success'>Valid Date</small>
                                        )}
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guestsnumber'>Number of Guests</Form.Label>
                                    <Form.Control
                                            type='number'
                                            id='guestsnumber'
                                            name='guestsnumber'
                                            placeholder='Enter Number of Guests'
                                            value={values.guestsnumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='guestsnumber' component='div' className='text-danger' />
                                        {values.guestsnumber && !errors.guestsnumber && (
                                            <small className='text-success'>Alright</small>
                                        )}
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                    <Form.Label htmlFor='comments'>Comments</Form.Label>
                                    <Form.Control
                                            as='textarea'
                                            id='comments'
                                            name='comments'
                                            placeholder='Enter Comments'
                                            value={values.comments}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                            </Form.Group>
                            <div className='text-center'>
                            <button type='submit' className='btn btn-lg text-light btn-primary mb-3 justify-content-center'>Send</button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    </div>
                </div>
            
            <div className='bg-dark text-light py-5'>
                <Reviews/>
            </div>
          
        </div>
    )
}

export default Contact;
