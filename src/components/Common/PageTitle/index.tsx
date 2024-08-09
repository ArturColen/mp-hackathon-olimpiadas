interface PageTitleProps {
    text: string;
}

export function PageTitle({ text }: PageTitleProps) {
    return (
        <h1 className="mt-20 mb-10 mx-5 text-2xl font-bold uppercase text-center md:text-3xl">
            {text}
        </h1>
    );
}
