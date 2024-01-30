import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [catImages, setCatImages] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const getData = async () => {
        try {
            setIsVisible(true);
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
            setCatImages(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const hideImages = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <h1 className="text-center">Testing REST API</h1>
            <div className="d-flex justify-content-center">
                <button onClick={getData} className="btn btn-primary mb-4 mx-2">Get Data</button>
                <button onClick={hideImages} className="btn btn-secondary mb-4 mx-2">Hide Images</button>
            </div>
            {isVisible && (
                <div className="d-flex flex-wrap justify-content-center">
                    {catImages.map((cat) => (
                        <div key={cat.id} className="card" style={{ width: '18rem', marginBottom: '25px', marginLeft: '25px' }}>
                            <img className="card-img-top" src={cat.url} alt="Cat" height="250px" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
