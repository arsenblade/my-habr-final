import {Link, Route, Routes} from 'react-router-dom'
import {MainAsync} from "./Main/MainAsync";
import {AboutAsync} from "./About/AboutAsync";
import {Suspense, useContext} from "react";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {set} from "husky";
import {Button} from "@storybook/react/demo";
import {useTheme} from "../theme/useTheme";
interface AppPropsInterface {

}

export default function App({}: AppPropsInterface) {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Button onClick={toggleTheme}>Toggle</Button>
            <Suspense fallback={<div>...Lodaing</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />} />
                    <Route path={'/'} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
