import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "antd";

const config = {
    token: {
        colorPrimary: "#278451",
        borderRadius: 5,
        colorLink: "#278451",
        colorBgElevated: "#fff"
        //colorBgContainer: "#d1ffd2"
    }
}

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ConfigProvider theme={config}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
