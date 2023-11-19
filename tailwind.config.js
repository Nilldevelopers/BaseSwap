/** @type {import('tailwindcss').Config} */
module.exports = {
    content:
        [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/features/**/*.{js,ts,jsx,tsx,mdx}',
            './src/views/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
        fontFamily: {
            'Inter': ["Inter", "Sans-serif"],
            'Poppins': ["Poppins", "Sans-serif"],
            'Barlow': ["Barlow", "Sans-serif"],
            'Arial': ["Arial", "Sans-serif"],
            'Outfit': ["Outfit", "Sans-serif"],
        },
        extend: {
            backgroundColor: {
                "custom-cart":
                    "rgba(237,242,244,0.02)",
                "custom-red":
                    'rgba(239, 35, 60, 1)',
                "tab-choose":'rgba(237, 242, 244, 0.08)',
                "swap-selection-input":"rgba(237, 242, 244, 0.03)"
            },
            borderColor:{
                "accent-dark":"rgba(237, 242, 244, 0.08)"
            }
        }
    },

    daisyui:
        {
            themes: [
                {
                    mytheme: {
                        "primary": "#EF233C",
                        "success":"#7FD482",
                        "secondary": "rgba(237, 242, 244, 0.03)",
                        "accent": "#EDF2F4",
                        "neutral": "#8D99AE",
                        "base-100": "#2B2D42",
                    },
                },
            ],
        }
    ,
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
