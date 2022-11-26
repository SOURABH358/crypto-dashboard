import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { AppWrapper } from "./Context";
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<StrictMode>
    <AppWrapper>
        <App />
    </AppWrapper>
</StrictMode>)