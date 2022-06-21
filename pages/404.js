import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Antern - 404</title>
                <meta
                    name="description"
                    content="We can’t find the page that you’re looking for!"
                />
                <meta property="og:title" content="Antern - 404" />
                <meta
                    property="og:description"
                    content="We can’t find the page that you’re looking for!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/ogimage/home.png" />
            </Head>
            <div className="container">
                <div className="logo">
                    <Image
                        src="https://ik.imagekit.io/jprbxp6m21m/404/logo_Vqovvroys.svg"
                        alt="Antern Logo"
                        layout="fill"
                    />
                </div>
                <div className="content">
                    <div className="notfound-art">
                        <Image
                            src="https://ik.imagekit.io/jprbxp6m21m/404/404_RkM81J_GI.svg"
                            alt="404 Not Found"
                            layout="fill"
                        />
                    </div>
                    <div className="notfound-text">
                        We can’t find the page that you’re looking for
                    </div>
                    <Link href="/">
                        <a className="back-to-home">
                            back to home
                            <div className="back-arrow">
                                <AiOutlineArrowLeft color="#fff" />
                            </div>
                        </a>
                    </Link>
                </div>
                <style jsx>
                    {`
                        .container {
                            min-height: 100vh;
                            background: #bcf4ae;
                            display: flex;
                            justify-content: center;
                            position: relative;
                        }

                        .logo {
                            width: 138px;
                            height: 34px;
                            position: absolute;
                            top: 50px;
                            left: 50px;
                        }

                        .content {
                            width: 100%;
                            padding: 0px 30px;
                            text-align: center;
                            font-family: "Poppins";
                            font-weight: 400;
                        }

                        .notfound-art {
                            position: relative;
                            width: 100%;
                            max-width: 600px;
                            height: 500px;
                            margin: auto;
                        }

                        .notfound-text {
                            font-weight: 400;
                            font-size: 26.419px;
                            line-height: 31px;
                            margin-top: 25px;
                            text-align: center;
                        }

                        .back-to-home {
                            background: #fff;
                            border-radius: 38px;
                            padding: 15px 27px 15px 52px;
                            margin-top: 80px;
                            text-transform: uppercase;
                            font-size: 17.23px;
                            line-height: 20px;
                            letter-spacing: -0.04em;
                            color: #4ad23f;
                            position: relative;
                        }

                        .back-arrow {
                            position: absolute;
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background: #50d145;
                            top: 50%;
                            left: 7px;
                            transform: translateY(-50%);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default NotFound;
