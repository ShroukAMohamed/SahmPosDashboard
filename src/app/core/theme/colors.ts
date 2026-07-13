import { definePreset } from "@primeng/themes";
import Aura from '@primeng/themes/aura';

export const HollatPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff9e6',
      100: '#ffefcc',
      200: '#ffdf99',
      300: '#ffcf66',
      400: '#ffc033',
      500: '#FFB800', // Sahm Yellow
      600: '#cc9300',
      700: '#996e00',
      800: '#664a00',
      900: '#332500',
      950: '#1a1200'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      dark: {
        surface: {
          0: '#0F1115',     // App background
          50: '#1A1D24',    // Surface
          100: '#1A1D24',
          200: '#232730',   // Surface Hover
          300: '#2A2F3A',   // Borders
          400: '#2A2F3A',
          500: '#8B93A6',   // Muted Text
          600: '#8B93A6',
          700: '#FFFFFF',   // Text
          800: '#FFFFFF',
          900: '#FFFFFF',
          950: '#FFFFFF'
        }
      }
    }
  }
});
