/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
    theme: {
        fontFamily: {
            'Inter': ["Inter", "Sans-serif"],
            'Poppins': ["Poppins", "Sans-serif"],
            'Barlow': ["Barlow", "Sans-serif"]
        }
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#EF233C",
                    "secondary": "rgba(237, 242, 244, 0.03)",
                    "accent": "#EDF2F4",
                    "neutral": "#8D99AE",
                    "base-100": "#2B2D42",
                },
            },
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
=======
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor : {
        "custom-cart" : "rgba(237,242,244,0.02)",
        "custom-red" : 'rgba(239, 35, 60, 1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
>>>>>>> 23eee4098c5c774a0669021e42d95c4ba669df2e
}
