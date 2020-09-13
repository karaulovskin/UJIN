import React from 'react';
import classes from './MainVideo.module.css';
import Video from "../../video.mp4";

const MainVideo = props => {
    return (
        <div className={classes.MainVideo}>
            <video
                src={Video}
                preload
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default MainVideo