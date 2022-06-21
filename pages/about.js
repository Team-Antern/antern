import Head from "next/head";
import React, { useState } from "react";
import AboutHero from "../components/About Page/Hero";
import MoreAboutEducator from "../components/About Page/MoreAboutEducator";
import OurMission from "../components/About Page/OurMission";
import OurStory from "../components/About Page/OurStory";
import OurTeam from "../components/About Page/OurTeam";

const About = () => {
    const [showMoreAboutEducator, setShowMoreAboutEducator] = useState();
    const closeMoreAboutEducator = () => {
        setShowMoreAboutEducator();
        document.body.style.overflow = "auto";
    };
    return (
        <>
            <Head>
                <title>Antern - About Us</title>
                <meta
                    name="description"
                    content="Antern is where lifelong learners come to learn the skills they need, to land the jobs they want, to build the lives they deserve."
                />
                <meta property="og:title" content="Antern - About Us" />
                <meta
                    property="og:description"
                    content="Antern is where lifelong learners come to learn the skills they need, to land the jobs they want, to build the lives they deserve."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/ogabout.png" />
            </Head>
            <AboutHero />
            <OurMission />
            <OurTeam showMoreAboutEducator={setShowMoreAboutEducator} />
            {showMoreAboutEducator && (
                <MoreAboutEducator
                    educator={showMoreAboutEducator}
                    close={closeMoreAboutEducator}
                />
            )}
            <OurStory />
        </>
    );
};

export default About;
