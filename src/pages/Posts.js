import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Posts = () => {
    return (<div><p>posts</p>
    <Link className="btn btn-primary" to="/">
        Retour vers la home
      </Link>
    </div>
    );
};