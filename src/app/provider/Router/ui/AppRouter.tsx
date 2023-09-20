import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AboutAsync from "pages/About/ui/AboutAsync";
import MainAsync from "pages/Main/ui/MainAsync";
import {routeConfig} from "app/provider/Router/config/Routes";

interface AppRouterPropsInterface {

}

export default function AppRouter({}: AppRouterPropsInterface) {
    return (
        <Suspense fallback={<div>...Lodaing</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
