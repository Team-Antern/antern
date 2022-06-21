import React from "react";

const OurMission = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="left" />
                <div className="right">
                    <div className="heading">
                        <span>Our </span>
                        <span>Mission</span>
                    </div>
                    <div className="desc">
                        Our mission is to train the world’s workforce in the
                        careers of the future. We partner with leading
                        technology companies to learn how technology is
                        transforming industries, and teach the critical tech
                        skills that companies are looking for in their
                        workforce.
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    margin: 130px 0px 100px 0px;
                    padding: 0px 160px;
                }

                .content {
                    font-family: "Plus Jakarta Display";
                    letter-spacing: -0.015em;
                    max-width: 1170px;
                    border-radius: 15px;
                    margin: auto;
                    position: relative;
                }

                .left {
                    position: absolute;
                    width: calc(50% + 22px);
                    height: calc(100% + 44px);
                    top: -22px;
                    left: -22px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/aboutus/ourmission_0IILauDbG.webp")
                        no-repeat;
                    background-position: center;
                    z-index: 2;
                    border-radius: 15px;
                    background-size: cover;
                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
                }

                .right {
                    background: #f8f8f8;
                    width: 50%;
                    padding: 50px 75px;
                    margin-left: auto;
                }

                .heading {
                    font-weight: 500;
                    font-size: 40px;
                }

                .heading span:nth-child(2) {
                    color: #46c162;
                }

                .desc {
                    font-weight: 400;
                    font-size: 23px;
                    line-height: 141.5%;
                    color: #6a6a6a;
                    margin-top: 8px;
                }

                @media screen and (max-width: 1280px) {
                    .left {
                        position: static;
                        width: 100%;
                        height: 400px;
                        margin-bottom: 40px;
                    }

                    .right {
                        padding: 0px 20px;
                        background: #fff;
                        width: 100%;
                        margin: 0px;
                    }
                }

                @media screen and (max-width: 900px) {
                    .container {
                        padding: 0px 60px;
                    }
                }

                @media screen and (max-width: 540px) {
                    .container {
                        padding: 0px 40px;
                    }
                }

                @media screen and (max-width: 540px) {
                    .container {
                        margin: 50px 0px 30px 0px;
                    }

                    .right {
                        letter-spacing: -0.015em;
                    }

                    .heading {
                        font-size: 25px;
                        font-weight: 500;
                        line-height: 25px;
                    }

                    .desc {
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 21px;
                    }
                }

                @media screen and (max-width: 360px) {
                    .container {
                        padding: 0px 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default OurMission;
