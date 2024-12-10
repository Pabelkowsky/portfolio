import { motion } from "motion/react"
import { useState } from "react"


export default function Contact(){
    return(
        <section className="pb-[50px] pt-[50px] sm:pt-[150px] sm:pb-[150px] bg-darkGray relative z-20">
            <p className="text-white text-[20px] md:text-[30px] text-right pr-[4vw]">Kontakt</p>
            <div className="border-t-[1px] border-t-services border-t-solid">
                <Item title="Instagram" link="https://www.instagram.com/_pawel_garncarz/"/>
                <Item title="Facebook" link="https://www.facebook.com/profile.php?id=61564381340327"/>
                <Item title="Gmail" link="mailto:pawelgarncarz88@gmail.com"/>
            </div>
        </section>
    )
}



function Item({ title, link }) {
    const [isHovered, setIsHovered] = useState(false)

    const letters = title.split('').map(letter => letter === ' ' ? '\u00A0' : letter)

    return (
        <div
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
        >
            <a href={link} target="_blank" className="flex pl-[4vw] pr-[4vw] pt-[30px] pb-[30px] justify-between items-center border-b-[1px] border-b-services border-b-solid">
            <div className="cursor-pointer text-[5.5vw] text-white leading-none h-min flex flex-col overflow-hidden relative">
                <div className="flex">
                    {letters.map((letter, i) => {
                        return <motion.div className="cursor-pointer translate-y-[0%]" initial={{y: '0%'}} animate={{ y: isHovered ? '-100%' : "0" }} transition={{ type: 'spring', delay: i*0.02, duration: 0.4 }} key={i}>{letter}</motion.div>
                    })}
                </div>

                <div className={`absolute flex`}>
                    {letters.map((letter, i) => {
                        return <motion.span className="translate-y-[100%]" initial={{y: '100%'}} animate={{ y: isHovered ? '0%' : "100%" }} transition={{ type: 'spring', delay: i*0.02, duration: 0.4 }} key={i}>{letter}</motion.span>
                    })}
                </div>
                
            </div>
            <svg className=" cursor-pointer w-[3.5vw] h-[3.5vw]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 14L14 34M14 34H34M14 34V14" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </a>
        </div>
    )
}

