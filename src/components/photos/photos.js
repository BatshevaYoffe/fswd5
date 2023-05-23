import React, { useState, useEffect } from 'react';
import './photos.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Photos = () => {
    //     const { id } = useParams();
    //     const [photos, setPhotos] = useState([]);
    //     const [showPhotos, setShowedPhotos] = useState(5); //  מספר התמונות המוצג בכל שלב ניתן לשנות


    //     useEffect(() => {
    //         console.log(id);
    //         fetch(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setPhotos(data);
    //             })

    //     }, []);
    //     const handleShowMorePhotos = () => {
    //         setShowedPhotos(prevPhotos => prevPhotos + 5); // הוספת 5 תמונות נוספות בכל לחיצה
    //     };

    //     return <div>
    //         <div>
    //             {photos.slice(0, showPhotos).map(photo => (
    //                 <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
    //             ))}
    //         </div>
    //         {showPhotos < photos.length && (
    //             <button onClick={handleShowMorePhotos}>המשך</button>
    //         )}
    //     </div>
    // };
    const { id } = useParams();

    const [photos, setPhotos] = useState([]);
    const [photosPerPage, setPhotosPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos =  () => {
            setIsLoading(true);
            try {
                fetch(`https://jsonplaceholder.typicode.com/album/${id}/photos?_limit=${photosPerPage}`)
                .then(response => response.json())
                .then(data => {
                        setPhotos(data);
                        setIsLoading(true);
                    })
            }
            catch (error) {
                console.error(error);
                setIsLoading(false);
            }

        };
        fetchPhotos();
    }, [id, photosPerPage]);

    const loadMorePhotos = () => {
        console.log(photosPerPage);
        setPhotosPerPage(prev => prev + 10)
        //    setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <h1>Photos</h1>
            <div className="photos-container">
                {photos.map(photo => (
                    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                ))}
            </div>
            {/* {isLoading && <p>Loading...</p>}
            {!isLoading && ( */}
                <button onClick={loadMorePhotos} >
                    {/* disabled={isLoading}> */}
                    Load More Photos
                </button>
            {/* )} */}
        </div>
    );
}; export default Photos;