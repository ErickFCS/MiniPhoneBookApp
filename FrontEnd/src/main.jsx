import { createRoot, } from 'react-dom/client'
import App from './App.jsx'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root',),).render(<App />);
(async function foo() {
    await import("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js")
})()