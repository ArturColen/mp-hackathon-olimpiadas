import { Link } from 'react-router-dom';
import eventsImage from '../../assets/Home/Menu/events.png';
import rankingImage from '../../assets/Home/Menu/ranking.png';
import sportsImage from '../../assets/Home/Menu/sports.png';
import tabletImage from '../../assets/Home/Presentation/tablet-image.png';
import textImage from '../../assets/Home/Presentation/text-image.png';
import { PageTitle } from '../../components/Common/PageTitle';

export function Home() {
    return (
        <>
            <div className="py-20 bg-olympics-bg bg-cover bg-center">
                <section className="container mx-auto h-full flex flex-col justify-center items-center sm:flex-row md:justify-evenly">
                    <img
                        src={tabletImage}
                        alt="Celular e tablet com a logo das Olimpíadas"
                        className="w-96 px-4 mb-10 md:px-0 lg:w-120 xl:w-144"
                    />
                    <img
                        src={textImage}
                        alt="Texto introdutório do projeto"
                        className="w-72 lg:w-96 xl:w-120"
                    />
                </section>
            </div>
            <section className="container mx-auto py-20">
                <PageTitle text="Selecione a opção desejada para começar:" align="center" />
                <div className="mt-12 flex justify-center flex-wrap md:justify-evenly">
                    <Link to="/" className="group">
                        <div className="overflow-hidden w-64 md:w-72 lg:w-80">
                            <img
                                src={rankingImage}
                                alt="Imagem da opção de ranking dos países por medalhas"
                                className="transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </Link>
                    <Link to="/" className="group">
                        <div className="overflow-hidden w-64 md:w-72 lg:w-80">
                            <img
                                src={eventsImage}
                                alt="Imagem da opção de eventos"
                                className="transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </Link>
                    <Link to="/" className="group">
                        <div className="overflow-hidden w-64 md:w-72 lg:w-80">
                            <img
                                src={sportsImage}
                                alt="Imagem da opção de esportes"
                                className="transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
