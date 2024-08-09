import bronzeMedal from '../../../assets/Ranking/bronze-medal.png';
import goldMedal from '../../../assets/Ranking/gold-medal.png';
import silverMedal from '../../../assets/Ranking/silver-medal.png';
import { Medal } from './Medal';
import { TotalMedals } from './TotalMedals';

interface CountryItemProps {
    countryFlag: string;
    countryPosition: number;
    countryName: string;
    quantityGoldMedals: number;
    quantitySilverMedals: number;
    quantityBronzeMedals: number;
    totalMedalCount: number;
}

export function CountryItem({
    countryFlag,
    countryPosition,
    countryName,
    quantityGoldMedals,
    quantitySilverMedals,
    quantityBronzeMedals,
    totalMedalCount,
}: CountryItemProps) {
    return (
        <div className="h-20 mx-5 mb-8 px-5 bg-light-gray rounded-2xl flex justify-between md:px-10">
            <div className="flex items-center">
                <img
                    src={countryFlag}
                    alt={countryName}
                    className="w-14 object-cover mr-5 md:w-16 md:mr-8"
                />
                <h1 className="text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                    <strong>{countryPosition}º</strong> {countryName}
                </h1>
            </div>
            <div className="flex">
                <Medal medalImage={goldMedal} quantity={quantityGoldMedals} />
                <Medal medalImage={silverMedal} quantity={quantitySilverMedals} />
                <Medal medalImage={bronzeMedal} quantity={quantityBronzeMedals} />
                <TotalMedals quantity={totalMedalCount} />
            </div>
        </div>
    );
}
