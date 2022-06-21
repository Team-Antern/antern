import Image from "next/image";
import WomanImage from "../../public/assets/heroelementwoman.png";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="left">
                    <div className="heading">
                        Build Your
                        <div className="heading-gradient">Future</div>
                    </div>
                    <Link href="/courses">
                        <a className="get-started">Get Started</a>
                    </Link>
                </div>
                <div className="right">
                    <div className="woman-image">
                        <Image src={WomanImage} alt="Woman" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    background: #ebebeb;
                    background-image: url("https://ik.imagekit.io/jprbxp6m21m/home/linebg_1__EKyqBwqqJ.svg");
                    background-repeat: no-repeat;
                    background-position-x: 20%;
                }

                .content {
                    max-width: 1500px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    gap: 130px;
                    position: relative;
                }

                .left {
                    margin-left: auto;
                }

                .heading {
                    font-family: "Plus Jakarta Sans";
                    font-weight: 400;
                    font-size: 83px;
                    line-height: 98.5%;
                    letter-spacing: -0.045em;
                    color: rgba(79, 79, 79, 0.87);
                }

                .heading-gradient {
                    background: radial-gradient(
                        50% 50% at 50% 50%,
                        #2feaa8 0%,
                        #028cf3 100%
                    );
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 500;
                    font-size: 86px;
                    letter-spacing: -0.03em;
                }

                .get-started {
                    background: linear-gradient(
                        265.78deg,
                        #028cf3 0%,
                        #2feaa8 100.01%
                    );
                    border-radius: 30px;
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 67.5%;
                    color: #202124;
                    padding: 24px 46px;
                    margin-top: 50px;
                }

                .right {
                    width: 60%;
                    height: 534px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/home/doodles_1__1Fc-Vfh8D.svg")
                        no-repeat;
                    background-size: cover;
                }

                .woman-image {
                    position: absolute;
                    bottom: -3px;
                    right: 10%;
                }

                @media screen and (max-width: 1500px) {
                    .left {
                        padding-left: 40px;
                    }
                }

                @media screen and (max-width: 1320px) {
                    .right {
                        width: 50%;
                    }
                }

                @media screen and (max-width: 1060px) {
                    .left {
                        width: 60%;
                    }

                    .right {
                        width: 40%;
                    }
                }

                @media screen and (max-width: 750px) {
                    .content {
                        flex-direction: column;
                        text-align: center;
                        padding-top: 70px;
                        gap: 0px;
                    }

                    .left {
                        max-width: 185px;
                        margin: auto;
                        padding-left: 0px;
                    }

                    .right {
                        width: 100%;
                    }

                    .woman-image {
                        left: 50%;
                        transform: translateX(-54%);
                        width: 90%;
                    }

                    .get-started {
                        margin: 0px;
                        position: absolute;
                        bottom: 56px;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 1;
                        background: #fff;
                        padding: 20px 37px;
                    }

                    .heading {
                        font-family: Poppins;
                        font-size: 45px;
                        line-height: 48px;
                    }

                    .heading-gradient {
                        font-family: Poppins;
                        font-size: 47px;
                        line-height: 50px;
                        letter-spacing: 0em;
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;
