import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaGlobeAfrica } from "react-icons/fa";

const styleWarning = buildStyles({
    strokeLinecap: 'butt',
    textSize: '14px',
    pathTransitionDuration: 3,
    textColor: '#ffc107',
    trailColor: '#ffc107',
})

const styleDanger = buildStyles({
    strokeLinecap: 'butt',
    textSize: '14px',
    pathTransitionDuration: 3,
    textColor: '#dc3545',
    trailColor: '#dc3545',
})

const styleGreen = buildStyles({
    strokeLinecap: 'butt',
    textSize: '14px',
    pathTransitionDuration: 3,
    textColor: '#28a745',
    trailColor: '#28a745',
})

function Global() {
    const data              = useContext(AppContext);
    const global            = data.Global
    const TotalConfirmed    = global ? global.TotalConfirmed.toLocaleString() : 0
    const TotalDeaths       = global ? global.TotalDeaths.toLocaleString() : 0
    const TotalRecovered    = global ? global.TotalRecovered.toLocaleString() : 0
    
    return (
        <>
            <h1  id='global' className='section-header'>
                <FaGlobeAfrica className='section-icon' /> Global statistics
            </h1>

            <div className="global-section">
                <div className='container'>
                    <div className='row text-center justify-content-center'>
                        <div className='progress-container'>
                            <CircularProgressbar styles={styleWarning} value={String(TotalConfirmed).slice(0, 2)} text={`${TotalConfirmed}`} />
                            <h1 className='progress-yellow'>Cases</h1>
                        </div>
                        <div className='progress-container'>
                            <CircularProgressbar styles={styleDanger} value={String(TotalDeaths).slice(0, 2)} text={`${TotalDeaths}`} />
                            <h1 className='progress-red'>Deaths</h1>
                        </div>
                        <div className='progress-container'>
                            <CircularProgressbar styles={styleGreen} value={String(TotalRecovered).slice(0, 2)} text={`${TotalRecovered}`} />
                            <h1 className='progress-green'>Recovered</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Global;