import {render} from "react-dom";
import 'app/styles/index.scss'
import App from "app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "app/Providers/ThemeProvider/ThemeProvider";

const domNode = document.getElementById('root');
render(
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </div>, domNode);
