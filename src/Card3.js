import React from 'react';

const Card3 = ({handleFlip, cardFaceClass}) => {
    return (
        <div className={cardFaceClass}>
            <div className="card-content">
                03 - Three. Mr Felix the cat says "Meow"
            </div>
            <button
                className="flip-button"
                onClick={() => handleFlip(1)}
            >
                Meet my man owner
            </button>
            <button
                className="flip-button"
                onClick={() => handleFlip(2)}
            >
                Meet my woman owner
            </button>
        </div>
    );
};

export default Card3;