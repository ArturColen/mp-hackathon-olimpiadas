import generalMedal from '../../../../assets/Ranking/general-medal.png';

interface TotalMedalsProps {
    quantity: number;
}

export function TotalMedals({ quantity }: TotalMedalsProps) {
    return (
        <div className="flex items-center">
            <img src={generalMedal} alt="Medalha" className="w-12 object-cover md:w-14 md:hidden" />
            <p className="ml-2 mr-4 text-midnight-blue text-xl md:mx-0 md:text-2xl lg:text-3xl">
                = {quantity}
            </p>
        </div>
    );
}
