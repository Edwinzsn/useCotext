import React, { createContext, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Proveedor del contexto
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Componente que usa el contexto
const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
            <Text style={styles.text}>Tema actual: {theme}</Text>
            <Button title="Cambiar Tema" onPress={toggleTheme} color="#4CAF50" />
        </View>
    );
};

// 4. Componente principal
const App = () => {
    return (
        <ThemeProvider>
            <ThemeButton />
        </ThemeProvider>
    );
};

// 5. Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    light: {
        backgroundColor: '#ffffff',
    },
    dark: {
        backgroundColor: '#333333',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        color: '#000000',
    },
});

registerRootComponent(App);
export default App;
