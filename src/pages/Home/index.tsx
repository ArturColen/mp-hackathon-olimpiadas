import olympicLogo from '../../assets/Home/About/olympic-logo.png';
import eventsImage from '../../assets/Home/Menu/events.png';
import rankingImage from '../../assets/Home/Menu/ranking.png';
import sportsImage from '../../assets/Home/Menu/sports.png';
import tabletImage from '../../assets/Home/Presentation/tablet-image.png';
import textImage from '../../assets/Home/Presentation/text-image.png';
import { SectionTitle } from '../../components/Common/SectionTitle';
import { OptionCard } from '../../components/Home/OptionCard';

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
                <SectionTitle text="Selecione a opção desejada para começar:" align="center" />
                <div className="mt-12 flex justify-center flex-wrap md:justify-evenly">
                    <OptionCard option="ranking" image={rankingImage} />
                    <OptionCard option="eventos" image={eventsImage} />
                    <OptionCard option="esportes" image={sportsImage} />
                </div>
            </section>
            <section className="container mx-auto mb-20 py-5 flex flex-col items-center md:flex-row lg:px-10 xl:px-20">
                <div className="md:w-2/3 md:ml-5 lg:ml-0">
                    <SectionTitle text="Sobre o POP24" align="left" />
                    <p className="mt-4 mb-10 mx-5 text-sm text-justify md:mb-0 md:ml-0 md:text-base lg:mr-20">
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
                    <img
                        src={olympicLogo}
                        alt="Imagem da tocha olímpica"
                        className="w-48 md:w-52 lg:w-60"
                    />
                </div>
            </section>
        </>
    );
}
