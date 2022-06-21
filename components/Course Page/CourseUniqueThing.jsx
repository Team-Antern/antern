import React from "react";
import Image from "next/image";

const CourseUniqueThing = ({ uniqueFeatureHeading, uniqueFeatureImage }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="heading">
                    {uniqueFeatureHeading.heading[0]}{" "}
                    <span className="gray">{uniqueFeatureHeading.gray}</span>{" "}
                    <span className="green">{uniqueFeatureHeading.green}</span>{" "}
                    {uniqueFeatureHeading.heading[1]}
                </div>
                <div className="image">
                    <Image
                        src={`${uniqueFeatureImage}`}
                        layout="fill"
                        objectFit="contain"
                        alt="Course Unique Feature"
                    />
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 0px 40px;
                }

                .content {
                    max-width: 894px;
                    margin: auto;
                    display: flex;
                    gap: 50px;
                    align-items: center;
                }

                .heading {
                    flex: 1;
                    font-family: Plus Jakarta Display;
                    font-size: 40px;
                    line-height: 54px;
                    letter-spacing: -0.025em;
                    font-weight: 400;
                }

                .heading span {
                    font-weight: 700;
                }

                .gray {
                    color: #545454;
                }

                .green {
                    color: #2ed397;
                }

                .image {
                    flex: 1;
                    position: relative;
                    width: 100%;
                    height: 250px;
                }

                @media screen and (max-width: 940px) {
                    .content {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .heading {
                        max-width: 400px;
                        text-align: center;
                    }

                    .image {
                        flex: auto;
                    }
                }

                @media screen and (max-width: 700px) {
                    .heading {
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 27px;
                        max-width: 180px;
                    }

                    .right {
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
};

export default CourseUniqueThing;
