import React from "react";

const OurSpecialBenefits = () => {
    return (
        <div className="container">
            <div className="heading">Our Special Benefits</div>
            <div className="content">
                <div className="special-benefit">
                    <div className="special-benefit-image">
                        <img
                            alt="Research Paper"
                            src="https://ik.imagekit.io/jprbxp6m21m/course_page/research-paper_v-h1JbTdi.png"
                        />
                    </div>
                    <div className="special-benefit-content">
                        <div className="special-benefit-heading">
                            Write your own research paper
                        </div>
                        <div className="special-benefit-desc">
                            Work on a research problem as a final project in the
                            course guided by Mr. Ayush Singh and publish a
                            researcg paper.
                        </div>
                    </div>
                </div>
                <div className="special-benefit">
                    <div className="special-benefit-content">
                        <div className="special-benefit-heading">
                            Get handwritten notes
                        </div>
                        <div className="special-benefit-desc">
                            Work on a research problem as a final project in the
                            course guided by Mr. Ayush Singh and publish a
                            researcg paper.
                        </div>
                    </div>
                    <div className="special-benefit-image">
                        <img
                            alt="Research Paper"
                            src="https://ik.imagekit.io/jprbxp6m21m/course_page/notes_wpFN7M2HU.jpg"
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 0 25px;
                    margin-top: 50px;
                }

                .heading {
                    max-width: 600px;
                    margin: auto;
                    font-family: Plus Jakarta Display;
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 54px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    margin-bottom: 100px;
                }

                .content {
                    max-width: 1200px;
                    margin: auto;
                }

                .special-benefit {
                    display: flex;
                    align-items: center;
                }

                .special-benefit-image {
                    width: 40%;
                }

                .special-benefit-image img {
                    width: 100%;
                }

                .special-benefit-content {
                    width: 60%;
                }

                .special-benefit-heading {
                    font-size: 40px;
                    font-weight: 600;
                    margin-bottom: 25px;
                }

                .special-benefit-desc {
                    font-size: 20px;
                    line-height: 1.5;
                }

                @media screen and (max-width: 1350px) {
                    .special-benefit {
                        flex-direction: column;
                        margin-bottom: 40px;
                        text-align: center;
                    }

                    .content > div:last-child > div:first-child {
                        order: 1;
                    }

                    .special-benefit-image {
                        width: 50%;
                    }

                    .special-benefit-content {
                        width: 50%;
                    }
                }

                @media screen and (max-width: 1000px) {
                    .heading {
                        font-size: 30px;
                        line-height: 40px;
                        max-width: 450px;
                        margin-bottom: 50px;
                    }

                    .special-benefit-image {
                        width: 80%;
                    }

                    .special-benefit-content {
                        width: 80%;
                    }
                }

                @media screen and (max-width: 700px) {
                    .special-benefit-image {
                        width: 80%;
                    }

                    .special-benefit-content {
                        width: 80%;
                    }

                    .special-benefit-heading {
                        font-size: 30px;
                        margin-bottom: 10px;
                    }

                    .special-benefit-desc {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
};

export default OurSpecialBenefits;
