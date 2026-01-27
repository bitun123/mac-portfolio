import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProjectData from './contextapi/ProjectData.jsx'

createRoot(document.getElementById('root')).render(
<ProjectData >
    <App />
</ProjectData>
)
