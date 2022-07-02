/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Home as HomeIcon, Sun as SunIcon, Moon as MoonIcon,
    /*Volume2 as SoundIcon, VolumeX as SoundOffIcon*/ } from 'react-feather';

SettingsIcons.propTypes = {
    toggleIsHome: PropTypes.func,
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
    showHomeIcon: PropTypes.bool,
};

function SettingsIcons({toggleIsHome, theme, toggleTheme, showHomeIcon=true}) {
    let homeIconStyleObj;
    showHomeIcon ? homeIconStyleObj = {display: 'inline'} : homeIconStyleObj = {display: 'none'};

    return (
        <>
            <HomeIcon className='icon homeIcon' onClick={toggleIsHome}
                size={30} style={homeIconStyleObj}
            />

            {theme === 'light'
                ?
                <SunIcon className='icon sunIcon' size={30} onClick={toggleTheme}/>
                :
                <MoonIcon className='icon moonIcon' size={30} onClick={toggleTheme}/>
            }
        </>
    );
}

export default SettingsIcons;