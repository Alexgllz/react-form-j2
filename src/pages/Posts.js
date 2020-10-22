import React from 'react';
import { Link } from 'react-router-dom';
import {InfosPosts} from '../Infos';

export const Posts = props => {
    return (
    <div>
        <p>posts</p>
        {/* <InfosPosts currentPosts={props.currentPosts}/> */}
        {/* {JSON.stringify (props.currentPosts)} */}
        <Link className="btn btn-primary" to="/">
            Retour vers la home
        </Link>
    </div>
    );
};