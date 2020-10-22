import React from 'react';
import { Link } from 'react-router-dom';
import { CustomMap } from '../CustomMap';
import { Infos } from '../Infos';

export const Home = props => <>
    <CustomMap onCountryClick={props.onCountryClick} allCountries={props.allCountries} />
    <div className='m-2 text-center'>
        <Link className='btn btn-primary' to='/todo'>Voir la liste des todos</Link>
    </div>
    <div className='m-2 text-center'>
    <Link className="btn btn-primary m-2" to="/Posts">
        Voir les posts
    </Link>
    </div>
    <Infos currentCountry={props.currentCountry} />
</>;