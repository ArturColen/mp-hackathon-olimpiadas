import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BasePage } from './pages/BasePage';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
