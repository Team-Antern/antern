import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const NotJustTakeOurWords = () => {
    const [selectedCard, setSelectedCard] = useState(0);
    const [isScreenLarge, setIsScreenLarge] = useState(true);
    const handleResize = () => {
        setIsScreenLarge(window.innerWidth > 550);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const reviews = [
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/shreya_QDhngDvMv.webp",
            name: "Shreya Sethi",
            content:
                "Priyanshu's course was the foundation for me as that was the first tutorial I followed which made me comfortable with Unity's platform and C# scripting. You made me understand all the types of immersive reality and use cases of them and also made me curious to search more about them.Also at the end with you I made my first 3 projects in augmented reality and really excite me, I remember I wasn't good with navigation at the beginning but as I made my projects I get to get more used to with the platform which I liked the most about this course. I had recommended all my friends who was starting with immersive reality to watch your course.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/naseer_hZVe20R8D.webp",
            name: "Naseer Aijaz",
            content:
                "Ayush’s first class that I attended was thrilling! I would say that Ayush is young only by age :-). I was amazed with his maturity for life in general, his confidence level in teaching, and the knowledge he acquired in the ML domain. In my 21 years of professional career, I have done numerous training courses in India and outside, but the specialty of the course CS001 taught by Ayush is his never ending passion to teach students until they clearly understand the concepts.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/amankhan_hMtRrufFA.webp",
            name: "Mohd. Aman Khan",
            content:
                "I am a student who doesn't have any knowledge about augumented reality but I have planned to make my minor project based on ar/vr.. This course had help me a lot about learning the ar/vr with real time projects Yess I have watched the followed the entire course and made some amazing projects using c# and Unity also, the fun part of this course was making different differnt types of face filters and deploying them And I didn't thought that we can make this much wonderful projects with the help of c# Thank you for your wonderful course",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/vishruth_O2dCLHUpH.webp",
            name: "Vishruth Bharadwaj",
            content:
                "It was awesome class with one to one interaction   all doubts cleared. One of the top notch   in guiding from scratch in Machine   with deep dive into algorithms and   end to end projects in live session.   session with presentations,notes helped me   lot to clear many doubts in ML,Gans,NLP.  -off!",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/srushti_nJcOPY3O1.webp",
            name: "Srushti Mande",
            content:
                "This course is really amazing. Especially for someone who is just starting in the field of XR development. This course teaches all about the basics of unity, marker based AR as well SparkAR. They also have projects to practice which helps in giving the hands-on experience. I would really recommend this course to everyone out there who is looking for something which will get them started in XR. This course is and can be the first and a crucial step you need to take towards your career in the XR field.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/defaultboy_mSHDHBgN5.svg",
            name: "Ankit Kumar Mishra",
            content:
                "Ayush is a great tutor. He explained the concepts so well that I understood those concepts also which seems like a nightmare for me.The best thing about Ayush is he mainly focuses on project based learning. He explained the concepts by making projects and the explainations are always to the point. He can make you love with the topic.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/dhruvbadaya_ykIZ-XBLq.webp",
            name: "Dhruv Badaya",
            content:
                "Priyanshu's course was one of the best courses I have taken by far. Everything from videos to the delivery is exceptional. It has helped me tremendously in getting started with AR Development- I will definitely recommend it to anyone who sees their future in AR/VR.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/archanashastri_XlMORbxCbe.webp",
            name: "Archana Shastri",
            content:
                "He made me really think about how I would come up with the answer.I liked how he was straight forward and to the point. Great tutor that helped me so much! He is one of those rare individuals who is able to create content that students enjoy so much they often don’t realize how much they are learning. He has an unbeatable formula for expediting learning and bringing success in the classroom. His great ideas are inspirational! His enthusiasm is contagious! His teaching style lets learners at any age learn in a relaxed and fun environment. The way he gives his lessons is unique. Ayush’s learners never feel distracted while learning from him. His classes are attractive, engaging, and enjoyable.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/defaultboy_mSHDHBgN5.svg",
            name: "Muhammad Bilal",
            content:
                "Priyanshu your course is really good. I was worried about how to learn AR. I was scrolling on youtube and your videos came in front of me. I have learnt many things from your course.",
        },
        {
            pic: "https://ik.imagekit.io/jprbxp6m21m/defaultboy_mSHDHBgN5.svg",
            name: "Amit Athanikar",
            content:
                "The most comprehensive course out there on the digital platform,the best part is it goes indepth which many other courses don't provide..if you want to excel in career take this course",
        },
    ];
    const forward = () => {
        if (selectedCard !== reviews.length - 1) {
            setSelectedCard(++selectedCard);
        }
    };
    const backward = () => {
        if (selectedCard !== 0) {
            setSelectedCard(--selectedCard);
        }
    };
    return (
        <div className="container">
            <div className="heading">Not Just Take Our Words</div>
            <div className="content">
                <div
                    className="review-cards"
                    style={{
                        left: `-${
                            (isScreenLarge ? 450 : 294) * selectedCard
                        }px`,
                    }}
                >
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
                <div className="controls">
                    <div className="control" onClick={backward}>
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="control" onClick={forward}>
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .container {
                        padding: 110px 0px 74px 0px;
                        background: #e8e8e8;
                        overflow: hidden;
                    }

                    .heading {
                        color: #00983d;
                        text-align: center;
                        font-family: Plus Jakarta Sans;
                        font-size: 35px;
                        font-weight: 600;
                        line-height: 24px;
                        letter-spacing: -0.02em;
                        margin-bottom: 110px;
                    }

                    .content {
                        margin-left: 176px;
                    }

                    .review-cards {
                        display: flex;
                        gap: 30px;
                        position: relative;
                        transition: 0.5s left;
                    }

                    .controls {
                        margin-top: 56px;
                        display: flex;
                        gap: 6px;
                    }

                    .control {
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #39415d;
                        background: #fff;
                        border-radius: 50%;
                        font-size: 24px;
                        cursor: pointer;
                    }

                    @media screen and (max-width: 850px) {
                        .content {
                            margin-left: 60px;
                        }
                    }

                    @media screen and (max-width: 620px) {
                        .content {
                            margin-left: 30px;
                        }
                    }

                    @media screen and (max-width: 550px) {
                        .container {
                            padding: 50px 0px 42px 0px;
                            background: #e8e8e8;
                            overflow: hidden;
                        }

                        .heading {
                            font-size: 20px;
                            line-height: 14px;
                            letter-spacing: -0.035em;
                            margin-bottom: 50px;
                        }

                        .controls {
                            margin-top: 35px;
                        }

                        .control {
                            width: 20px;
                            height: 20px;
                            font-size: 10px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default NotJustTakeOurWords;
