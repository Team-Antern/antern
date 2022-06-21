import React from "react";
import { BsBook, BsCameraVideo, BsCommand } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";

const CourseFeatures = () => {
    const features = [
        {
            icon: <BsBook />,
            heading: "Structured, Industry Standard Curriculum",
        },
        {
            icon: <BsCameraVideo />,
            heading: "Live Lectures By Instructors",
        },
        {
            icon: <BsCommand />,
            heading: "Project Based Learning through Industry Grade Projects",
        },
        {
            icon: <TbCertificate />,
            heading: "Certificate/Credits and Letter Of Recommendation",
        },
    ];
    return (
        <div className="container">
            <div className="content">
                {features.map((feature, index) => (
                    <div key={index} className="feature">
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-heading">{feature.heading}</div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container {
                    padding: 40px;
                    margin-bottom: 124px;
                }

                .content {
                    max-width: 1100px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .feature {
                    width: 244px;
                    height: 244px;
                    background: #545454;
                    border: 1px solid #dfdfdf;
                    border-radius: 6.59016px;
                    position: relative;
                    color: #d8d8d8;
                    transition: 0.2s all;
                }

                .feature:hover {
                    border: 1px solid #b4b0b0;
                    border-radius: 12px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/featurehover_2T_3B_faN.webp")
                        no-repeat;
                    background-size: cover;
                    color: #726262;
                }

                .feature-icon {
                    position: absolute;
                    top: 27px;
                    right: 25px;
                    font-size: 32px;
                }

                .feature-heading {
                    position: absolute;
                    display: block;
                    width: 176px;
                    font-family: Plus Jakarta Sans;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 26px;
                    letter-spacing: -0.025em;
                    bottom: 27px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                @media screen and (max-width: 700px) {
                    .container {
                        padding: 40px;
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CourseFeatures;
