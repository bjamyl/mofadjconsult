import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			serif: ['var(--font-serif)', 'ui-serif', 'Georgia', 'serif'],
  		},
  		fontSize: {
  			'step--1': 'var(--step--1)',
  			'step-0': 'var(--step-0)',
  			'step-1': 'var(--step-1)',
  			'step-2': 'var(--step-2)',
  			'step-3': 'var(--step-3)',
  			'step-stat': 'var(--step-stat)',
  		},
  		colors: {
			defaultGreen:'#0D6970',
			ink: 'var(--ink)',
			slate: 'var(--slate)',
			navy: 'var(--navy)',
			'navy-deep': 'var(--navy-deep)',
			steel: 'var(--steel)',
			paper: 'var(--paper)',
			line: 'var(--line)',
			'muted-ink': 'var(--muted-ink)',
			positive: 'var(--positive)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'brand-sm': 'var(--r-sm)',
  			'brand-md': 'var(--r-md)',
  			'brand-lg': 'var(--r-lg)'
  		},
  		boxShadow: {
  			elev: 'var(--elev)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
