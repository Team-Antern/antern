import Link from "next/link";
import React from "react";

const Button = React.forwardRef(({ onClick, style, link, children }, ref) => {
    const button = (
        <a onClick={onClick} style={style} className="button" ref={ref}>
            {children}
            <style jsx>{`
                .button {
                    padding: 20px 35px;
                    background: var(--primary-green);
                    font-family: "Poppins";
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 67.5%;
                    cursor: pointer;
                    border-radius: 5px;
                    text-align: center;
                }
            `}</style>
        </a>
    );
    return link ? <Link href={link}>{button}</Link> : button;
});

Button.displayName = "Button";

export default Button;
