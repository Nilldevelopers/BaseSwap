

import React, { useState, useEffect, useRef } from 'react';
import SwapCart from "@/views/home/components/cart/SwapCart";
import { TVChartContainer } from "@/views/home/components/chart/chartComponent";
import { GetAccountResult } from "@wagmi/core";
import { INetworkInfo } from "@/interfaces/INetworkInfo";
import { useInView } from 'react-intersection-observer';

const HomeView = (props: {
    walletInfo: GetAccountResult,
    networkInfo: INetworkInfo,
    blockNumber: number
}) => {
    const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
    const [visibleSectionIndex, setVisibleSectionIndex] = useState<number | null>(null);

    // Callback function for Intersection Observer
    const handleIntersection = (index: number, entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
            setVisibleSectionIndex(index);
        }
    };

    // Hook to track the visibility of each section
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px', // Adjust the root margin based on your design
    });

    // Update the refs array when a new section is rendered
    const registerSectionRef = (index: number) => (ref: HTMLDivElement | null) => {
        if (ref) {
            // @ts-ignore
            sectionRefs.current[index] = ref;
        }
    };

    // Scroll to the next section when a section becomes visible
    useEffect(() => {
        if (inView && visibleSectionIndex !== null) {
            const nextIndex = visibleSectionIndex + 1;
            if (nextIndex < sectionRefs.current.length) {
                // @ts-ignore
                sectionRefs.current[nextIndex]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    }, [inView, visibleSectionIndex]);

    // Scroll to the next section when user scrolls manually
    const handleScroll = useRef(() => {
        if (visibleSectionIndex !== null) {
            const nextIndex = visibleSectionIndex + 1;
            if (nextIndex < sectionRefs.current.length) {
                // @ts-ignore
                sectionRefs.current[nextIndex]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    });

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll.current, { passive: true });

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll.current);
        };
    }, [handleScroll]);

    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0" ref={ref}>
            <section
                ref={registerSectionRef(0)}
                className="md:w-4/12  p-2 flex flex-wrap"
            >
                <SwapCart />
            </section>

            <section
                ref={registerSectionRef(1)}
                className="md:w-8/12 w-full md:h-[500px]  mt-3 rounded-xl bg-custom-cart"
            >

                <TVChartContainer />
            </section>
        </section>
    );
};

export default HomeView;

