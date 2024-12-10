import { motion, useTransform, useScroll } from 'motion/react'
import { useRef } from 'react'

import img6 from '/g1.png'
import img3 from '/g2.png'
import img2 from '/g3.png'
import img5 from '/g4.png'
import img4 from '/g5.png'
import img1 from '/g6.png'
import img7 from '/g7.png'
import img8 from '/g8.png'
import img9 from '/g9.png'
import img10 from '/g10.png'
import img11 from '/g11.png'
import img12 from '/g12.png'



export default function Gallery(){

    const container = useRef()

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y1 = useTransform(scrollYProgress, [0, 1], ["0vw", "-22vw"])
    const y2 = useTransform(scrollYProgress, [0, 1], ["-22vw", "10vw"])
    const y3 = useTransform(scrollYProgress, [0, 1], ["0vw", "-22vw"])



    return(
        <section ref={container} className=''>
            <div className='h-[130vw]  sm:h-[65vw] flex flex-grow overflow-hidden'>
                <Column src1={img1} src2={img5} src3={img3} src4={img10} y={y1} className="hidden sm:block"/>
                <Column src1={img4} src2={img12} src3={img11} src4={img6} y={y2}/>
                <Column src1={img7} src2={img8} src3={img9} src4={img2} y={y3}/>   
            </div>
        </section>
    )
}


function Column({src1, src2, src3, src4, y, ...props}){
    return(
        <motion.div style={{ y }} {...props}>
            <div className='w-full h-[40vw] sm:h-[unset] sm:min-h-0 relative'><img src={src1} alt="gallery img"  className='w-full h-full object-cover'/></div>
            <div className='w-full h-[40vw] sm:h-[unset] sm:min-h-0 relative'><img src={src2} alt="gallery img"  className='w-full h-full object-cover'/></div>
            <div className='w-full h-[40vw] sm:h-[unset] sm:min-h-0 relative'><img src={src3} alt="gallery img"  className='w-full h-full object-cover'/></div>
            <div className='w-full h-[40vw] sm:h-[unset] sm:min-h-0 relative'><img src={src4} alt="gallery img"  className='w-full h-full object-cover'/></div>
        </motion.div>
    )
}
