export function Footer() {
    return (
        <footer className="h-20 bg-dark-blue flex justify-center items-center">
            <p className="px-2 text-xs text-center sm:text-sm xl:text-base">
                Desenvolvido por{' '}
                <a
                    href="https://github.com/ArturColen"
                    className="duration-500 hover:border-b hover:border-white"
                    target="_blank"
                >
                    Artur Bomtempo
                </a>{' '}
                e{' '}
                <a
                    href="https://github.com/LeticiaSFranca"
                    className="duration-500 hover:border-b hover:border-white"
                    target="_blank"
                >
                    Letícia França
                </a>
            </p>
        </footer>
    );
}
