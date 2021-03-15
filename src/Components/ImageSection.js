import React from 'react'
import about from '../img/about.jpg'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Edwin Oyunge</p>
                        <p>: 24</p>
                        <p>: Kenyan</p>
                        <p>: English, Kiswahili</p>
                        <p>: 25 Paramount St, PN4 8H9 Nairobi</p>
                        <p>: Kenya, USA</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>

            </div>
        </div>
    )
}

export default ImageSection
