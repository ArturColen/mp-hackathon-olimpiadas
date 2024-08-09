import { Search } from 'lucide-react';
import { PageTitle } from '../../components/Common/PageTitle';
import { CountryItem } from '../../components/Ranking/CountryItem';
import { useEffect, useState } from 'react';

interface Country {
    id: string;
    flag_url: string;
    rank: number;
    name: string;
    gold_medals: number;
    silver_medals: number;
    bronze_medals: number;
    total_medals: number;
}

export function Ranking() {
    const [apiData, setApiData] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        const loadDataAPI = async () => {
            try {
                const response = await fetch('https://apis.codante.io/olympic-games/countries');

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setApiData(data.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        loadDataAPI();
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const filteredCountries = apiData.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <PageTitle text="Ranking por medalhas" />
            <form
                className="w-4/5 sm:w-2/3 lg:w-2/4 h-14 mx-auto mb-20 relative"
                onSubmit={handleSubmit}
            >
                <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    aria-label="Pesquisar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-full pl-14 bg-dark-blue rounded-2xl text-lg shadow-inputShadow text-white placeholder:opacity-70 outline-none"
                />
            </form>
            <section className="container min-h-minScreenHeight mx-auto">
                {filteredCountries.length > 0 ? (
                    <div>
                        {filteredCountries.map((country) => (
                            <CountryItem
                                key={country.id}
                                countryFlag={country.flag_url}
                                countryPosition={country.rank}
                                countryName={country.name}
                                quantityGoldMedals={country.gold_medals}
                                quantitySilverMedals={country.silver_medals}
                                quantityBronzeMedals={country.bronze_medals}
                                totalMedalCount={country.total_medals}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-2xl text-center font-bold">Nenhum país encontrado.</p>
                )}
                <div className="h-10"></div>
            </section>
        </>
    );
}
