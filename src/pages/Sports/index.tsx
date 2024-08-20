import { PageTitle } from '../../components/Common/PageTitle';
import { SportCard } from '../../components/Sports/SportCard';

export function Sports() {
    return (
        <>
            <PageTitle text="Esportes" />
            <div className="container mx-auto mt-16 mb-24 min-h-minScreenHeight grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-4">
                <SportCard />
                <SportCard />
                <SportCard />
                <SportCard />
            </div>
        </>
    );
}
