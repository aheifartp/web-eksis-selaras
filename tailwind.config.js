/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards',
      },
      colors: {
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "background": "#f9f9f9",
        "surface-variant": "#e2e2e2",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#5d4210",
        "on-tertiary-container": "#303132",
        "surface-tint": "#785926",
        "inverse-on-surface": "#f0f1f1",
        "tertiary-container": "#989999",
        "outline": "#807568",
        "error-container": "#ffdad6",
        "surface-container-highest": "#e2e2e2",
        "primary-fixed": "#ffddae",
        "on-surface": "#1a1c1c",
        "secondary-fixed": "#e5e2e1",
        "primary": "#785926",
        "on-secondary-fixed": "#1c1b1b",
        "primary-fixed-dim": "#e9c083",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#d2c4b5",
        "secondary-fixed-dim": "#c8c6c5",
        "on-error": "#ffffff",
        "surface-dim": "#dadada",
        "on-error-container": "#93000a",
        "on-secondary-container": "#636262",
        "on-tertiary": "#ffffff",
        "surface-container": "#eeeeee",
        "tertiary-fixed": "#e2e2e2",
        "on-secondary": "#ffffff",
        "on-background": "#1a1c1c",
        "inverse-primary": "#e9c083",
        "on-surface-variant": "#4e453a",
        "inverse-surface": "#2f3131",
        "on-primary-container": "#442c00",
        "on-secondary-fixed-variant": "#474746",
        "secondary-container": "#e2dfde",
        "primary-container": "#b8935a",
        "surface-container-high": "#e8e8e8",
        "on-tertiary-fixed": "#1a1c1c",
        "on-primary-fixed": "#281800",
        "tertiary": "#5d5f5f",
        "on-tertiary-fixed-variant": "#454747",
        "tertiary-fixed-dim": "#c6c6c6",
        "surface": "#f9f9f9",
        "secondary": "#5f5e5e",
        "surface-container-low": "#f3f3f4"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "headline-xl-mobile": ["Playfair Display", "serif"],
        "label-caps": ["Plus Jakarta Sans", "sans-serif"],
        "button": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl": ["Playfair Display", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-xl-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "button": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}