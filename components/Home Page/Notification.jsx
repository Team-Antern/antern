import Link from "next/link";
import React from "react";

const Notification = ({ notification }) => {
    return (
        <div className="container">
            {notification.icon && <div className="icon" />}
            <div className="content">{notification.content}</div>
            {notification.link && (
                <Link href={`${notification.link.url}`} target="_blank">
                    <a className="link">{notification.link.text}</a>
                </Link>
            )}
            <style jsx>{`
                .container {
                    padding: 15px;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    text-align: center;
                }

                .content {
                    word-spacing: 2px;
                }

                .icon {
                    width: 30px;
                    height: 30px;
                    background: url("${notification.icon}") no-repeat;
                    background-size: cover;
                    flex-shrink: 0;
                }

                .link {
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    color: #4de89d;
                }
            `}</style>
        </div>
    );
};

export default Notification;
