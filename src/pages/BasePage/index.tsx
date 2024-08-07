import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Common/Header';
import { Footer } from '../../components/Common/Footer';

export function BasePage() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}
