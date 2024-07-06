import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")!).render(<><ToastContainer /><App /></>);
