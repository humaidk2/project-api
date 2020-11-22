import React from 'react'
const Nav = ({username}) => {
    return (
        <nav className="navigation">
            <div>
                {`Hi, ${username} , Welcome to my website`}
            </div>
            <style jsx>
                {`
                    .navigation {
                        height: 60px;
                        background: black;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        width: 100%;
                    }
                `}
            </style>
        </nav>
    )
}
export default Nav