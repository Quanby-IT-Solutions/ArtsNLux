export const Buttons = () => {
    const buttonName = [
        { id: 1, name:"All", route:"/auction" },
        { id: 2, name:"ongoing", route:"/auction/live" },
        { id: 3, name:"upcoming", route:"/auction/upcoming" },
        { id: 4, name:"recently closed", route:"/auction/past" },
    ];
    return (
        <>
            {buttonName.map((btn) => (
                <button 
                    
                    key={btn.id} 
                    className={`p-4 ${btn.name.length > 3 ? 'w-44 px-0' : 'w-fit px-6'} text-lgi border border-secondary-5 duration-300
                        text-secondary-5 hover:bg-secondary-5 hover:text-timeless-white capitalize`}
                >
                    {btn.name}
                </button>
            ))}
        </>
    )
}
