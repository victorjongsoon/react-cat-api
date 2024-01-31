import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dog = () => {
    const [dogImages, setDogImages] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const getDogData = async () => {
        try {
            setIsVisible(true);
            const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
            setDogImages(response.data.message); // Assuming the API returns an array of image URLs
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const hideImages = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <h1 className="text-center">Dog Image Gallery</h1>
            <div className="d-flex justify-content-center">
                <button onClick={getDogData} className="btn btn-primary mb-4 mx-2">Show Dogs</button>
                <button onClick={hideImages} className="btn btn-secondary mb-4 mx-2">Hide Images</button>
            </div>
            {isVisible && (
                <div className="d-flex flex-wrap justify-content-center">
                    {dogImages.map((image, index) => (
                        <div key={index} className="card" style={{ width: '18rem', marginBottom: '25px', marginLeft: '25px' }}>
                            <img className="card-img-top" src={image} alt="Dog" height="250px" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dog;
