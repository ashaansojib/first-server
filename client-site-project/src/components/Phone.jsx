import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            this is single phone
        </div>
    );
};

export default Phone;