import React from "react";

const VideoViewer = ({ videoId }) => {
    return (
        <div className=" flex mx-aut justify-center">
            <iframe
                className="h-[300px] md:h-[500px] w-full md:w-[900px] rounded-lg "
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoViewer;
