import React from 'react';
import './AandQ.css'

const AandQ = () => {
    return (
        <div>
            <div className='answear'>
                <h3 className='questions'>Q.1: Prop vs State</h3>
                <div className='q-1'>
                    <div>
                        <h3 className='ans-style'>Props</h3>
                        <h4>1. Prps is read only but immutable.</h4>
                        <h4>2. We can send data parent component to child component by props as am arguments.</h4>
                        <h4>3. Props makes component reusable.</h4>
                        <h4>4. Props is accessable by child component.</h4>
                        <h4>5. Props is external and dependent on renders component.</h4>
                    </div>
                    <div>
                        <h3 className='ans-style'>State</h3>
                        <h4>1. State is change asynchronously and mutable.</h4>
                        <h4>2. Props is accessable by child component.</h4>
                        <h4>3. State holds all information about the own component and and indicates component changes.</h4>
                        <h4>4.Its has no ability to makes component reusable.</h4>
                        <h4>5.State is enternal and dependent on React.Component.</h4>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='questions'>Q.2: How React works?</h3>
                <p className='answear'>React is JS Library and its build user interface.React just combined of JavaScript and XML. React has special some build up function those we calls Hooks. Those are use for data passing, data access, ui rendaring and etc. React useEffect used for catch/fetch data from another website or Data Base. React has <span>Diff Algorithm</span> to find the actual changes JSX Dom.Diff Algorithm compare the changes with new build up Virtual Dom ( Copy of UI/code ) and Real Dom (JSX code).React Transpiler <span>Babel</span> truns HTML codes into object. React is specially used for makes the web-site fast and easy.Of this case components insure its.Every components are function and reusable.
                </p>
            </div>
            <div>
                <h3 className='questions'>Q.3: How useState works?</h3>
                <p className='answear'>States is a JavaScript hooks function.State presented the whole information of exist components.useState is a function and its have two pair value(A callBack function and a variable). State CallBack function always update the variable value and useState() returns the value.useState() variable is the previous value of the useState() first property. useEffect() hook, the function that useState() returns in order to update the state each time the incoming prop changes.When a components changes, useState() update the value and re-renders the UI and we show</p>
            </div>
        </div>
    );
};

export default AandQ;