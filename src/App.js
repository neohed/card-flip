import React, { useState } from "react";
import "./App.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function RenderCard(cardNumber, handleFlip, cardFaceClass) {
    switch (cardNumber) {
        case 1:
            return <Card1 handleFlip={handleFlip} cardFaceClass={cardFaceClass} />;
        case 2:
            return <Card2 handleFlip={handleFlip} cardFaceClass={cardFaceClass} />;
        case 3:
            return <Card3 handleFlip={handleFlip} cardFaceClass={cardFaceClass} />;
        default:
            return <Card1 handleFlip={handleFlip} cardFaceClass={cardFaceClass} />;
    }
}

const App = () => {
    const [isFlipped, setFlipped] = useState(false);
    const [cardFront, setCardFront] = useState(1);
    const [cardBack, setCardBack] = useState(2);

    const handleFlip = (nextCard) => {
        if (isFlipped) {
            setCardFront(nextCard);
            setFlipped(false)
        } else {
            setCardBack(nextCard);
            setFlipped(true)
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div
                    className={`flip-card ${
                        isFlipped ? "flipped" : ""
                    }`}
                >
                    <div className="flip-card-inner">
                        {
                            RenderCard(cardFront, handleFlip, 'flip-card-front')
                        }
                        {
                            RenderCard(cardBack, handleFlip, 'flip-card-back')
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
