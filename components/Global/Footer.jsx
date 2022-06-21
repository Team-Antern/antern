import React from "react";
import {
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
    const socials = [
        {
            url: "https://instagram.com",
            logo: <AiOutlineInstagram />,
        },
        {
            url: "https://twitter.com/anternteams",
            logo: <RiTwitterLine />,
        },
        {
            url: "https://www.youtube.com/channel/UCIpbqdvNWx50J79KAG1Q21A",
            logo: <AiOutlineYoutube />,
        },
        {
            url: "https://www.linkedin.com/company/team-antern/",
            logo: <AiFillLinkedin />,
        },
    ];
    const linkCategories = [
        {
            heading: "company",
            links: [
                { url: "/", text: "Home" },
                { url: "/courses", text: "Courses" },
                { url: "/about", text: "About Us" },
                { url: "/termsandconditions", text: "Terms & Conditions" },
            ],
        },
        {
            heading: "courses",
            links: [
                { url: "/course/1dd6f3ee32cb298d28cf", text: "ML001" },
                { url: "/course/124ad5f9602544d0bafd", text: "XR001" },
            ],
        },
    ];
    return (
        <div className="container">
            <div className="content">
                <Link href="/">
                    <a className="logo" />
                </Link>
                <div className="link-categories">
                    {linkCategories.map((linkCatergory, index) => {
                        return (
                            <div key={index} className="link-category">
                                <div className="category-heading">
                                    {linkCatergory.heading}
                                </div>
                                <div className="category-links">
                                    {linkCatergory.links.map((link, index) => {
                                        return (
                                            <Link key={index} href={link.url}>
                                                <a className="link">
                                                    {link.text}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="socials">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="social"
                        >
                            {social.logo}
                        </a>
                    ))}
                </div>
            </div>
            <div className="copyright">&copy; Copyright Antern 2022</div>
            <style jsx>{`
                .container {
                    background: #000;
                    color: #fff;
                    box-shadow: 0px 4px 36px rgba(255, 255, 255, 0.12);
                    padding: 80px 40px 25px;
                }

                .content {
                    max-width: 1500px;
                    margin: auto;
                    display: flex;
                    gap: 100px;
                    justify-content: center;
                }

                .logo {
                    width: 115px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/logo_q7BqYXRVc.svg")
                        no-repeat;
                    background-size: cover;
                    height: 28px;
                }

                .socials {
                    display: flex;
                    gap: 11px;
                }

                .social {
                    background: #726d6d;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .social svg {
                    font-size: 20px;
                }

                .copyright {
                    text-align: center;
                    margin-top: 50px;
                    font-family: "Poppins";
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 67.5%;
                }

                .link-categories {
                    display: flex;
                    justify-content: space-between;
                    gap: 68px;
                }

                .link-category {
                    font-family: "Poppins";
                }

                .category-heading {
                    font-weight: 400;
                    font-size: 13px;
                    color: #dbdbdb;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }

                .category-links {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-weight: 500;
                    font-size: 16px;
                    color: #fff;
                }

                @media screen and (max-width: 1120px) {
                    .content {
                        gap: 80px;
                    }

                    .link-categories {
                        gap: 40px;
                    }
                }

                @media screen and (max-width: 1020px) {
                    .content {
                        flex-direction: column;
                    }

                    .socials {
                        justify-content: center;
                    }
                }

                @media screen and (max-width: 800px) {
                    .container {
                        padding: 80px 40px 25px;
                    }
                }

                @media screen and (max-width: 580px) {
                    .content {
                        gap: 40px;
                    }

                    .link-categories {
                        flex-direction: column;
                    }

                    .logo {
                        order: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Footer;
