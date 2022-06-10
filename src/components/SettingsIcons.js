import React from 'react'
import { Home as HomeIcon, Sun as SunIcon, Moon as MoonIcon,
    Volume2 as SoundIcon } from 'react-feather';

function SettingsIcons({startQuiz, theme, switchTheme}) {

    return (
        <div>
            <HomeIcon className='homeIcon' onClick={startQuiz}
                size={30}
            />

            {theme === 'light'
            ?
            <SunIcon className='sunIcon' size={30} onClick={switchTheme}/>
            :
            <MoonIcon className='sunIcon' size={30} onClick={switchTheme}/>
            }

            <SoundIcon className='soundIcon' size={30}/>
        </div>
    )
};

export default SettingsIcons