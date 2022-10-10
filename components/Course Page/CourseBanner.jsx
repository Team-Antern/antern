import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowReturnLeft, BsPlay } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const CourseBanner = ({ heading, enrollLink, trailerLink, bannerImage }) => {
    const [ratio, setRatio] = useState(16 / 9);
    const [bottom, setBottom] = useState();
    const getWidthPercent = () =>
        window.innerWidth > 535 ? 50 / 100 : 80 / 100;
    const [widthPercent, setWidthPercent] = useState(getWidthPercent);
    useEffect(() => {
        const configureImageBottom = () => {
            const width = window.innerWidth;
            const widthPercent = getWidthPercent();
            const height = (width * widthPercent) / ratio;
            const bottom = height / 2;
            setWidthPercent(widthPercent);
            setBottom(bottom);
        };
        configureImageBottom();
        window.addEventListener("resize", configureImageBottom);
    }, [ratio]);
    return (
        <>
            <div className="container">
                <div className="scroll-down">
                    <span className="white">Scroll</span>
                    <span className="blue">Down</span> <AiOutlineArrowRight />
                </div>
                <div className="heading">{heading}</div>
                <div className="controls">
                    <Link href={`${enrollLink}`}>
                        <a>
                            <div className="control">
                                <div className="control-icon">
                                    <BsArrowReturnLeft />
                                </div>
                                <div className="control-heading">
                                    Enroll <div className="bold">Now</div>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href={`${trailerLink}`}>
                        <a>
                            <div className="control">
                                <div className="control-icon">
                                    <BsPlay />
                                </div>
                                <div className="control-heading">
                                    Watch <div className="bold">Trailer</div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="course-banner-img">
                    <Image
                        src={bannerImage}
                        alt="Banner Image"
                        width={window.innerWidth * widthPercent}
                        height={(window.innerWidth * widthPercent) / ratio}
                        layout="fixed"
                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                            setRatio(naturalWidth / naturalHeight)
                        }
                        style={{
                            maxWidth: "600px",
                        }}
                    />
                </div>
            </div>
            <div className="outer-controls">
                <Link href={`${enrollLink}`}>
                    <a>
                        <div className="control">
                            <div className="control-icon">
                                <BsArrowReturnLeft />
                            </div>
                            <div className="control-heading">
                                Enroll <div className="bold">Now</div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href={`${trailerLink}`}>
                    <a>
                        <div className="control">
                            <div className="control-icon">
                                <BsPlay />
                            </div>
                            <div className="control-heading">
                                Watch <div className="bold">Trailer</div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .container {
                    padding: 117px 20px 220px 20px;
                    background: #3b61d2;
                    background-image: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/pattern_pHLI2B6yO.svg");
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    margin-bottom: 352px;
                }

                .heading {
                    font-family: Plus Jakarta Display;
                    font-size: 75px;
                    font-weight: 500;
                    line-height: 75px;
                    letter-spacing: -0.02em;
                    color: #24fe80;
                    max-width: 636px;
                    text-align: center;
                    margin: auto;
                }

                .controls,
                .outer-controls {
                    max-width: 1152px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0px 50px;
                }

                .outer-controls {
                    justify-content: center;
                    gap: 12px;
                    margin-top: 95px;
                    display: none;
                }

                .control-seperator {
                    height: 22px;
                    border: 1px solid #cecece;
                }

                .control {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    color: #fff;
                    cursor: pointer;
                }

                .control-icon {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 25px;
                    font-size: 35px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/control-icon_yaoUj_SbD.webp")
                        no-repeat;
                    background-size: cover;
                    color: #fff;
                }

                .outer-controls .control {
                    color: #000;
                    gap: 8px;
                }

                .outer-controls .control-icon {
                    width: 37px;
                    height: 37px;
                    border-radius: 13px;
                    font-size: 17px;
                }

                .control-heading {
                    font-family: Plus Jakarta Display;
                    font-size: 25px;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: -0.02em;
                }

                .outer-controls .control-heading {
                    font-family: Plus Jakarta Display;
                    font-size: 13px;
                    line-height: 13px;
                }

                .bold {
                    font-weight: bold;
                }

                .course-banner-img {
                    position: absolute;
                    left: 50%;
                    bottom: -${bottom}px;
                    transform: translateX(-50%);
                }

                .scroll-down {
                    font-family: Plus Jakarta Display;
                    font-size: 26px;
                    font-weight: 400;
                    line-height: 26px;
                    letter-spacing: -0.02em;
                    color: #000;
                    display: flex;
                    align-items: center;
                    transform: rotate(90deg);
                    position: absolute;
                    bottom: -20.5px;
                    right: 50px;
                    text-transform: uppercase;
                }

                .white {
                    color: #fff;
                }

                .blue {
                    color: #004aab;
                    margin: 0px 10px;
                }

                @media screen and (max-width: 1150px) {
                    .controls {
                        margin-top: 40px;
                    }
                }

                @media screen and (max-width: 920px) {
                    .container {
                        padding: 60px 0px 107px 0px;
                        margin-bottom: 0px;
                    }

                    .heading {
                        font-size: 40px;
                        line-height: 45px;
                        max-width: 620px;
                    }

                    .controls {
                        display: none;
                    }

                    .outer-controls {
                        display: flex;
                    }

                    .scroll-down {
                        display: none;
                    }
                }

                @media screen and (max-width: 660px) {
                    .heading {
                        font-size: 33px;
                        line-height: 33px;
                        max-width: 276px;
                    }

                    .course-banner-image {
                        max-width: 60%;
                    }
                }
            `}</style>
        </>
    );
};
export default CourseBanner;
