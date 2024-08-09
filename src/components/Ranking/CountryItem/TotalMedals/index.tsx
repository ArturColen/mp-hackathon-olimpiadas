import generalMedal from '../../../../assets/Ranking/general-medal.png';

interface TotalMedalsProps {
    quantity: number;
}

export function TotalMedals({ quantity }: TotalMedalsProps) {
    return (
        <div className="flex items-center">
            <img
                src={generalMedal}
                alt="Medalha"
                className="w-10 object-cover sm:w-12 md:w-14 md:hidden"
            />
            <p className="ml-2 mr-4 text-midnight-blue text-sm sm:text-xl md:mx-0 md:text-2xl lg:text-3xl">
                = {quantity}
            </p>
        </div>
    );
}
