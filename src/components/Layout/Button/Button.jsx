export default function Button({ name, icon, bordered, reverse, radius }) {
    return (
        <button
            style={{ borderRadius: radius ? `${radius}px` : undefined }}
            className={`
            px-5 py-2.5  font-bold flex items-center justify-center gap-1
            cursor-pointer duration-300 text-[16px]

            ${!radius ? 'rounded-full' : ''}
            ${reverse ? 'flex-row-reverse' : ''}

            ${bordered ?
                    'border border-primary text-primary hover:bg-primary hover:text-background' :
                    'text-background bg-primary hover:bg-primary-hover '}
            
            `}
        >
            <p>{name}</p>

            <div>

                {icon}

            </div>

        </button>
    )
}