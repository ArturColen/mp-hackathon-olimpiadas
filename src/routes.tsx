import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
