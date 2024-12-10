

export default function BurgerMenu(){
    return(
        <div className="z-40 bg-burger rounded-full w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] flex flex-col justify-between sm:pt-[31px] pt-[26px] pb-[26px] pr-[18px] pl-[18px] sm:pr-[20px] sm:pb-[31px] sm:pl-[20px] fixed right-4 top-4 sm:right-10 sm:top-10 cursor-pointer">
            <div className="w-full h-[2px] bg-white"></div>
            <div className="w-full h-[2px] bg-white"></div>
        </div>
    )
}