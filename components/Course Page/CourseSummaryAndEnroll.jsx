import React from "react";
import { MdCheck } from "react-icons/md";
import Button from "../Global/Button";
import Link from "next/link";

const CourseSummaryAndEnroll = ({ courseSummaryAndEnroll, enrollLink }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="left">
                    <div className="heading">
                        {courseSummaryAndEnroll.heading}
                    </div>
                    <div className="desc">{courseSummaryAndEnroll.desc}</div>
                    <div className="features">
                        {courseSummaryAndEnroll.features.map(
                            (feature, index) => (
                                <div key={index} className="feature">
                                    <div className="feature-icon">
                                        <MdCheck />
                                    </div>
                                    <div className="feature-content">
                                        {feature}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="right">
                    <div className="course-banner">
                        <div className="part1">
                            <div className="logo" />
                            <div className="banner-image" />
                            <div className="course-title">
                                <div className="afrah">
                                    {courseSummaryAndEnroll.banner.part1.afrah}
                                    <div className="loop" />
                                </div>
                                <div className="wormbox">
                                    {
                                        courseSummaryAndEnroll.banner.part1
                                            .wormbox
                                    }
                                </div>
                                <div className="instructor">
                                    {
                                        courseSummaryAndEnroll.banner.part1
                                            .instructor
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="part2">
                            <div className="title">
                                <span>
                                    {
                                        courseSummaryAndEnroll.banner.part2
                                            .title[0]
                                    }
                                </span>{" "}
                                {courseSummaryAndEnroll.banner.part2.title[1]}
                            </div>
                            <div className="price">
                                <div className="original-price">
                                    {
                                        courseSummaryAndEnroll.banner.part2
                                            .price.originalPrice
                                    }
                                    <div className="price-cut" />
                                </div>
                                <div className="discounted-price">
                                    {
                                        courseSummaryAndEnroll.banner.part2
                                            .price.discountedPrice
                                    }
                                </div>
                            </div>
                            <Button
                                style={{
                                    display: "block",
                                    background: "#00F4AB",
                                    borderRadius: "8px",
                                    padding: "17px 5px",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "112%",
                                    letterSpacing: "-0.02em",
                                }}
                                link={enrollLink}
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 130px 40px;
                }

                .content {
                    max-width: 1200px;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 50px;
                }

                .left {
                    font-family: Plus Jakarta Display;
                    letter-spacing: -0.025em;
                    flex: 2;
                }

                .heading {
                    font-size: 35px;
                    font-weight: 500;
                    line-height: 44px;
                }

                .desc {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 30px;
                    margin-bottom: 40px;
                }

                .features {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                }

                .feature {
                    display: flex;
                    gap: 15px;
                }

                .feature-icon {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    color: #318076;
                    background: #97efab;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    flex-shrink: 0;
                    position: relative;
                    top: 6px;
                }

                .feature-content {
                    font-size: 25px;
                    font-weight: 400;
                    line-height: 42px;
                }

                .right {
                    flex: 1;
                }

                .course-banner {
                    max-width: 350px;
                }

                .part1 {
                    background: #c8faeb;
                    padding: 30px 40px 25px 40px;
                }

                .logo {
                    width: 90px;
                    height: 22px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/logo_NLduas0mf.webp");
                    margin: auto;
                }

                .banner-image {
                    max-width: 232px;
                    height: 125px;
                    background: url("/assets/course/bannerimg.png") no-repeat;
                    background-size: contain;
                    background-position: center;
                    margin: auto;
                    margin-top: 16px;
                }

                .course-title {
                    max-width: 300px;
                    margin: auto;
                }

                .afrah {
                    font-weight: 700;
                    font-size: 27px;
                    line-height: 112%;
                    letter-spacing: 0.01em;
                    position: relative;
                }

                .loop {
                    position: absolute;
                    top: -10px;
                    left: -16px;
                    width: 96px;
                    height: 44px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/loop_XQjqNsSd0.svg")
                        no-repeat;
                    background-size: cover;
                }

                .wormbox {
                    font-family: "Wormbox";
                    font-weight: 700;
                    font-size: 42px;
                    line-height: 112%;
                    letter-spacing: 0.01em;
                    color: #7933ff;
                }

                .instructor {
                    background: rgba(255, 255, 255, 0.73);
                    backdrop-filter: blur(2px);
                    border-radius: 18px;
                    padding: 10px 5px;
                    max-width: 175px;
                    margin: auto;
                    margin-top: 8px;
                    text-align: center;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 112%;
                    letter-spacing: -0.02em;
                    font-family: "Plus Jakarta Display";
                    color: #8c72cb;
                }

                .part2 {
                    padding: 22px 50px 36px 50px;
                    background: #3a3a3a;
                    text-align: center;
                }

                .title {
                    font-family: Plus Jakarta Display;
                    font-size: 29px;
                    font-weight: 400;
                    line-height: 33px;
                    letter-spacing: -0.02em;
                    color: #c0abf0;
                }

                .title span {
                    font-weight: 700;
                }

                .price {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    margin: 18px 0px;
                }

                .original-price {
                    font-family: "Plus Jakarta Display";
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 112%;
                    color: #939393;
                    position: relative;
                }

                .price-cut {
                    position: absolute;
                    width: 90%;
                    border: 0.954507px solid #f05e5e;
                    left: 7px;
                    top: 50%;
                    transform: translateY(-50%) rotate(-26.21deg);
                }

                .discounted-price {
                    font-family: "Plus Jakarta Display";
                    font-weight: 500;
                    font-size: 29px;
                    line-height: 112%;
                    letter-spacing: -0.02em;
                    color: #ffffff;
                }

                @media screen and (max-width: 1000px) {
                    .content {
                        flex-direction: column;
                        gap: 40px;
                    }
                }

                @media screen and (max-width: 700px) {
                    .heading {
                        font-size: 30px;
                        line-height: 44px;
                    }

                    .desc {
                        font-size: 20px;
                        line-height: 25px;
                        margin-bottom: 40px;
                    }

                    .features {
                        gap: 12px;
                    }

                    .feature {
                        gap: 10px;
                    }

                    .feature-icon {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        font-size: 10px;
                    }

                    .feature-content {
                        font-size: 20px;
                        line-height: 30px;
                    }

                    .course-banner {
                        max-width: 350px;
                    }
                }

                @media screen and (max-width: 430px) {
                    .part1 {
                        padding: 30px 20px 25px 20px;
                    }
                }

                @media screen and (max-width: 380px) {
                    .container {
                        padding: 80px 20px;
                    }

                    .logo {
                        width: 90px;
                        height: 22px;
                        background: url("/assets/course/logo.png");
                        margin: auto;
                    }

                    .afrah {
                        font-size: 20px;
                        line-height: 100%;
                    }

                    .loop {
                        top: -4px;
                        left: -12px;
                        width: 59px;
                        height: 27px;
                    }

                    .wormbox {
                        font-size: 35px;
                        line-height: 100%;
                    }

                    .part2 {
                        padding: 22px 40px 36px 40px;
                    }

                    .title {
                        font-size: 20px;
                        line-height: 25px;
                    }

                    .price {
                        margin: 15px 0px;
                    }

                    .original-price {
                        font-size: 12px;
                        line-height: 100%;
                    }

                    .price-cut {
                        left: 5px;
                    }

                    .discounted-price {
                        font-size: 20px;
                        line-height: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default CourseSummaryAndEnroll;
