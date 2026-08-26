import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import ThemeProvider from "/src/providers/ThemeProvider.jsx"
import ComputerGraphicsPage from "/src/pages/computer-graphics/ComputerGraphicsPage.jsx"

document.addEventListener('DOMContentLoaded', function() {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <ThemeProvider supportedThemes={[{id: 'dark'}]}
                           defaultThemeId={'dark'}
                           showSpinnerOnThemeChange={false}
                           onThemeChanged={() => {}}>
                <ComputerGraphicsPage/>
            </ThemeProvider>
        </StrictMode>
    )
})