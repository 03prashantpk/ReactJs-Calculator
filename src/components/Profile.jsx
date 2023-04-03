import React from "react";
const Profile = ({isOn}) => {
    return(
        <div className="profile-outer" hidden={!isOn}>
            <img src="https://avatars.githubusercontent.com/u/43730425?v=4" alt="Avatar" className="avatar" />
            <p></p>
            <p></p>
            <ul className="social-list">
                <li><img onClick={() => {window.open('https://www.linkedin.com/in/03prashantpk/', '_blank')}} src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt="button" /></li>
                <li><img onClick={() => {window.open('https://www.instagram.com/prashantpkumar/', '_blank')}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="button" /></li>
                <li><img onClick={() => {window.open('https://github.com/03prashantpk', '_blank')}} src="https://www.kindpng.com/picc/m/694-6943896_github-logo-png-github-icon-png-transparent-png.png" alt="button" /></li>
            </ul>
            <button onClick={() => {window.open('https://enally.in/contact', '_blank')}}></button>
        </div>

    )
};

export default Profile;