import React, { useState } from 'react';

const State4 = () => {
    const [color, setColor] = useState('White');

    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return (
        <div style={{ color: color, padding: '20px', textAlign: 'center' }}>
            <h2>This is my Favourite Color</h2>
            <button onClick={() => changeColor('red')}>Red</button>
            <button onClick={() => changeColor('blue')}>Blue</button>
            <button onClick={() => changeColor('green')}>Green</button>
            <button onClick={() => changeColor('yellow')}>Yellow</button>

            {/* <button onClick={() => changeColor('red')}>Red</button>
            <button onClick={() => changeColor('blue')}>Blue</button>
            <button onClick={() => changeColor('green')}>Green</button>
            <button onClick={() => changeColor('yellow')}>Yellow</button> */}
        </div>
    );
};

export default State4;
