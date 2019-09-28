import React from 'react';

function Child(props) {

    const { name, clickMe } = props;

    return (
        <div>
            <h1>Hey {name}</h1>
            <button onClick={clickMe}>Change Name</button>
        </div>
    );
}

export default Child;