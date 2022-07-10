import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Global/Footer";
import HamMenu from "../components/Global/HamMenu";
import Header from "../components/Global/Header";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import Notification from "../components/Home Page/Notification";

function MyApp({ Component, pageProps }) {
    const [notification, setNotification] = useState({});
    const hammenu = useRef();
    const { route } = useRouter();
    useEffect(() => {
        const fetchNotification = async () => {
            const response = await fetch(
                "https://api.npoint.io/3b50f32ebafecb58b2ef"
            );
            const data = await response.json();
            setNotification(data);
        };
        fetchNotification();
    }, []);
    const openHamMenu = () => {
        document.body.style.overflow = "hidden";
        hammenu.current.style.height = "100vh";
    };
    const closeHamMenu = () => {
        document.body.style.overflow = "auto";
        hammenu.current.style.height = "0vh";
    };
    const attachHeaderAndFooter = () => {
        return (
            <>
                {Boolean(notification.content) & (route === "/") ? (
                    <Notification notification={notification} />
                ) : null}
                <HamMenu ref={hammenu} closeHamMenu={closeHamMenu} />
                <Header openHamMenu={openHamMenu} />
                <Component {...pageProps} />
                <Footer />
            </>
        );
    };
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script id="tawk">
                {`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/62ca51327b967b117998d409/1g7j4qbfo';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
            `}
            </Script>
            <Script strategy="lazyOnload" id="start">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <NextNProgress color="#4de89d" height={3} />
            <Head>
                <link
                    rel="icon"
                    href="https://ik.imagekit.io/jprbxp6m21m/icon_BD4urwHsY.svg"
                />
            </Head>
            {route === "/404" ? (
                <Component {...pageProps} />
            ) : (
                attachHeaderAndFooter()
            )}
        </>
    );
}

export default MyApp;
