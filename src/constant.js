export const THEME = {
    dark: {
        '--bg-color': 'hsl(220deg 26% 14%)', // dark blue
        '--bg-color-inverse': '#F5F7FB',
        '--color': 'hsl(213deg 15% 97%)', //white
        '--accent-color': 'var(--btn-hover-color)',
        '--btn-hover-color': 'hsl(175deg 100% 75%)', // highlighter neon blue
        '--btn-hover-bg-color': 'hsl(216deg 19% 28%)', //dim blue

        '--isHeld-color': '#293264',

        '--blob-mix-blend-mode': 'overlay',
        '--question-border-bottom': 'hsl(231 41% 90% / .7)',
        '--icon-hover-color': 'var(--btn-hover-color)',
        
    },
    light: {
        '--bg-color': '#F5F7FB',
        '--bg-color-inverse': 'hsl(220deg 26% 14%)',
        '--color': '#293264',
        /* same color b/c dark mode do not remove */
        '--focused-btn-color': '#293264',
        '--accent-color': '#4D5B9E',
        '--btn-hover-color': 'var(--color)',
        '--btn-hover-bg-color': '#D6DBF5',
        '--isHeld-bg-color': '#D6DBF5',

        '--blob-mix-blend-mode': 'normal',
        '--question-border-bottom': 'hsl(231 41% 90%)',
        '--icon-hover-color': 'var(--accent-color)',
    }
    
};