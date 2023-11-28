import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {RiInstagramFill} from "react-icons/ri";
const ConnectWalletButton = dynamic(() => import('@/components/extra/ConnectWalletButton'), {
    ssr: false,
    loading: () => <span className="loading loading-spinner loading-sm"></span>
});
const MobileNavigation = dynamic(() => import('@/components/shared/MobileNavigation'));

interface INavbar {
    href: string,
    label: string
}


function DesktopNavigation({navLinks}: { navLinks: INavbar[] }) {
    const router = useRouter();

    useEffect(() => {
        // This will add a class to the active link based on the current route
        const handleRouteChange = () => {
            const links = document.querySelectorAll('.navbar-link');
            links.forEach((link) => {
                if (link.getAttribute('href') === router.pathname) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        // Subscribe to route changes
        router.events.on('routeChangeComplete', handleRouteChange);

        // Clean up the subscription on component unmount
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.pathname]);
    return (<header className={`w-full p-2 font-['Inter']  2xl:container 2xl:mx-auto flex`}>
        <figure className="flex justify-start items-center w-3/12 ">
            {/*<ImageImporter src={'/img/logo/SwapLogo.svg'} className="p-1" alt={"swap-logo"} w={50} h={50}/>*/}
            {/*<ImageImporter src={'/img/logo/baseCoin.svg'} className="p-1 mt-2 md:block hidden" alt={"base-swap"}*/}
            {/*               w={121} h={12}/>*/}

            <Image
                priority // or priority={true}
                src={'/img/logo/SwapLogo.svg'}
                className="p-1" alt={"swap-logo"} width={50} height={50}
            />
            <Image
                priority // or priority={true}
                src={'/img/logo/baseCoin.svg'}
                className="p-1 mt-2 md:block hidden"
                alt={"base-swap"}
                height={12}
                width={121}
            />
        </figure>
        <nav className="w-6/12 flex justify-center items-center">
            <ul className="w-full md:flex hidden justify-center items-center relative">
                {navLinks.map(({href, label}, index) => (
                    <li key={index}
                        className={`navbar-link text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer ${router.pathname === href ? 'border-b-white text-white text-bold' : ''}`}>
                        <Link passHref={true} href={href}>{label}</Link>
                    </li>
                ))}
                <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer  group">
                    Socials
                    <ul className="w-3/12 rounded-xl shadow p-3 -translate-x-2/3 bg-blue-950 bg-opacity-25 backdrop-blur-md absolute top-full mt-3  opacity-0 group-hover:opacity-100 duration-200 flex justify-between items-center">
                        <Link href={'https://linkedin.com/company/nill-developers'} passHref={true} className="text-[2rem] text-custom-red"><FaLinkedin/></Link>
                        <Link href={'https://instagram.com/nill_developers?igshid=OGQ5ZDc2ODk2ZA=='} passHref={true} className="text-[2rem] text-custom-red"><RiInstagramFill/></Link>
                        <Link href={'https://x.com/NillDevelopers?t=bDBBnZdVLZVz0xyRBg5FsQ&s=09'} passHref={true} className="text-[2rem] text-custom-red"><FaSquareXTwitter/></Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <div className="w-3/12 flex justify-end">
            <ConnectWalletButton/>
        </div>
    </header>)
}

const Navbar = () => {
    const navLinks: INavbar[] = [
        {href: '/', label: 'Swap'},
        {href: '/liquidity', label: 'Liquidity'},
    ];
    return (
        <>
            <DesktopNavigation navLinks={navLinks}/>
            <MobileNavigation/>
        </>
    );
};

export default Navbar;