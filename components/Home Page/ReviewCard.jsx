import React from "react";

const ReviewCard = ({ review }) => {
    return (
        <div className="container">
            <div
                className="review-userprofile"
                style={{ backgroundImage: `url("${review.pic}")` }}
            />
            <div className="review">{review.content}</div>
            <div className="review-username">{review.name}</div>
            <div className="bottom" />
            <style jsx>{`
                .container {
                    flex-shrink: 0;
                    font-family: Poppins;
                    padding: 50px 38px 30px;
                    position: relative;
                    background: #fff;
                    max-width: 420px;
                    display: flex;
                    flex-direction: column;
                }

                .review {
                    font-weight: 500;
                    line-height: 20px;
                    margin-bottom: 32px;
                    flex-grow: 1;
                }

                .review-user {
                    font-size: 12px;
                    line-height: 15px;
                }

                .review-username {
                    font-weight: 500;
                }

                .review-userprofession {
                    font-weight: 400;
                }

                .bottom {
                    position: absolute;
                    display: block;
                    bottom: 0px;
                    left: 0px;
                    background: #46c162;
                    width: 100%;
                    height: 7px;
                }

                .review-userprofile {
                    width: 62px;
                    height: 62px;
                    position: absolute;
                    top: -31px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 50%;
                    background-size: cover;
                }

                @media screen and (max-width: 550px) {
                    .container {
                        width: 264px;
                        padding: 34px 24px 20px;
                    }

                    .review {
                        margin-bottom: 22px;
                        font-size: 10px;
                        font-weight: 500;
                        line-height: 12px;
                    }

                    .review-username {
                        font-size: 8px;
                        line-height: 122%;
                        font-weight: 500;
                    }

                    .bottom {
                        position: absolute;
                        display: block;
                        bottom: 0px;
                        left: 0px;
                        background: #46c162;
                        width: 100%;
                        height: 7px;
                    }

                    .review-userprofile {
                        width: 40px;
                        height: 40px;
                        top: -20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ReviewCard;
