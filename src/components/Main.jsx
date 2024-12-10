import img from '/main.png'

export default function Main(){
    return(
        <main>
            <div className='flex flex-col text-text items-center md:items-start'>
                <p className='font-extralight text-[18px] md:text-[25px] self-center mt-[30px] pb-[30px] md:pb-[50px]'>Paweł Garncarz</p>
                <div className='flex flex-col md:pl-[4vw]'>
                    <p className='text-[12vw] md:text-[8vw] leading-none font-light md:text-left text-center'>Kreatywny</p>
                    <div className='flex flex-col md:flex-row items-center md:items-start'>
                        <img src={img} alt="me" className='w-[60vw] md:w-[25vw] order-2 md:order-1 pt-[20px] md:pt-[0]' />
                        <div className='flex flex-col md:pl-[2vw] order-1 md:order-2'>
                            <div className='flex md:block gap-[1.2vw]'>
                                <p className='text-[12vw] md:text-[8vw] leading-none font-light md:translate-x-[6vw]'>Twórca &</p>
                                <p className='text-[12vw] md:text-[8vw] leading-none font-light '>Designer</p>
                            </div>
                            <div className='flex md:flex-row flex-col'>
                                <div className='w-[10vw] h-[10vw] min-w-[100px] min-h-[100px] rounded-full border-textGray border-[1px] hidden md:flex'>
                                    <a href="https://www.instagram.com/_pawel_garncarz/" target='_blank' className='w-full h-full flex justify-center items-center text-[1.3vw]'>
                                        Napisz do mnie!
                                    </a>
                                </div>
                                <p className='text-[12vw] md:text-[8vw] leading-none font-light md:translate-x-[5vw] md:text-left text-center'>Graficzny</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}