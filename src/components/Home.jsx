import { useState } from 'react'
import './Home.css'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import NavigationBar from './NavigationBar'

import { useTranslation } from 'react-i18next';
import Introduction from './Introduction'

function Home() {
    const {t, i18n} = useTranslation();

    return (
        <div className='home'>
            <NavigationBar />

            <div id='home' className="navbar-padding">

            </div>

            <div className='row justify-content-center my-5 graph-row'>
                <Introduction />
            </div>

            {/* <h3 id='dashboard' className='text-center dashboard-heading'>{t('dashboardTitle')}</h3> */}

            <div id='dashboard' className='row justify-content-center graph-row'>
                <LineGraph />
            </div>

            <div className='row justify-content-center mt-3 graph-row'>
                <BarGraph />
            </div>

            <div className="footer-padding">

            </div>

        </div>
    )
}

export default Home
