import React from "react";

const AboutHero = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="heading">
                    <span>About </span>
                    <span>us</span>
                </div>
                <div className="desc">
                    Antern is where lifelong learners come to learn the skills
                    they need, to land the jobs they want, to build the lives
                    they deserve.
                </div>
            </div>
            <div className="container-blur" />
            <style jsx>{`
                .container {
                    padding: 152px 0px 180px 0px;
                    text-align: center;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/aboutus/abouthero_ETDpg9VH2.webp")
                        no-repeat;
                    background-size: cover;
                    position: relative;
                }

                .container-blur {
                    background-color: rgba(0, 0, 0, 0.01);
                    backdrop-filter: blur(4px);
                    position: absolute;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                .content {
                    max-width: 690px;
                    margin: auto;
                    position: relative;
                    z-index: 1;
                    font-family: "Plus Jakarta Display";
                    letter-spacing: -0.015em;
                    padding: 0px 40px;
                }

                .heading {
                    font-weight: 500;
                    font-size: 64px;
                    color: #eeeeee;
                    margin-bottom: 8px;
                    text-transform: capitalize;
                }

                .heading span:nth-child(2) {
                    color: #46c162;
                }

                .desc {
                    font-weight: 400;
                    font-size: 25px;
                    color: #ececec;
                    line-height: 134.5%;
                }

                @media screen and (max-width: 820px) {
                    .container {
                        padding: 75px 0px;
                    }

                    .heading {
                        font-weight: 500;
                        font-size: 40px;
                    }

                    .desc {
                        font-weight: 400;
                        font-size: 15px;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutHero;
