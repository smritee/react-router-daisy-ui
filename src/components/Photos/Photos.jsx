import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos,setPhotos]=useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res=>res.json())
            .then(data => setPhotos(data))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Posts : {photos.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                photos.map(photo => <Photo photo={photo} key={photos.albumId}></Photo>)
            }
            </div>

            
        </div>
    );
};

export default Photos;