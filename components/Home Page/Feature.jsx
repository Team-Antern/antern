import React from "react";

const Feature = ({ feature }) => {
    return (
        <div
            className="feature"
            style={{
                backgroundImage: `url(${feature["background-blur"]})`,
            }}
        >
            <div
                className="feature-title"
                style={{
                    background: feature.titleBg,
                }}
            >
                {feature.title}
            </div>
            <div
                className="feature-icon"
                style={{
                    backgroundImage: `url(${feature.icon})`,
                }}
            />
            <style jsx>{`
                .feature {
                    width: 290px;
                    height: 384px;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: 7px;
                    position: relative;
                }

                .feature-title {
                    position: absolute;
                    bottom: 0px;
                    border-radius: 0px 0px 7px 7px;
                    width: 100%;
                    display: block;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-family: "Plus Jakarta Sans";
                    font-weight: 500;
                    font-size: 20px;
                    letter-spacing: -0.035em;
                    word-spacing: 3px;
                    color: #ffffff;
                    z-index: 1;
                    padding: 0px 45px;
                }

                .feature-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                }
            `}</style>
        </div>
    );
};

export default Feature;
