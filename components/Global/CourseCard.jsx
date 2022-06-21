import React from "react";
import Link from "next/link";
import Button from "./Button";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFileEarmarkText, BsCameraVideo } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";

const CourseCard = ({ active, course }) => {
    return (
        <div className="container">
            {active && <div className="active" />}
            <div
                className="course-img"
                style={{
                    backgroundImage: `url("${course.courseImg}")`,
                }}
            />
            <div className="content">
                <div className="heading">{course.heading}</div>
                <div className="instructor">By {course.instructor}</div>
                <div className="features">
                    <div className="feature">
                        <AiOutlineClockCircle />
                        <div className="feature-desc">
                            {course.duration} Course
                        </div>
                    </div>
                    <div className="feature">
                        <BsFileEarmarkText />
                        <div className="feature-desc">
                            {course.attachements}
                        </div>
                    </div>
                    <div className="feature">
                        <BsCameraVideo />
                        <div className="feature-desc">
                            {course.isLive ? "Live Classes" : "Recorded Course"}
                        </div>
                    </div>
                </div>
                <Link href={`/course/${course.courseId}`}>
                    <Button
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            display: "block",
                            lineHeight: "7px",
                            letterSpacing: "-0.02em",
                            background: "#00983d",
                            borderRadius: "22.5px",
                            color: "#fff",
                        }}
                    >
                        View More
                    </Button>
                </Link>
            </div>
            <style jsx>{`
                .container {
                    width: 323px;
                    border-radius: 10px;
                    position: relative;
                    z-index: 0;
                    user-select: none;
                }

                .active {
                    position: absolute;
                    width: calc(100% + 6px);
                    height: calc(100% + 6px);
                    top: -3px;
                    left: -3px;
                    border-radius: 13px;
                    background: linear-gradient(#33ffc2 0%, #8c71bf 100%);
                    z-index: -1;
                }

                .course-img {
                    width: 100%;
                    height: 158px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-radius: 10px 10px 0px 0px;
                }

                .content {
                    padding: 32px 34px 22px;
                    border-radius: 0px 0px 10px 10px;
                    background: rgba(255, 255, 255, 0.95);
                }

                .heading {
                    font-family: Plus Jakarta Display;
                    font-size: 21px;
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    margin-bottom: 5px;
                }

                .instructor {
                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 400;
                    letter-spacing: -0.02em;
                    margin-bottom: 15px;
                }

                .features {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    margin-bottom: 20px;
                }

                .feature {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-size: 20px;
                    color: #00983d;
                }

                .feature-desc {
                    font-family: Poppins;
                    font-size: 13px;
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    color: #000;
                }

                @media screen and (max-width: 500px) {
                    .container {
                        width: 240px;
                        border-radius: 7px;
                    }

                    .content {
                        padding: 24px;
                        padding-bottom: 15px;
                        border-radius: 0px 0px 7px 7px;
                        background: rgba(255, 255, 255, 0.95);
                    }

                    .heading {
                        font-size: 16px;
                        line-height: 20px;
                    }

                    .instructor {
                        margin-bottom: 10px;
                        font-size: 9px;
                        line-height: 6px;
                    }

                    .feature {
                        gap: 5px;
                        font-size: 15px;
                    }

                    .feature-desc {
                        font-size: 10px;
                        line-height: 5px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CourseCard;
