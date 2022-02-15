const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.js'],
        options: {
            safelist: [/data-theme$/],
        },
    },
    plugins: [require('daisyui')],
    theme: {
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
    },
    daisyui: {
        themes: ['cupcake', 'dark', 'wireframe','synthwave', 'retro'],
    },
}
