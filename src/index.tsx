import {render} from "react-dom";
import './index.scss'
import styles from './Module.module.scss'
import App from "./pages/App";
import {BrowserRouter} from "react-router-dom";

const domNode = document.getElementById('root');
render(
    <div className='test'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>, domNode);
