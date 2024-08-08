interface PageTitleProps {
    text: string;
    align?: 'left' | 'center';
}

export function PageTitle({ text, align = 'center' }: PageTitleProps) {
    const alignmentClasses: Record<string, string> = {
        left: 'text-center md:text-left',
        center: 'text-center',
    };

    return (
        <h1
            className={`mx-5 text-lg sm:text-xl lg:text-2xl font-bold ${alignmentClasses[align]} md:mx-0`}
        >
            {text}
        </h1>
    );
}
