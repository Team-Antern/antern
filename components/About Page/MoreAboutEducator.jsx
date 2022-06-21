import React, { useEffect } from "react";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const MoreAboutEducator = ({ educator, close }) => {
    const getSocialIcon = (name) => {
        if (name === "instagram") return <AiOutlineInstagram />;
        else if (name === "linkedin") return <AiOutlineLinkedin />;
        else if (name === "youtube") return <AiOutlineYoutube />;
        else if (name === "twitter") return <FiTwitter />;
        else if (name === "github") return <FiGithub />;
        else if (name === "website") return <BsGlobe />;
    };
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);
    return (
        <div className="container">
            <div className="content">
                <div className="close" onClick={close}>
                    <IoMdClose color="#fff" />
                </div>
                <div className="banner">
                    <div
                        className="educator-pic"
                        style={{ backgroundImage: `url("${educator.pic}")` }}
                    />
                </div>
                <div className="educator-details">
                    <div className="name">{educator.name}</div>
                    <div className="position">{educator.position}</div>
                    <div className="educator-socials">
                        {educator.socials.map((social, index) => (
                            <a
                                href={social.profileLink}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                            >
                                {getSocialIcon(social.name)}
                            </a>
                        ))}
                    </div>
                    <div className="educator-desc">
                        {educator.desc.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    position: fixed;
                    top: 0px;
                    left: 0px;
                    background: rgba(0, 0, 0, 0.5);
                    width: 100%;
                    height: 100vh;
                    z-index: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Plus Jakarta Display";
                    letter-spacing: -0.02em;
                }

                .content {
                    background: #fff;
                    max-width: 760px;
                    margin: 0px 20px;
                    width: 100%;
                    position: relative;
                    max-height: 80vh;
                    overflow: auto;
                    border-radius: 20px;
                }

                .close {
                    position: absolute;
                    top: 13px;
                    left: 22px;
                    background: rgba(255, 255, 255, 0.53);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    z-index: 1;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                }

                .educator-details {
                    padding: 70px 40px 44px 40px;
                    text-align: center;
                }

                .banner {
                    height: 115px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/aboutus/topbanner_ASk1hhbi3.webp")
                        no-repeat;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .educator-pic {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    bottom: -50px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #97efab;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .name {
                    font-weight: 500;
                    font-size: 22.5135px;
                    color: #6c6c6c;
                }

                .position {
                    font-weight: 400;
                    font-size: 14.5676px;
                    color: #868686;
                }

                .educator-socials {
                    margin: 10px 0px 25px 0px;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    color: #1ae770;
                    font-size: 22px;
                }

                .educator-desc {
                    text-align: left;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                }
            `}</style>
        </div>
    );
};

export default MoreAboutEducator;
