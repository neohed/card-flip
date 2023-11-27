import React from 'react';

const Card1 = ({handleFlip, cardFaceClass}) => {
    return (
        <div className={cardFaceClass}>
            <div className="card-content">
                01 - One. A Card. Mr Dave
            </div>
            <button
                className="flip-button"
                onClick={() => handleFlip(2)}
            >
                Meet my wife
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

export default Card1;