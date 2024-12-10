



export default function Footer(){



    return(
        <section>
            <div className="absolute h-[200svh] bg-footer w-full text-footerText mt-[-100svh] z-10">
                <div className="relative h-[200svh]">
                    <div className="sticky h-[100svh] flex flex-col justify-between items-center top-0 pt-[100px] pb-[100px] sm:pt-[50px] sm:pb-[50px]">
                        <p className="text-[10vw] sm:text-[6vw] leading-[0.6] font-light">Porozmawiajmy!</p>

                        <button className="border-footerText border-[1px] border-solid">
                            <a href="https://www.instagram.com/_pawel_garncarz/" target="_blank" className="text-[18px] sm:text-[25px] w-full h-full flex pl-[40px] pr-[40px] pt-[10px] pb-[10px]">Napisz do Mnie</a>
                        </button>

                        <div className="flex flex-col gap-[20px] text-[20px] sm:text-[30px]">
                            <a href="https://www.facebook.com/profile.php?id=61564381340327" target="_blank">Facebook</a>
                            <a href="https://www.instagram.com/_pawel_garncarz/" target="_blank">Instagram</a>
                        </div>

                        <p className="text-[12vw] sm:text-[8vw] leading-[0.6]">Paweł Garncarz</p>
                    </div>
                </div>
            </div>
        </section>
    )
}