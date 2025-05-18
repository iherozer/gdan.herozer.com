/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
    content: ["./src/*.{html,js}", "./src/js/components/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                pusab: ['Pusab', 'sans-serif'],
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.text-stroke': {
                    '-webkit-text-stroke': '2px black',
                },
            })
        }),
    ],
}
