import {render} from "react-dom";
import './styles/index.scss'
import styles from './Module.module.scss'
import App from "./pages/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const domNode = document.getElementById('root');
render(
    <div className='test'>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </div>, domNode);
