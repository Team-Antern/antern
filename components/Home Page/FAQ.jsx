import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const FAQ = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(0);
    const expandQuestion = (question) => {
        setExpandedQuestion(question);
    };
    const questions = [
        {
            title: "Do I get a certificate for completing the program",
            answer: "We will provide a certificate to every student enrolled in the course, but a Letter Of Recommendation will only be given to the students who perform well in the course.",
        },
        {
            title: "Are we going to develop projects during the course?",
            answer: "Yes, every course at Antern is project-driven. You will be developing industry-grade projects following the best industry practices taught by the instructors.",
        },
        {
            title: "What is the duration of each of the lectures?",
            answer: "The duration of each lecture varies from 2 to 3 hours.",
        },
        {
            title: "Are there financial aids availiable in the course?",
            answer: "Yes, we also provide financial aid for a course.",
        },
        {
            title: "Who are eligible for getting a Letter of Recommendation?",
            answer: "Students who have completed all the assignments and tests with a final project developed by following the best practices can get a Letter Of Recommendation.",
        },
    ];
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <div className="heading">
                        <span>
                            FAQs
                            <span className="underline" />
                        </span>
                    </div>
                    <div className="faqs">
                        {questions.map((question, index) => (
                            <div key={index} className="faq">
                                <div
                                    className="faq-question"
                                    onClick={() => expandQuestion(index)}
                                >
                                    <div className="question">
                                        0{index + 1}. {question.title}
                                    </div>
                                    <div className="expand-collapse">
                                        {index === expandedQuestion ? (
                                            <BiMinus />
                                        ) : (
                                            <BiPlus />
                                        )}
                                    </div>
                                </div>
                                {index === expandedQuestion ? (
                                    <div className="answer">
                                        {question.answer}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="black" />
            <style jsx>{`
                .wrapper {
                    position: relative;
                }

                .container {
                    background: #55cb84;
                    border-top: 4px solid rgba(255, 255, 255, 0.32);
                    backdrop-filter: blur(4px);
                    border-radius: 0px 0px 90px 90px;
                    padding: 75px 0px 60px;
                    color: #fff;
                }

                .black {
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    top: 0px;
                    left: 0px;
                    z-index: -1;
                }

                .content {
                    max-width: 1200px;
                    margin: auto;
                    padding: 20px;
                }

                .heading {
                    font-family: "Plus Jakarta Sans";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 35px;
                    letter-spacing: -0.02em;
                    margin-bottom: 40px;
                    text-align: center;
                }

                .heading > span {
                    position: relative;
                }

                .underline {
                    background: url("https://ik.imagekit.io/jprbxp6m21m/headingunderline_oLOIAydPa.svg")
                        no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: 20px;
                    margin: auto;
                    position: absolute;
                    bottom: -25px;
                    left: 0px;
                }

                .faqs {
                    display: flex;
                    gap: 25px;
                    flex-direction: column;
                }

                .faq {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                    padding: 0px 14px 25px;
                    height: 0%;
                    overflow-y: hidden;
                    transition: height 0.3s;
                }

                .faq-question {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .question {
                    font-family: "Plus Jakarta Display";
                    font-weight: 500;
                    font-size: 30px;
                    cursor: pointer;
                }

                .answer {
                    font-family: "Poppins";
                    font-weight: 300;
                    font-size: 20px;
                    margin-top: 20px;
                }

                .expand-collapse {
                    background: #fff;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #000;
                    cursor: pointer;
                }

                @media screen and (max-width: 800px) {
                    .container {
                        border-radius: 0px 0px 50px 50px;
                    }
                }

                @media screen and (max-width: 600px) {
                    .container {
                        padding: 60px 0px 66px;
                    }

                    .heading {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 14px;
                    }

                    .underline {
                        height: 9px;
                        bottom: -10px;
                    }

                    .question {
                        font-size: 16px;
                        line-height: 17px;
                        letter-spacing: -0.02em;
                    }

                    .answer {
                        font-size: 9px;
                        font-weight: 400;
                        line-height: 11px;
                        letter-spacing: -0.02em;
                    }

                    .faqs {
                        gap: 15px;
                    }

                    .faq {
                        padding: 0px 14px 15px;
                    }

                    .answer {
                        margin-top: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default FAQ;
