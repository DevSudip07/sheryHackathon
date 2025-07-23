const Partners = () => {
    const marquee = [
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
        { name: "LOGO" },
    ];
    return (
        <>
            <section className="w-full py-50 md:px-10">
                <figure className="container mx-auto md:w-[90%] flex items-center">
                    <h2 className="partner-title  w-1/6 px-10 py-2 bg-[var(--secBg)] border-2 border-[var(--primaryColor)] font-bold text-xl">Big Partners</h2>
                    <div className="marquee-container relative w-5/6 py-2 flex items-center">
                        {/* <ul className="marquee-content flex items-center gap-10 font-bold text-2xl px-5">
                            {marquee.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                        <ul className="marquee-content flex items-center gap-10 font-bold text-2xl px-5">
                            {marquee.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul> */}

                        <ul className="marquee-content flex items-center gap-10 font-bold text-2xl px-5">
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                        </ul>
                        <ul className="marquee-content flex items-center gap-10 font-bold text-2xl px-5">
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                            <li>LOGO</li>
                        </ul>
                    </div>
                </figure>
            </section>
        </>
    );
};

export default Partners;