import { Link } from 'react-router-dom';
import olympicLogo from '../../assets/Home/About/olympic-logo.png';
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
            <section className="container mx-auto mb-20 py-5 flex flex-col items-center md:flex-row lg:px-10 xl:px-20">
                <div className="md:w-2/3">
                    <PageTitle text="Sobre o POP24" align="left" />
                    <p className='mt-4 text-sm text-center md:text-justify md:text-base lg:mr-20'>
                        Este projeto foi desenvolvido como parte do desafio da Codante, com o
                        objetivo de proporcionar uma experiência interativa e informativa sobre os
                        Jogos Olímpicos. Utilizando a API das Olimpíadas, criamos o POP (Portal
                        Olimpíadas Paris), uma plataforma que inclui um ranking com os países que
                        mais obtiveram medalhas na edição Paris 2024 até o momento, informações dos
                        esportes envolvidos nas Olimpíadas, dados dos países participantes e mostra
                        os próximos eventos. Nosso objetivo é conectar fãs e entusiastas dos
                        esportes olímpicos, oferecendo uma visão abrangente e envolvent dos jogos.
                    </p>
                </div>
                <div className="w-1/3 flex justify-end">
                    <img src={olympicLogo} alt="Imagem da tocha olímpica" className="h-96 lg:h-120" />
                </div>
            </section>
        </>
    );
}
