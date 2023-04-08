import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData=useLoaderData();
    
    return (
        <div>
            <h1>this is home:{loaderData.length}</h1>
        </div>
    );
};

export default Home;