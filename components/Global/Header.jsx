import React from "react";
import Button from "./Button";
import HamButton from "./HamButton";
import Link from "next/link";

const Header = ({ openHamMenu }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="hambutton" onClick={openHamMenu}>
                    <HamButton />
                </div>
                <Link href="/">
                    <a className="logo" />
                </Link>
                <div className="links">
                    <Link href="/">
                        <a className="link">Home</a>
                    </Link>
                    <Link href="/courses">
                        <a className="link">Courses</a>
                    </Link>
                    <Link href="/about">
                        <a className="link">About Us</a>
                    </Link>
                </div>
                <div className="getstarted">
                    <Link href="/courses">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .container {
                    background: #000;
                    color: #fff;
                    box-shadow: 0px 4px 36px rgba(255, 255, 255, 0.12);
                    padding: 0px 34px;
                    position: static;
                    top: 0px;
                }

                .content {
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1180px;
                    margin: auto;
                }

                .hambutton {
                    position: absolute;
                    left: 34px;
                    display: none;
                }

                .logo {
                    width: 138px;
                    background: url("https://ik.imagekit.io/jprbxp6m21m/logo_q7BqYXRVc.svg")
                        no-repeat;
                    background-size: 100%;
                    height: 34px;
                    cursor: pointer;
                }

                .links {
                    display: flex;
                    gap: 24px;
                }

                .link {
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 17px;
                    color: #f1f1f1;
                    cursor: pointer;
                }

                @media screen and (max-width: 1130px) {
                    .search {
                        display: none;
                    }
                }

                @media screen and (max-width: 820px) {
                    .hambutton {
                        display: block;
                    }

                    .container {
                        background: #fff;
                    }

                    .content {
                        height: 60px;
                        justify-content: center;
                    }

                    .logo {
                        width: 106px;
                        background: url("https://ik.imagekit.io/jprbxp6m21m/logo-mobile_m_ixyzd36.svg")
                            no-repeat;
                        background-size: 100%;
                        background-position: center;
                    }

                    .links,
                    .getstarted {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
