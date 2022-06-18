import React from 'react'
import { Home as HomeIcon, Sun as SunIcon, Moon as MoonIcon,
    Volume2 as SoundIcon } from 'react-feather';

function SettingsIcons({startQuiz, theme, switchTheme, showHome=true}) {
    let showObj;
    showHome ? showObj = {display: 'inline'} : showObj = {display: 'none'};


    return (
        <>
            <HomeIcon className='icon homeIcon' onClick={startQuiz}
                size={30} style={showObj}
            />

            {theme === 'light'
            ?
            <SunIcon className='icon sunIcon' size={30} onClick={switchTheme}/>
            :
            <MoonIcon className='icon moonIcon' size={30} onClick={switchTheme}/>
            }

            <SoundIcon className='icon soundIcon' size={30}/>
        </>
    )
};

export default SettingsIcons