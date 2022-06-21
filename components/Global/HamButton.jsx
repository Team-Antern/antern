import React from "react";

const HamButton = () => {
    return (
        <div className="ham-button">
            <div className="ham-line" />
            <div className="ham-short-line" />
            <div className="ham-line" />
            <style jsx>{`
                .ham-button {
                    display: flex;
                    flex-direction: column;
                    gap: 3.33px;
                    cursor: pointer;
                }

                .ham-button > div {
                    background: #bebebe;
                    height: 1.5px;
                }

                .ham-line {
                    width: 16px;
                }

                .ham-short-line {
                    width: 10px;
                }
            `}</style>
        </div>
    );
};

export default HamButton;
