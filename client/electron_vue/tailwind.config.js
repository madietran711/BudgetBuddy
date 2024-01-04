/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
  'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
  purge: ["./src/**/**.{vue,html,js}",
        "./App.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

