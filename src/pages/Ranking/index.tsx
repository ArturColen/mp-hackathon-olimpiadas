import { Search } from 'lucide-react';
import brasilFlag from '../../assets/Ranking/brasil.png';
import { PageTitle } from '../../components/Common/PageTitle';
import { CountryItem } from '../../components/Ranking/CountryItem';

export function Ranking() {
    return (
        <>
            <PageTitle text="Ranking por medalhas" />
            <form className="w-4/5 sm:w-2/3 lg:w-2/4 h-14 mx-auto mb-20 relative">
                <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    aria-label="Pesquisar"
                    className="w-full h-full pl-14 bg-dark-blue rounded-2xl text-lg shadow-inputShadow text-white placeholder:opacity-70 outline-none"
                />
            </form>
            <section className="container mx-auto">
                <CountryItem
                    countryFlag={brasilFlag}
                    countryPosition={1}
                    countryName="Brasil"
                    quantityGoldMedals={10}
                    quantitySilverMedals={20}
                    quantityBronzeMedals={30}
                    totalMedalCount={60}
                />
                <div className="h-10"></div>
            </section>
        </>
    );
}
