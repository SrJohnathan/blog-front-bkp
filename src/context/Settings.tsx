import {createContext, ReactNode, useEffect, useState} from "react";
import {Ex} from "@/extension/ex";


export const  SettingsContext = createContext<{ theme:"light"| "dark"}>(
    {theme :"light"}
)

interface Props {
    children:ReactNode
}

export const Settings = ({children}:Props) => {

    const [theme ,setTheme] = useState<{ theme:"light"| "dark"}>()

    useEffect(() => {
      setTheme( {theme :  Ex.modeThemeBackInit().t as any} )
    }, []);


    return (
        <SettingsContext.Provider value={{theme:  theme === undefined ?  "light" : theme.theme  }}>
            {children}
        </SettingsContext.Provider>
    )

}