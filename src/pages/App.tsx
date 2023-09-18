import {Link, Route, Routes} from 'react-router-dom'
import {MainAsync} from "./Main/MainAsync";
import {AboutAsync} from "./About/AboutAsync";
import {Suspense} from "react";
interface AppPropsInterface {

}

export default function App({}: AppPropsInterface) {
    return (
        <div>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Lodaing</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />} />
                    <Route path={'/'} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
