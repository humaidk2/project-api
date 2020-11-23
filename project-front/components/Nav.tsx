import React from "react"
const Nav = ({ username }) => {
    return (
        <nav className="navigation">
            <div>{`Hi, Welcome to ${username}'s page`}</div>
            <style jsx>
                {`
                    .navigation {
                        height: 60px;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        width: 100%;
                        color: #f9f7f7;
                        background: #112d4e;
                        border-bottom: 0.2px solid rgba(17, 45, 78, 0.2);
                        box-shadow: 0 20px 20px rgba(17, 45, 78, 0.1);
                    }
                `}
            </style>
        </nav>
    )
}
export default Nav
