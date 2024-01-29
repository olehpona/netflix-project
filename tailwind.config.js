/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.vue", "./pages/**/*.vue",
    './vueform.config.ts',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',],
  theme: {
    extend: {
      form: (theme) => ({
        primary: '#831010',
        primaryDarker: '#000000',
        bgColors: {
          input: '#121212',
          inputHover: 'var(--vf-bg-input)',
          inputFocus: 'var(--vf-bg-input)',
          inputDanger: 'var(--vf-bg-input)',
          inputSuccess: 'var(--vf-bg-input)',
          disabled: 'var(--vf-gray-200)',
          selected: 'rgba(17,24,39,0.05)', // Option hover, cbgroup blocks selected
          passive: 'var(--vf-gray-300)',
          icon: 'var(--vf-gray-500)',
          danger: 'var(--vf-danger-lighter)',
          success: 'var(--vf-success-lighter)',
          addon: 'transparent',
          tag: 'var(--vf-primary)',
          sliderHandle: 'var(--vf-primary)',
          toggleHandle: '#121212',
          dateHead: 'var(--vf-gray-100)',
          btn: 'var(--vf-primary)',
          btnDanger: 'var(--vf-danger)',
          btnSecondary: 'var(--vf-gray-200)',
        },
        textColors: {
          onPrimary: '#ffffff',
          input: '#ffffff'
        },
      })
    },
  },
  plugins: [
    require('@vueform/vueform/tailwind')
  ],
}

