interface PageTitleProps {
    text: string;
    align?: 'left' | 'center' | 'right';
}

export function PageTitle({ text, align = 'center' }: PageTitleProps) {
    const alignmentClasses: Record<string, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <h1 className={`mx-5 text-lg sm:text-xl lg:text-2xl font-bold ${alignmentClasses[align]}`}>
            {text}
        </h1>
    );
}
