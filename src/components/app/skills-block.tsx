interface Props {
    title: string;
    skills:{
        name: string;
        icon: JSX.Element;
    }[]

}

function SkillsBlock({ title, skills }: Props) {
    return (
        <>
            <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
                {title}
            </h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {
                    skills.map((item, i) => (
                        <div className="flex flex-col justify-center items-center" key={i}>
                            {item.icon}
                            <p className="text-center text-balance mt-4 max-w-prose p-2">
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>

    )
}



export default SkillsBlock