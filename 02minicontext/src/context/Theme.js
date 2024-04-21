import React,{createContext , useContext} from 'react';


export const ThemeContext = createContext({
    themeMode: "light",  //default theme mode is light
    darkTheme: () => {},
    lightTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider;
//Custom hook to access the context outside of

export default function useTheme(){
    return useContext(ThemeContext);
}