import React from 'react'
const Profile = ({}) => {
    return (
        <div className="profile">
            <div className="profile-pic"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/20250/cartoon-tadpole-clipart-md.png" alt="profile picture"/></div>
            <div className="profile-username">Username: humaidk2</div>
            <div className="profile-name">Name: humaid</div>
            <style jsx>
                {`
                    .profile {
                        flex: 1 1 0;
                        background: green;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        
                    }
                    .profile-pic {
                        border-radius: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    .profile-pic img{
                        max-width: 100%;
                        max-height: 100%;
                        height: 200px;
                        width: 200px;
                    }
                    .profile-username {
                        height: 70px;
                        line-height: 70px;
                    }
                    .profile-name {
                        height: 70px;
                        line-height: 70px;
                    }
                `}
            </style>
        </div>
    )
}
export default Profile