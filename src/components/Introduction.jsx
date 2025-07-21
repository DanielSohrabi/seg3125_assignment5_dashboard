import { useState } from 'react'
import './Home.css'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import NavigationBar from './NavigationBar'

import { useTranslation } from 'react-i18next';

function Introduction() {
    const {t, i18n} = useTranslation();

    return (
        <>
        <div className='row justify-content-center '>
            <div className="col-9 chart-customise intro-element justify-content-center p-5">
                <div className='row'>
                <div className='col-7 justify-content-center'>
                    <h1 className="intro-welcome">{t('introduction.welcomeMessage')}</h1>
                    <h2 className="text-start intro-welcome-description py-3">
                        {t('introduction.paragraphMessage1')}
                        <br/><br/>
                        {t('introduction.paragraphMessage2')}
                        <br></br>
                    </h2>
                </div>
                <div className='col-5 justify-content-center text-center'>
                    <h1 className='intro-emoji-icon'>🚘</h1>
                </div>
                <button className='intro-button px-5 py-5 my-3'><a className='no-decoration-anchor' href='#dashboard'>{t('introduction.viewDashboard')}</a></button>
                </div>
            </div>
        </div>
        <div className='my-5'></div>
        </>
    )
}

export default Introduction
