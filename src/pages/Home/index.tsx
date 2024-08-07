import tabletImage from '../../assets/Home/Presentation/tablet-image.png';
import textImage from '../../assets/Home/Presentation/text-image.png';

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
        </>
    );
}
