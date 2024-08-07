export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                'midnight-blue': '#141d25',
                'dark-blue': '#10171D',
            },
            boxShadow: {
                headerShadow: '5px 2px 20px 2px #000000',
            },
            width: {
                120: '30rem',
                144: '36rem',
            },
            backgroundImage: {
                'olympics-bg': "url('/src/assets/Home/Presentation/main-bg.png')",
            },
        },
    },
    plugins: [],
};
