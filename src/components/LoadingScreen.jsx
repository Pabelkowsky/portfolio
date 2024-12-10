import { motion } from 'framer-motion'; // poprawione: 'motion/react' na 'framer-motion'
import logo from '/logo-white.png';

export default function LoadingScreen() {
    const customEasing = [0.25, 0.1, 0.25, 1]; // Przykład niestandardowego easing w formacie Bezier

    return (
        <motion.section
            initial={{ transform: "translateY(0)" }}
            animate={{ transform: "translateY(-100%)" }}
            transition={{
                duration: 0.5,
                type: "keyframes",
                delay: 2,
                ease: customEasing, 
            }}
            className="w-full h-[100svh] fixed top-0 z-50"
        >
            <div className="relative bg-darkGray w-full h-full flex justify-center items-center">
                <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{
                        duration: 1,
                        type: "keyframes",
                        delay: 0.5,
                        ease: customEasing,
                    }}
                    className="w-full h-[2px] bg-white absolute top-[50%] translate-y-[-50%] z-10"
                ></motion.div>
                <motion.div
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{
                        duration: 1,
                        type: "keyframes",
                        delay: 0.5,
                        ease: customEasing,
                    }}
                    className="w-[2px] h-full bg-white absolute left-[50%] translate-x-[-50%] z-10"
                ></motion.div>
                <motion.div className="cir circle w-[25vw] h-[25vw] relative bg-darkGray z-30 rounded-full p-[5vw]">
                    <motion.img src={logo} alt="logo" className="imgMain w-full h-full object-cover" />
                </motion.div>
            </div>
        </motion.section>
    );
}
