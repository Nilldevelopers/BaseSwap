import React, {memo} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

interface IBaseLayout {
    children: React.ReactNode
}
const PageTransitionAnimations = ({children}: IBaseLayout) => {
    const router = useRouter()
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 1,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    exitState: {
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    },
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default memo(PageTransitionAnimations);