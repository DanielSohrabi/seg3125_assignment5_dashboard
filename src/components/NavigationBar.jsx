import { useState } from 'react'
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import { useTranslation } from 'react-i18next';
import '../i18n';

function NavigationBar() {
    const {t, i18n} = useTranslation();

    function handleChangeLanguage(event) {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary navi">
            <Container>
                <Navbar.Brand href="#home" className="site-logo-text">{t('navigationBar.title')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='navi-text mx-3'>{t('navigationBar.home')}</Nav.Link>
                    <Nav.Link href="#dashboard" className='navi-text mx-3'>{t('navigationBar.dashboard')}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <ToggleButtonGroup type="radio" name="options" defaultValue={i18n.language} onClick={handleChangeLanguage}>
                    <ToggleButton id="tbg-radio-1}" className={`${i18n.language == 'en' ? 'button-selected': 'button-unselected'}`} value={"en"}>
                    EN
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" className={`${i18n.language == 'fr' ? 'button-selected': 'button-unselected'}`} value={"fr"}>
                    FR
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
