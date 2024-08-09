import { Search } from 'lucide-react';
import teste from '../../assets/Ranking/brasil.png';
import bronzeMedal from '../../assets/Ranking/bronze-medal.png';
import generalMedal from '../../assets/Ranking/general-medal.png';
import goldMedal from '../../assets/Ranking/gold-medal.png';
import silverMedal from '../../assets/Ranking/silver-medal.png';
import { PageTitle } from '../../components/Common/PageTitle';

export function Ranking() {
    return (
        <>
            <PageTitle text="Ranking por medalhas" />
            <form className="w-4/5 sm:w-2/3 lg:w-2/4 h-14 mx-auto mb-20 relative">
                <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    aria-label="Pesquisar"
                    className="w-full h-full pl-14 bg-dark-blue rounded-2xl text-lg shadow-inputShadow text-white placeholder:opacity-70 outline-none"
                />
            </form>
            <section className="container mx-auto">
                <div className="h-20 mx-5 px-5 bg-light-gray rounded-2xl flex justify-between md:px-10">
                    <div className="flex items-center">
                        <img
                            src={teste}
                            alt=""
                            className="w-14 object-cover mr-5 md:w-16 md:mr-8"
                        />
                        <h1 className="text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                            <strong>1º</strong> Brasil
                        </h1>
                    </div>
                    <div className="flex">
                        <div className="flex items-center md:hidden">
                            <img
                                src={generalMedal}
                                alt="Medalha genérica"
                                className="w-12 object-cover md:w-14"
                            />
                            <p className="ml-2 mr-4 text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                                = 30
                            </p>
                        </div>
                        <div className="hidden md:flex md:items-center">
                            <img
                                src={goldMedal}
                                alt="Medalha de ouro"
                                className="w-12 object-cover md:w-14"
                            />
                            <p className="ml-2 mr-4 text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                                30
                            </p>
                        </div>
                        <div className="hidden md:flex md:items-center">
                            <img
                                src={silverMedal}
                                alt="Medalha de prata"
                                className="w-12 object-cover md:w-14"
                            />
                            <p className="ml-2 mr-4 text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                                30
                            </p>
                        </div>
                        <div className="hidden md:flex md:items-center">
                            <img
                                src={bronzeMedal}
                                alt="Medalha de bronze"
                                className="w-12 object-cover md:w-14"
                            />
                            <p className="ml-2 mr-4 text-midnight-blue text-xl md:text-2xl lg:text-3xl">
                                30
                            </p>
                        </div>
                        <div className="hidden text-midnight-blue text-xl md:flex md:items-center md:text-2xl lg:text-3xl">
                            <p className="mr-2">=</p>
                            <p>60</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
