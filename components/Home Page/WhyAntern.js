import React from "react";
import Feature from "./Feature";

const WhyAntern = () => {
    const features = [
        {
            title: "AI Powered Teaching Assistants",
            titleBg: "#0391ff",
            icon: "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/icon/feature1icon_WqcNeIt91.svg",
            "background-blur":
                "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/bg/feature1bg_YdoLfZtqK.webp",
        },
        {
            title: "Hand Written Lecture Materials",
            titleBg: "#a65bfe",
            icon: "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/icon/feature2icon_IzaTrgLD-Y.svg",
            "background-blur":
                "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/bg/feature2bg_v6nKVMgjV.webp",
        },
        {
            title: "Learn Through Augmented Reality",
            titleBg: "#07c6a5",
            icon: "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/icon/feature3icon_gr4YtZ0t8.webp",
            "background-blur":
                "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/bg/feature3bg_r31-GrhBS.webp",
        },
        {
            title: "Learn From Industry Experts",
            titleBg: "#fd66ca",
            icon: "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/icon/feature4icon_APSkLCYI3.webp",
            "background-blur":
                "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/bg/feature4bg_aDlzKV1jZR.webp",
        },
        {
            title: "Chapter Wise Assignments and Projects",
            titleBg: "#495d63",
            icon: "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/icon/feature5icon_VuTNL5pgK.webp",
            "background-blur":
                "https://ik.imagekit.io/jprbxp6m21m/home/whyantern/bg/feature5bg_KTQrBUt3TR.webp",
        },
    ];
    return (
        <div className="container">
            <div className="content">
                <div className="heading">
                    <span>Why Antern?</span>
                </div>
                <div className="features">
                    {features.map((feature, index) => (
                        <Feature key={index} feature={feature} />
                    ))}
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 122px 80px 175px 80px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/whyantern/pattern_K1prrSpsW.webp")
                        no-repeat;
                    background-position: center;
                    background-size: cover;
                }

                .content {
                    max-width: 1100px;
                    margin: auto;
                    margin-bottom: 80px;
                }

                .heading span {
                    font-family: "Plus Jakarta Sans";
                    font-weight: 500;
                    font-size: 44px;
                    letter-spacing: -0.035em;
                    position: relative;
                }

                .heading span::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    display: inline-block;
                    background: #7933ff;
                    width: 110px;
                    height: 3px;
                    left: 0px;
                }

                .features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 60px 36px;
                    margin-top: 80px;
                    justify-content: center;
                }

                @media screen and (max-width: 900px) {
                    .container {
                        padding: 88px 40px 64px 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhyAntern;
