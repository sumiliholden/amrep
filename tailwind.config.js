const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js'],
    plugins: [require('daisyui')],
    theme: {
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
    },
}
