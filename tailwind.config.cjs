module.exports = {
    content: [
        './index.html',
        './src/**/*.svelte',
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#0a0a0a',
            },
            width: {
                '1/8': '12.5%',
                '2/8': '25%',
                '3/8': '37.5%',
                '4/8': '50%',
                '5/8': '62.5%',
                '6/8': '75%',
                '7/8': '87.5%',
            },
        },
    },
    plugins: [],
};
