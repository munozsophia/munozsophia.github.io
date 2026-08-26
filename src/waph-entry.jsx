import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import ThemeProvider from "/src/providers/ThemeProvider.jsx"
import WaphPage from "/src/pages/waph/WaphPage.jsx"

document.addEventListener('DOMContentLoaded', function() {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <ThemeProvider supportedThemes={[{id: 'dark'}]}
                           defaultThemeId={'dark'}
                           showSpinnerOnThemeChange={false}
                           onThemeChanged={() => {}}>
                <WaphPage/>
            </ThemeProvider>
        </StrictMode>
    )
})