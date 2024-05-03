import React from 'react';
import {Link} from 'react-router-dom';

export function MenuButton(){
    return (
        <div>
            <Link to="/menu">
            <button type="button" className="btn btn-lg btn-dark">AstroCafe Menu</button>
            </Link>
        </div>
    )
}