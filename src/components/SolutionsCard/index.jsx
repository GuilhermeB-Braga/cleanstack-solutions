export default function SolutionsCard({ title, desc, icon }) {
    return (
        <li className="p-5 border border-border-custom rounded-custom bg-background-light">

            <div
                className="
                grid place-items-center bg-primary text-background-dark w-13 h-13 rounded-custom text-[18px]"
            >

                {icon}

            </div>

            <h3 className="my-5 text-[18px] font-bold">{title}</h3>

            <p>{desc}</p>

        </li>
    )
}