export default function TitleSection({title, subtitle}) {
    return (
        <div className="mt-10 mb-20 text-center">

            <h2 className="text-[26px] md:text-[32px] font-black">{title}</h2>

            <h3 className="text-text-muted md:text-[18px]">{subtitle}</h3>

        </div>
    )
}