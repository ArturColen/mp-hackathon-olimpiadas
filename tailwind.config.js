export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Poppins', 'sans-serif'],
                secondary: ['Inter', 'sans-serif'],
            },
            colors: {
                'midnight-blue': '#141d25',
                'dark-blue': '#10171D',
                'light-gray': '#c5c5c5',
            },
            boxShadow: {
                headerShadow: '5px 2px 20px 2px #000',
                cardShadow: '5px 5px 20px 0px #000',
            },
            width: {
                120: '30rem',
                144: '36rem',
            },
            minHeight: {
                minScreenHeight: '90vh',
            },
            backgroundImage: {
                'olympics-bg': "url('/src/assets/Home/Presentation/main-bg.png')",
            },
        },
    },
    plugins: [],
};
