import React from "react";

const Hero = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="left">
                    <div className="heading">
                        Boost Your Skills with <span>Antern</span>
                    </div>
                    <div className="desc">Get started with Antern</div>
                </div>
                <div className="right"></div>
            </div>
            <style jsx>{`
                .container {
                    background: #f9f5f5;
                    background-image: url("https://ik.imagekit.io/jprbxp6m21m/courses/pattern_oT8VOY-Zu.svg");
                    padding: 0px 110px;
                }

                .content {
                    max-width: 1500px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .left {
                    letter-spacing: -0.04em;
                    flex: 1;
                }

                .heading {
                    font-family: Plus Jakarta Display;
                    font-size: 62px;
                    font-weight: 500;
                    line-height: 71px;
                    margin-bottom: 26px;
                }

                .heading span {
                    color: #7933ff;
                }

                .desc {
                    font-family: Poppins;
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 32px;
                }

                .right {
                    flex: 2;
                    height: 600px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/courses/herobglarge_b-N-7xP6T.svg")
                        no-repeat;
                    background-position: bottom left;
                    background-size: 100% 80%;
                }

                @media screen and (max-width: 1320px) {
                    .right {
                        height: 500px;
                    }
                }

                @media screen and (max-width: 1100px) {
                    .container {
                        padding: 0px 65px;
                        padding-top: 60px;
                    }

                    .content {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .left,
                    .right {
                        flex: auto;
                    }

                    .right {
                        width: 100%;
                        background: url("https://ik.imagekit.io/jprbxp6m21m/courses/herobgsmall_Z7ZrBJCKU.svg")
                            no-repeat;
                        background-position: bottom center;
                        background-size: contain;
                    }

                    .heading {
                        font-size: 32px;
                        line-height: 36px;
                        margin-bottom: 15px;
                    }

                    .heading span {
                        color: #13bc67;
                    }

                    .desc {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }

                @media screen and (max-width: 540px) {
                    .left {
                        max-width: 186px;
                    }

                    .content {
                        align-items: flex-start;
                    }
                }

                @media screen and (max-width: 490px) {
                    .right {
                        height: 400px;
                    }
                }

                @media screen and (max-width: 422px) {
                    .right {
                        height: 300px;
                    }
                }

                @media screen and (max-width: 330px) {
                    .right {
                        height: 200px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;
