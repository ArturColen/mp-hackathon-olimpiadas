import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Home } from './pages/Home';
import { Ranking } from './pages/Ranking';
import { Sports } from './pages/Sports';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="/ranking" element={<Ranking />} />
                        <Route path="/esportes" element={<Sports />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
