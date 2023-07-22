/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"], theme: {
        colors: {
            'soft-blue': 'hsl(215, 51%, 70%)',
            'cyan': 'hsl(178, 100%, 50%)',
            'main': 'hsl(217, 54%, 11%)',
            'card': 'hsl(216, 50%, 16%)',
            'very-dark-blue-line': 'hsl(215, 32%, 27%)',
            'white': 'hsl(0, 0%, 100%)'
        }, extend: {},
    }, plugins: [],
}