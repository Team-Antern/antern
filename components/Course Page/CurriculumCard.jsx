import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const CurriculumCard = ({ chapter, artNumber }) => {
    console.log(artNumber);
    return (
        <div className="curriculum-card">
            {chapter.duration && (
                <div className="duration">
                    <AiOutlineClockCircle fontSize="20px" />
                    <span>{chapter.duration}</span>
                </div>
            )}
            <ul className="topics">
                {chapter.topics.map((topic, index) => (
                    <li className="topic" key={index}>
                        {topic}
                    </li>
                ))}
            </ul>
            <div
                className="art"
                style={{
                    backgroundImage: `url("/assets/course/art${artNumber}.png")`,
                }}
            >
                <div className="name">{chapter.name}</div>
            </div>
            <style jsx>{`
                .curriculum-card {
                    background: #2b2f35;
                    border-radius: 20px;
                    padding: 37px 30px;
                    padding-bottom: 100px;
                    color: #fff;
                    max-width: 350px;
                    flex: 1;
                    min-width: 270px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .duration {
                    color: #e8ff00;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 4px;
                    font-family: Plus Jakarta Display;
                    font-weight: 400;
                    line-height: 15px;
                    letter-spacing: -0.025em;
                }

                .topics {
                    flex-grow: 1;
                }

                .topic {
                    font-family: Plus Jakarta Display;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 27px;
                    letter-spacing: -0.025em;
                }

                .art {
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                    display: block;
                    width: 100%;
                    background-repeat: no-repeat;
                    padding: 28px 24px;
                    background-position: center;
                    border-radius: 0px 0px 20px 20px;
                }

                .name {
                    font-family: Plus Jakarta Display;
                    font-weight: 500;
                    line-height: 12px;
                    letter-spacing: -0.025em;
                }
            `}</style>
        </div>
    );
};

export default CurriculumCard;
