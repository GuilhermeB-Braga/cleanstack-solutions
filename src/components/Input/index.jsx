export default function Input({ type, placeholder, label, name, radius }) {
    return (
        <div className="flex flex-col">

            <label
                htmlFor={name}
                className="mb-1 text-text-muted text-[14px]"
            >{label}</label>

            {type == 'textarea' ?

                <textarea
                    name={name}
                    id={name}
                    cols="30"
                    placeholder={placeholder}
                    style={{borderRadius: radius ? `${radius}px` : '12px'}}
                    className="bg-background h-32 p-5 border border-border-custom rounded-md"
                >

                </textarea> :

                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    style={{borderRadius: radius ? `${radius}px` : '12px'}}
                    className="bg-background h-12 px-5 border border-border-custom rounded-md"
                />

            }

        </div>
    )
}