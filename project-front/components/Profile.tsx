import React from "react"
const Profile = ({ username, name }) => {
    return (
        <div className="profile">
            <div className="profile-pic">
                <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/20250/cartoon-tadpole-clipart-md.png"
                    alt="profile picture"
                />
            </div>
            <div className="profile-username">
                <div className="field-title">Username:</div>
                <div className="field-value">{username}</div>
            </div>
            <div className="profile-name">
                <div className="field-title">Name:</div>
                <div className="field-value">{name}</div>
            </div>
            <style jsx>
                {`
                    .profile {
                        flex: 1 1 0;
                        background: #f9f7f7;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-right: 1px solid rgba(17, 45, 78, 0.15);

                        padding-top: 25px;
                    }
                    .profile-pic {
                        border-radius: 100%;
                        display: flex;
                        justify-content: center;
                        padding: 15px;
                        border: 1px solid black;
                        overflow: hidden;
                    }
                    .profile-pic img {
                        max-width: 100%;
                        max-height: 100%;
                        height: 150px;
                        width: 150px;
                    }
                    .profile-username {
                        width: 100%;
                        height: 70px;
                        display: flex;
                        align-items: center;
                    }
                    .field-title {
                        padding-left: 15%;
                        flex: 1 1 0;
                    }

                    .field-value {
                        flex: 1 1 0;
                        text-align: left;
                    }
                    .profile-name {
                        width: 100%;
                        height: 70px;
                        line-height: 70px;
                        display: flex;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}
export default Profile
