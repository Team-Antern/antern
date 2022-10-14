import React from "react";

const OurTeam = ({ showMoreAboutEducator }) => {
    const teamMembers = [
        {
            name: "Tushar Vaswani",
            position: "Co-Founder & Engineering Manager",
            pic: "https://ik.imagekit.io/jprbxp6m21m/aboutus/instructors/tusharvaswani.png",
            socials: [
                { name: "instagram", profileLink: "https://www.google.com/" },
                { name: "linkedin", profileLink: "https://www.google.com/" },
                { name: "youtube", profileLink: "https://www.google.com/" },
                { name: "twitter", profileLink: "https://www.google.com/" },
                { name: "github", profileLink: "https://www.google.com/" },
                { name: "website", profileLink: "https://www.google.com/" },
            ],
            desc: [
                "He is a full stack developer with a lot of experience in programming and full stack development. He is a co-founder and engineering head @ Antern where he and his team members are creating a revolution in ed-tech industry by providing quality and very cheap price courses. He is also handling the Full stack development department there.",
                "He is also a Full stack developer @ U-SMART. He has worked at various other companies.",
            ],
        },
        {
            name: "Ayush Singh",
            position: "Co-Founder & CEO",
            pic: "https://ik.imagekit.io/jprbxp6m21m/aboutus/instructors/ayushsingh_D8HZmkf1X.webp",
            socials: [
                {
                    name: "instagram",
                    profileLink: "https://www.instagram.com/ai.ayush_singh/",
                },
                {
                    name: "linkedin",
                    profileLink: "https://www.linkedin.com/in/ayush-singh488/",
                },
                {
                    name: "twitter",
                    profileLink: "https://twitter.com/AyushSi69507942",
                },
                { name: "github", profileLink: "https://github.com/ayush714" },
            ],
            desc: [
                "Ayush Singh is currently working as Data Scientist @ Replayed, He has worked as MLOps Engineer @ Zenml, He has also worked as Data Scientist @ Artifact and also worked as Machine Learning & Deep Learning Engineers roles. He is Co-Founder & CEO @ Antern. He is one of the Youngest working Data Scientist and MLE in the world. He has several years of experience working in this field. He also taught more than 1000s of students, Ayush Taught ML001 where he helped thousands of students to learn the fundamentals and he also helped lots of peoples in getting their job through guidance and teaching. ",
                "His Machine Learning course is recommended by MIT CS and AI Labs via Twitter and He is regarded as Teenage Tech RockStar and India’s youngest working data scientist.",
                "He have several years of experience in teaching and curriculum designing, He taught several courses such as ML001, ML002, CS001, CS003 and etc. His some of the students are in Google, IBM and other MNC's.",
            ],
        },
        {
            name: "Priyanshu Bhattacharjee",
            position: "Co-Founder & CTO",
            pic: "https://ik.imagekit.io/jprbxp6m21m/aboutus/instructors/priyanshu_UNLpkYQfi.webp",
            socials: [
                {
                    name: "instagram",
                    profileLink: "https://www.instagram.com/priyanshucoderx/",
                },
                {
                    name: "linkedin",
                    profileLink:
                        "https://www.linkedin.com/in/priyanshu-bhattacharjee/",
                },
                {
                    name: "youtube",
                    profileLink: "https://www.youtube.com/c/CodedRealityXR",
                },
                {
                    name: "twitter",
                    profileLink: "https://twitter.com/priyans17010353",
                },
                {
                    name: "github",
                    profileLink: "https://github.com/Priyanshu-CODERX",
                },
            ],
            desc: [
                "Priyanshu Bhattacharjee is one of the youngest Extended Reality Engineer from India, he has worked with multiple startups and have taught at different colleges and universities about Augmented and Virtual Reality. He is currently working on building Antern, where he and his team are working on several industry level comprehensive courses and revolutionizing education sector with Augmented and Virtual Reality.",
                "He has taught AR001: Augmented Reality For Everyone Course which is a beginner level Augmented Reality Development course and has got over 100K+ views and has helped a lot of people to get into Augmented Reality Development.",
            ],
        },
    ];
    return (
        <div className="container">
            <div className="heading-desc">
                <div className="heading">
                    <span>Meet our </span>
                    <span>Leadership Team</span>
                </div>
                <div className="desc">
                    Out talented team of executives have come together with one
                    goal: to help students, companies for the next generation of
                    technical jobs.
                </div>
            </div>
            <div className="content">
                {teamMembers.map((teamMember, index) => (
                    <div
                        key={index}
                        className="team-member"
                        onClick={() => showMoreAboutEducator(teamMember)}
                    >
                        <div
                            className="team-member-pic"
                            style={{
                                backgroundImage: `url("${teamMember.pic}")`,
                            }}
                        />
                        <div className="team-member-info">
                            <div className="team-member-name">
                                {teamMember.name}
                            </div>
                            <div className="team-member-position">
                                {teamMember.position}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container {
                    text-align: center;
                    font-family: "Plus Jakarta Display";
                    letter-spacing: -0.015em;
                    padding: 0px 40px;
                }

                .heading-desc {
                    max-width: 714px;
                    margin: auto;
                }

                .heading {
                    font-weight: 500;
                    font-size: 40px;
                }

                .heading span:nth-child(2) {
                    color: #46c162;
                }

                .desc {
                    font-weight: 400;
                    font-size: 23px;
                    line-height: 134.5%;
                    color: #6a6a6a;
                    margin-top: 10px;
                }

                .content {
                    margin: 44px auto;
                    margin-bottom: 95px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 60px 50px;
                    justify-content: center;
                    max-width: 1200px;
                }

                .team-member {
                    width: 229px;
                    height: 287px;
                    border-radius: 15px;
                    position: relative;
                    background: #97efab;
                    cursor: pointer;
                    filter: drop-shadow(
                        0px 1.38801px 9.71609px rgba(151, 239, 171, 0.41)
                    );
                }

                .team-member-info {
                    position: absolute;
                    width: 100%;
                    height: 70px;
                    background: #303030;
                    bottom: 0px;
                    border-radius: 0px 0px 15px 15px;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    gap: 2px;
                    letter-spacing: -0.02em;
                    word-spacing: 4px;
                }

                .team-member-name {
                    font-weight: 500;
                    font-size: 17px;
                    color: #f2f2f2;
                }

                .team-member-position {
                    font-weight: 400;
                    font-size: 11px;
                    color: #c7c7c7;
                }

                .team-member-pic {
                    position: absolute;
                    width: 100%;
                    height: calc(100% - 70px);
                    bottom: 70px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }

                @media screen and (max-width: 540px) {
                    .content {
                        margin: 30px auto;
                        gap: 40px 50px;
                    }

                    .heading {
                        font-size: 25px;
                        line-height: 25px;
                    }

                    .desc {
                        font-size: 15px;
                        line-height: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default OurTeam;
