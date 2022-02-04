import React from 'react';
import Card from '../components/Card.js'
import catalog from '../assets/catalog.json'    

const Store = (props) => {

    return (
        <div id="store">
            {catalog.map((obj) => <Card data={obj} key={obj.id} add={props.add} />)}
        </div>
    )
}

export default Store;