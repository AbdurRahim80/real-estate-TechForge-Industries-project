import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px] mb-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pvZ7kZh/pexels-pixabay-257700.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QN3QZ3P/pexels-pixabay-459728.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sHpShb6/pexels-rezwan-1216589.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/1n1MQwR/pexels-pixabay-209251.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// https://ibb.co/9rphR5r
// https://ibb.co/vVWjkLr
// https://ibb.co/fxgsHhc
// https://ibb.co/kQQML0w

// https://i.ibb.co/pvZ7kZh/pexels-pixabay-257700.jpg
// https://i.ibb.co/QN3QZ3P/pexels-pixabay-459728.jpg
// https://i.ibb.co/sHpShb6/pexels-rezwan-1216589.jpg
// https://i.ibb.co/1n1MQwR/pexels-pixabay-209251.jpg
// https://i.ibb.co/pvZ7kZh/pexels-pixabay-257700.jpg