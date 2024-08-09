interface MedalProps {
    medalImage: string;
    quantity: number;
}

export function Medal({ medalImage, quantity }: MedalProps) {
    return (
        <div className="hidden md:flex md:items-center">
            <img src={medalImage} alt="Medalha" className="w-12 object-cover md:w-14" />
            <p className="ml-2 mr-4 text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                {quantity}
            </p>
        </div>
    );
}
