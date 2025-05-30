"use client"

import { Box, createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface BaseContainerProps {
    children: ReactNode;
}

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F6F6F6', // Тло сторінки
      paper: '#FFFFFF',   // Білий фон карток
    },
    text: {
      primary: '#000000',  // Основний текст
      secondary: '#8E8E93' // Допоміжний/підпис
    },
    success: {
      main: '#34C759', // Акцент (позитив)
    },
    divider: '#D1D1D6', // Лінії, розділювачі
  },
  components: {
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                borderRadius: 12,
                padding: "10px 12px"
            }
        }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 12
        }
      }
    }
  },
  typography: {
    fontFamily: 'var(--font-rubik), sans-serif',
  },
});

export default function BaseContainer({ children }: BaseContainerProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box width={"100%"} position={"relative"}>
                {children}
            </Box>
        </ThemeProvider>
    );
}