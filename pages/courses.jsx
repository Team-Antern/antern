import React from "react";
import Head from "next/head";
import Hero from "../components/Courses Page/Hero";
import PopularCourses from "../components/Courses Page/PopularCourses";

const Courses = () => {
    return (
        <>
            <Head>
                <title>Antern - Courses</title>
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
                <meta property="og:image" content="/assets/ogimage/home.png" />
            </Head>
            <div className="container">
                <Hero />
                <PopularCourses />
                <style jsx>{`
                    .container {
                    }
                `}</style>
            </div>
        </>
    );
};

export default Courses;
