import React from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

const HamMenu = React.forwardRef(({ closeHamMenu }, hammenu) => {
    const { pathname } = useRouter();
    const links = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "Courses",
            href: "/courses",
        },
        {
            text: "About Us",
            href: "/about",
        },
    ];
    return (
        <div ref={hammenu} className="container">
            <div className="logo" />
            <div className="links">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <a
                            className={
                                pathname === link.href ? "active-link" : "link"
                            }
                            onClick={closeHamMenu}
                        >
                            {link.text}
                        </a>
                    </Link>
                ))}
            </div>
            <div className="close" onClick={closeHamMenu}>
                <GrClose />
            </div>
            <style jsx>{`
                .container {
                    height: 0%;
                    overflow-y: auto;
                    position: fixed;
                    width: 100%;
                    top: 0px;
                    left: 0px;
                    z-index: 3;
                    transition: 0.5s all;
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(10px);
                }

                .logo {
                    background: url("/assets/logo-mobile.svg") no-repeat;
                    background-size: cover;
                    background-position: center;
                    width: 106px;
                    height: 26px;
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .links {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    font-family: "Plus Jakarta Display";
                    font-weight: 400;
                    font-size: 30px;
                    color: rgba(56, 56, 56, 0.68);
                    text-align: center;
                    align-items: center;
                }

                .active-link {
                    color: #2bdb92;
                }

                .close {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 70px;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #73f0a5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                    color: #409239;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
});

HamMenu.displayName = "HamMenu";

export default HamMenu;
