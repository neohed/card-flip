import React, { useState } from 'react';
import styles from './CardFrame.module.css';

const CardFrame = () => {
    const [cardState, setCardState] = useState("main");

    const renderCardContent = () => {
        switch (cardState) {
            case "content1":
                return <CardContent1 onCancel={() => setCardState("main")} />;
            case "content2":
                return <CardContent2 onCancel={() => setCardState("main")} />;
            default:
                return <MainCardContent onContent1={() => setCardState("content1")} onContent2={() => setCardState("content2")} />;
        }
    };

    return (
        <div className={`${styles.cardContainer} ${cardState !== "main" ? "flipped" : ""}`}>
            {renderCardContent()}
        </div>
    );
};

const MainCardContent = ({ onContent1, onContent2 }) => (
    <div className={styles.cardContent}>
        <p>
            Main Content
        </p>
        <button onClick={onContent1}>Content 1</button>
        <button onClick={onContent2}>Content 2</button>
    </div>
);

const CardContent1 = ({ onCancel }) => (
    <div className={styles.cardContent}>
        <p>
            Content 1
        </p>
        <button onClick={onCancel}>Cancel</button>
    </div>
);

const CardContent2 = ({ onCancel }) => (
    <div className={styles.cardContent}>
        <p>
            Content 2
        </p>
        <button onClick={onCancel}>Cancel</button>
    </div>
);

export default CardFrame;
