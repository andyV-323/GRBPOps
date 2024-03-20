/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      xxs: '280px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

    extend: {
      maxWidth: {
        xxs: '15rem',
        xs: '30rem',
        sm: '15rem',
        md: '10rem',
        lg: '10rem',
        xl: '10rem',
        xxl: '10rem',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
