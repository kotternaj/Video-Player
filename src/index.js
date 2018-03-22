import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB_mUE2UeXCVH01GYk3dJ1-WsapoWqIlFc';


// create a new component. this component will produce some HTML

// const  App = function() {
const  App = () => {
    return <div>Hi!</div>;
}

//take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

