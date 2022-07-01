/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Home as HomeIcon, Sun as SunIcon, Moon as MoonIcon,
    /*Volume2 as SoundIcon, VolumeX as SoundOffIcon*/ } from 'react-feather';

SettingsIcons.propTypes = {
    toggleIsHome: PropTypes.func,
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
    showHome: PropTypes.bool,
    // sound: PropTypes.bool,
    // toggleSound: PropTypes.func
};

function SettingsIcons({toggleIsHome, theme, toggleTheme, showHome=true}) {
    let showObj;
    showHome ? showObj = {display: 'inline'} : showObj = {display: 'none'};


    return (
        <>
            <HomeIcon className='icon homeIcon' onClick={toggleIsHome}
                size={30} style={showObj}
            />

            {theme === 'light'
                ?
                <SunIcon className='icon sunIcon' size={30} onClick={toggleTheme}/>
                :
                <MoonIcon className='icon moonIcon' size={30} onClick={toggleTheme}/>
            }
            
            {/* {sound === true
            ?
            <SoundIcon className='icon soundIcon' size={30} onClick={toggleSound}/>
            :
            <SoundOffIcon className='icon soundIcon' size={30} onClick={toggleSound}/>
            } */}
        </>
    );
}

export default SettingsIcons;