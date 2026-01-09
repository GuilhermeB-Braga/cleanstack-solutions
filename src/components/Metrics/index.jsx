import MetricCard from "../MetricCard"

export default function Metrics() {

    const metrics = [
        {
            data: '50+',
            description: 'Projetos entregues'
        },
        {
            data: '3+',
            description: 'Anos de experiência'
        },
        {
            data: '100%',
            description: 'Clientes satisfeitos'
        }
    ]

    return (
        <div className="flex flex-col md:flex-row gap-5 justify-center w-full">

            {
                metrics.map((data, index) => (
                    <MetricCard key={index} data={data.data} desc={data.description} />
                ))
            }

        </div>
    )
}