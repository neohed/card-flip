import React from 'react';

const Card2 = ({handleFlip, cardFaceClass}) => {
    return (
        <div className={cardFaceClass}>
            <div className="card-content">
                02 - Two. A Card. Mrs Jane says "Hello
            </div>
            <button
                className="flip-button"
                onClick={() => handleFlip(1)}
            >
                Meet my Husband
            </button>
            <button
                className="flip-button"
                onClick={() => handleFlip(3)}
            >
                Meet my pet cat
            </button>
        </div>
    );
};

export default Card2;