import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Wish = ({ name }) => {
  const audioUrl = "/audio/bad.mp3";

  return (
    <div className="wish-message">
      ❤ HAPPY BIRTHDAY <span className="highlight">{name.toUpperCase()}</span> ❤
      <div className="box-message">
        <p className="wish-message-pre">
          <i>
            "How could my day be bad <br />
            When I'm with you? <br />
            You're the only one who makes me laugh" <br />
          </i>
        </p>
        <p className="wish-message-p">
          Happy birthday to the girl who lights up my world like nobody else.
          May you never stop beaming and the peak is just the beginning. Love
          you lots, my Sweetheart. <br />
          Thank you for make me feel loved ❤
        </p>
      </div>
      <ReactAudioPlayer src={audioUrl} autoPlay controls />
    </div>
  );
};

export default Wish;
