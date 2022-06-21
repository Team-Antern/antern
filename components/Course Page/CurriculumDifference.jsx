import { MdOutlineClose, MdCheck } from "react-icons/md";

const CurriculumDifference = () => {
    const otherCoursesPoints = [
        {
            heading: "Unstructured",
            desc: "Scattered articles, blogs & videos need extra effort to stitch it all together",
        },
        {
            heading: "Theoretical",
            desc: "Limited practical work = lower confidence",
        },
        {
            heading: "Impersonal",
            desc: "Recorded videos & articles with no personalisation",
        },
        {
            heading: "Not industry-relevant",
            desc: "Old, outdated content",
        },
        {
            heading: "Over Priced",
            desc: "Charges too much",
        },
        {
            heading: "No Job Sustaining Gaurantee",
            desc: "X% of your salary but no job sustaining gaurantee.",
        },
    ];
    const anternCoursesPoints = [
        {
            heading: "Structured",
            desc: "Thoughtfully designed curriculum helps you to emerge confident & comfortable.",
        },
        {
            heading: "Hands On",
            desc: "Projects and assignments to actually implement concepts",
        },
        {
            heading: "Personalised",
            desc: "Topics, peers & pace of learning are optimized for your needs",
        },
        {
            heading: "Industry-relevant",
            desc: "Industry-tested curriculum to make you job ready",
        },
        {
            heading: "0% of Your Salary",
            desc: "Industry-tested curriculum to make you job ready",
        },
        {
            heading: "Student Friendly Price",
            desc: "Available in a student friendly price",
        },
    ];
    return (
        <div className="container">
            <div className="line" />
            <div className="hand" />
            <div className="heading">
                Tried & Tested Curriculum, Trusted by thousands of students
            </div>
            <div className="content">
                <div className="card others">
                    <div className="logo">others</div>
                    <div className="heading">Other Products in the market</div>
                    <div className="points">
                        {otherCoursesPoints.map((point, index) => (
                            <div key={index} className="point">
                                <div className="point-icon">
                                    <MdOutlineClose />
                                </div>
                                <div className="point-content">
                                    <div className="point-heading">
                                        {point.heading}
                                    </div>
                                    <div className="point-desc">
                                        {point.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card antern">
                    <div
                        className="logo"
                        style={{
                            backgroundImage:
                                "url('https://ik.imagekit.io/jprbxp6m21m/logoblackbg_opAjdINny.webp')",
                        }}
                    />
                    <div className="heading">Antern&apos;s Curriculum</div>
                    <div className="points">
                        {anternCoursesPoints.map((point, index) => (
                            <div key={index} className="point">
                                <div className="point-icon">
                                    <MdCheck />
                                </div>
                                <div className="point-content">
                                    <div className="point-heading">
                                        {point.heading}
                                    </div>
                                    <div className="point-desc">
                                        {point.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding: 100px 40px 138px 40px;
                    position: relative;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/curriculumdifferencepattern_TchSirW1O.svg")
                        no-repeat;
                }

                .line {
                    position: absolute;
                    width: 398px;
                    height: 5px;
                    background: #c4c4c4;
                    border-radius: 2.5px;
                    top: 135px;
                    left: 0px;
                }

                .hand {
                    width: 380px;
                    height: 285px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/course_page/hero/hand_YNFwj4Weq.webp")
                        no-repeat;
                    background-position: right;
                    position: absolute;
                    display: block;
                    right: 0px;
                }

                .container > .heading {
                    max-width: 600px;
                    margin: auto;
                    font-family: Plus Jakarta Display;
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 54px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    margin-bottom: 122px;
                }

                .content {
                    max-width: 1020px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    justify-content: space-between;
                }

                .card {
                    padding: 65px;
                    position: relative;
                }

                .card .logo {
                    width: 90px;
                    height: 90px;
                    position: absolute;
                    top: -45px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 50%;
                }

                .card .heading {
                    font-family: Plus Jakarta Display;
                    margin: auto;
                    font-size: 26px;
                    font-weight: 500;
                    line-height: 30px;
                    letter-spacing: -0.025em;
                    text-align: center;
                    max-width: 243px;
                }

                .points {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                    margin-top: 40px;
                }

                .point {
                    display: flex;
                    gap: 12px;
                }

                .point-icon {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .point-content {
                    max-width: 305px;
                }

                .point-heading {
                    font-family: Plus Jakarta Display;
                    font-size: 19px;
                    font-weight: 500;
                    line-height: 22px;
                    letter-spacing: -0.025em;
                    margin-bottom: 5px;
                }

                .point-desc {
                    font-family: Plus Jakarta Display;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                    letter-spacing: -0.025em;
                }

                .others {
                    background: #dfdfdf;
                }

                .others .logo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #a39a9a;
                    color: #e8e8e8;
                }

                .others .heading {
                    color: #979797;
                }

                .others .point-icon {
                    background: #c4c4c4;
                    color: #777575;
                }

                .others .point-heading {
                    color: #828282;
                }

                .others .point-desc {
                    color: #a0a0a0;
                }

                .antern {
                    background: #e5e8ee;
                }

                .antern .logo {
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .antern .heading {
                    line-height: 114.5%;
                    color: #313131;
                }

                .antern .point-icon {
                    color: #37f337;
                    background: #fff;
                }

                .antern .point-heading {
                    line-height: 114.5%;
                    color: #525252;
                }

                .antern .point-desc {
                    line-height: 114.5%;
                    color: #636363;
                }

                @media screen and (max-width: 1300px) {
                    .line {
                        display: none;
                    }
                }

                @media screen and (max-width: 1100px) {
                    .container > .heading {
                        font-size: 30px;
                        line-height: 35px;
                        max-width: 600px;
                    }
                }

                @media screen and (max-width: 1060px) {
                    .card {
                        padding: 65px 40px;
                    }
                }

                @media screen and (max-width: 960px) {
                    .content {
                        flex-direction: column;
                        gap: 80px;
                    }
                }

                @media screen and (max-width: 800px) {
                    .container {
                        padding: 50px 40px;
                    }

                    .hand {
                        width: 100px;
                        height: 74px;
                        background-size: cover;
                        top: 50px;
                    }
                }

                @media screen and (max-width: 680px) {
                    .container > .heading {
                        max-width: 400px;
                    }

                    .hand {
                        top: 70px;
                    }
                }

                @media screen and (max-width: 600px) {
                    .card {
                        padding: 65px 30px;
                    }
                }

                @media screen and (max-width: 510px) {
                    .container > .heading {
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 27px;
                        margin-bottom: 74px;
                    }
                }

                @media screen and (max-width: 470px) {
                    .container {
                        padding: 18px 20px 54px 20px;
                    }

                    .container > .heading {
                        max-width: 230px;
                    }

                    .hand {
                        top: 40px;
                    }

                    .content {
                        flex-direction: column;
                        gap: 40px;
                    }

                    .card {
                        padding: 32px 30px;
                    }

                    .card .logo {
                        width: 45px;
                        height: 45px;
                        top: -22.5px;
                    }

                    .others .logo {
                        font-size: 9px;
                        font-weight: 500;
                        line-height: 10px;
                    }

                    .card .heading {
                        font-size: 13px;
                        line-height: 15px;
                    }

                    .points {
                        gap: 10px;
                        margin-top: 32px;
                    }

                    .point {
                        gap: 6px;
                    }

                    .point-icon {
                        width: 13px;
                        height: 13px;
                    }

                    .point-heading {
                        font-size: 10px;
                        line-height: 11px;
                    }

                    .point-desc {
                        font-size: 7px;
                        line-height: 8px;
                        max-width: 160px;
                    }
                }

                @media screen and (max-width: 370px) {
                    .hand {
                        top: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CurriculumDifference;
