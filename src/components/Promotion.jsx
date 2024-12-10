import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'


import img from '/black-friday.png';

export default function Promotion() {


    const container = useRef()

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["20vw", "-20vw"])

    return (
        <section ref={container} className="prom bg-darkGray relative z-20">
            <div className="pt-[100px] pb-[100px] flex justify-center items-center relative overflow-hidden text-stroke">
                <motion.h1 style={{ y }} className="absolute font-bold text-[16vw] sm:text-[80px] md:text-[100px] lg:text-[9vw] text-white z-10 text-center">
                    ZRÓB WRAŻENIE W SIECI
                </motion.h1>
                <motion.h1 style={{ y }} className="absolute font-bold text-[16vw] sm:text-[80px] md:text-[100px] lg:text-[9vw] text-transparent z-30 text-stroke text-center">
                    ZRÓB WRAŻENIE W SIECI
                </motion.h1>
                <div className="relative w-[60vw] sm:min-w-[400px] sm:w-[30vw] z-20">
                    <motion.img src={img} alt="image" className="w-full h-full" />
                </div>
            </div>
        </section>
    );
}
