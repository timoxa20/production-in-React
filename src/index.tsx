import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import {StoreProvider} from "app/providers/StoreProvider";
import 'app/styles/index.scss'
import "./shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErrorBaundry";
import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');
if(!container) {
    throw Error('Container root null')
}
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);