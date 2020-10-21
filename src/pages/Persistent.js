import React from 'react';
import { Link } from 'react-router-dom';

export const Persistent = () => {
    return<div>
        <h1>Persistent  data</h1>
        <br />
    <Link className="btn btn-primary" to="/">
        Retour vers la home
        </Link>
    </div>
      
};