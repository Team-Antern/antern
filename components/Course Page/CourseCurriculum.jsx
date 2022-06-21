import { useState } from "react";
import { MdCheck } from "react-icons/md";
import CurriculumCard from "./CurriculumCard";

const CourseCurriculum = ({ curriculum }) => {
    const [selectedLevel, setSelectedLevel] = useState(0);
    const levels = [
        {
            name: "beginner",
            icon: "https://ik.imagekit.io/jprbxp6m21m/course_page/levels/beginner_dsEP6gGQ_.svg",
            chapters: curriculum.beginner,
        },
        {
            name: "intermediate",
            icon: "https://ik.imagekit.io/jprbxp6m21m/course_page/levels/intermediate_yTEeOcnd-8.svg",
            chapters: curriculum.intermediate,
        },
        {
            name: "advanced",
            icon: "https://ik.imagekit.io/jprbxp6m21m/course_page/levels/advanced_WCBnYYi68.svg",
            chapters: curriculum.advanced,
        },
        {
            name: "projects",
            icon: "https://ik.imagekit.io/jprbxp6m21m/course_page/levels/projects_lFri2lyRG.svg",
            chapters: curriculum.projects,
        },
    ];
    return (
        <div className="container">
            <div className="content">
                <div className="heading">
                    Curriculum is designed to shape you as an{" "}
                    <span>{curriculum.heading}</span>
                </div>
                <div className="desc">
                    Our curriculum has been designed in a way such that you can
                    start from very basics and then linearly progress to get to
                    an advance level.
                </div>
                <div className="levels">
                    {levels.map((level, index) => (
                        <div
                            key={index}
                            className={`level${
                                selectedLevel === index ? " active-level" : ""
                            }`}
                            onClick={() => setSelectedLevel(index)}
                        >
                            {selectedLevel === index && (
                                <div className="level-check">
                                    <MdCheck />
                                </div>
                            )}
                            <div
                                className="level-icon"
                                style={{
                                    backgroundImage: `url("${level.icon}")`,
                                }}
                            />
                            <div className="level-name">{level.name}</div>
                        </div>
                    ))}
                </div>
                <div className="curriculum-cards">
                    {(() => {
                        let artNumber = 1;
                        const cards = [];
                        levels[selectedLevel].chapters.map((chapter, index) => {
                            cards.push(
                                <CurriculumCard
                                    key={index}
                                    artNumber={artNumber}
                                    chapter={chapter}
                                />
                            );
                            artNumber < 3 ? artNumber++ : (artNumber = 1);
                        });
                        return cards;
                    })()}
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 0px 40px;
                }

                .content {
                    max-width: 1400px;
                    margin: auto;
                }

                .heading {
                    font-family: Plus Jakarta Display;
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 52px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    max-width: 550px;
                    margin: auto;
                }

                .heading span {
                    color: #1ae770;
                }

                .desc {
                    font-family: Plus Jakarta Display;
                    font-size: 23px;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    max-width: 718px;
                    margin: 45px auto 22px auto;
                }

                .levels {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    max-width: 1000px;
                    margin: auto;
                    flex-wrap: wrap;
                }

                .level {
                    padding: 22px;
                    max-width: 200px;
                    min-width: 190px;
                    flex: 1;
                    background: #ececec;
                    border-radius: 22px;
                    cursor: pointer;
                    position: relative;
                    transition: 0.2s all;
                }

                .level-check {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #3dc88b;
                    position: absolute;
                    right: 22px;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                }

                .level-icon {
                    margin: 45px auto 36px auto;
                    width: 80px;
                    height: 80px;
                    background-color: #cecece;
                    border-radius: 50%;
                    background-repeat: no-repeat;
                    background-size: 47px 47px;
                    background-position: center;
                }

                .level-name {
                    font-family: Plus Jakarta Display;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 31px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    text-transform: capitalize;
                    color: #737373;
                }

                .active-level {
                    background: #323b4a;
                }

                .active-level .level-icon {
                    background-color: #fff;
                }

                .active-level .level-name {
                    color: #fff;
                }

                .curriculum-cards {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    margin-top: 112px;
                    flex-wrap: wrap;
                }

                @media screen and (max-width: 1000px) {
                    .heading {
                        font-size: 30px;
                        line-height: 40px;
                        max-width: 450px;
                    }

                    .desc {
                        font-size: 18px;
                        line-height: 25px;
                        max-width: 718px;
                        margin: 35px auto 18px auto;
                    }

                    .curriculum-cards {
                        margin-top: 80px;
                    }

                    .level-name {
                        font-size: 20px;
                        line-height: 15px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CourseCurriculum;
