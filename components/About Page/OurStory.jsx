import React from "react";

const OurStory = () => {
    return (
        <div className="container">
            <div className="heading">
                <span>Our </span>
                <span>Story</span>
            </div>
            <div className="content">
                Antern began as an experiment in online learning, when Antern
                instructors Ayush, Tushar &amp; Priyanshu elected to offer their
                &quot;Introduction to Artificial Intelligence&quot; course
                online to anyone, for free. Over 160,00 students in more than
                190 countries enrolled. The potential to educate at a global
                scale was awe-inspiring, and Antern was founded to pursue a
                mission to democratize education. It would take several years of
                intensive iteration and experimentation to clarify our focus on
                career advancement through mastery of in-demand skills, but
                today, Antern proudly offers aspiring learners across the globe
                the opportunity to participate in—and contribute to—some of the
                most exciting and innovative fields in the world.
            </div>
            <style jsx>{`
                .container {
                    max-width: 1024px;
                    margin: auto;
                    font-family: "Plus Jakarta Display";
                    margin-bottom: 130px;
                    padding: 0px 60px;
                }

                .heading {
                    text-align: center;
                    font-weight: 500;
                    font-size: 40px;
                    letter-spacing: -0.015em;
                    margin-bottom: 25px;
                }

                .heading span:nth-child(2) {
                    font-family: Poppins;
                    color: #46c162;
                }

                .content {
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 150%;
                    color: #6a6a6a;
                }

                @media screen and (max-width: 540px) {
                    .heading {
                        font-size: 25px;
                        font-weight: 500;
                        line-height: 25px;
                        margin-bottom: 10px;
                    }

                    .content {
                        font-size: 15px;
                        letter-spacing: 0em;
                    }

                    .container {
                        margin-bottom: 50px;
                    }
                }

                @media screen and (max-width: 360px) {
                    .container {
                        padding: 0px 40px;
                    }
                }

                @media screen and (max-width: 300px) {
                    .container {
                        padding: 0px 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default OurStory;
