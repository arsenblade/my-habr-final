import {Link, Route, Routes} from 'react-router-dom'
import {Suspense, useContext} from "react";
import {Button} from "@storybook/react/demo";
import {useTheme} from "shared/lib/hooks/useTheme";
import {classNames} from "shared/lib/helpers/ClassNames/ClassNames";
import AboutAsync from "pages/About/ui/AboutAsync";
import MainAsync from "pages/Main/ui/MainAsync";
interface AppPropsInterface {

}

export default function App({}: AppPropsInterface) {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme || ''])}>
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
