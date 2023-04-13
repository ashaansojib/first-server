import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const data = useLoaderData();

    return (
        <div>
           <h2>the job article is: {data.length}</h2>
        </div>
    );
};

export default Phones;