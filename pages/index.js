import Head from "next/head";
import FAQ from "../components/Home Page/FAQ";
import Hero from "../components/Home Page/Hero";
import NotJustTakeOurWords from "../components/Home Page/NotJustTakeOurWords";
import PopularCourses from "../components/Home Page/PopularCourses";
import WhyAntern from "../components/Home Page/WhyAntern";

export default function Home() {
    return (
        <>
            <Head>
                <title>Antern - Home</title>
                <meta
                    name="description"
                    content="Build your career with Antern!"
                />
                <meta property="og:title" content="Antern - Home" />
                <meta
                    property="og:description"
                    content="Build your career with Antern!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/oghome.png" />
            </Head>
            <div className="container">
                <Hero />
                <WhyAntern />
                <PopularCourses />
                <NotJustTakeOurWords />
                <FAQ />
            </div>
        </>
    );
}
