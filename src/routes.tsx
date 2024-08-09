import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BasePage } from './pages/BasePage';
import { Ranking } from './pages/Ranking';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="/ranking" element={<Ranking />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
