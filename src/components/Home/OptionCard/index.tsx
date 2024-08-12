import { Link } from 'react-router-dom';

interface OptionCardProps {
    option: string;
    image: string;
}

export function OptionCard({ option, image }: OptionCardProps) {
    return (
        <Link to={`/${option}`}>
            <div className="overflow-hidden w-64 md:w-72 lg:w-80">
                <img
                    src={image}
                    alt={`Imagem da opção de ${option}`}
                    className="transform transition-transform duration-500 hover:scale-110"
                />
            </div>
        </Link>
    );
}
