import React from 'react'
import { Home as HomeIcon, Sun as SunIcon, Moon as MoonIcon,
    Volume2 as SoundIcon } from 'react-feather';

function SettingsIcons({startQuiz, theme, switchTheme, showHome=true}) {
    let showObj;
    showHome ? showObj = {display: 'inline'} : showObj = {display: 'none'};


    return (
        <div>
            <HomeIcon className='homeIcon' onClick={startQuiz}
                size={30} style={showObj}
            />

            {theme === 'light'
            ?
            <SunIcon className='sunIcon' size={30} onClick={switchTheme}/>
            :
            <MoonIcon className='moonIcon' size={30} onClick={switchTheme}/>
            }

            <SoundIcon className='soundIcon' size={30}/>
        </div>
    )
};

export default SettingsIcons