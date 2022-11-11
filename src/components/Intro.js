import React from 'react';

function Intro() {
    return (
        <header id='home' className="App-header">
            <h2>Corona Virus Dashboard.</h2>
            <h5 className='sub-title'>List statistics for all countries</h5>
            <br />
            <div className="imgContainer">
                <img src={require('../resources/images/1.png')} className="Logo1" alt="corona icon 1"/>
                <img src={require('../resources/images/2.png')} className="Logo2" alt="corona icon 2"/>
                <img src={require('../resources/images/3.png')} className="Logo3" alt="corona icon 3"/>
                <img src={require('../resources/images/4.png')} className="Logo4" alt="corona icon 4"/>
                <img src={require('../resources/images/5.png')} className="Logo5" alt="corona icon 5"/>
            </div>

            <div className='scrolldown'>
                <div className="chevrons">
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </div>
        </header>
    );
}

export default Intro;