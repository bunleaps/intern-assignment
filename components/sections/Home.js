import React, { useState } from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";

const HomeSectionStyled = styled.section`
  background: #dabd90;
  width: 100vw;
  height: 180vh;

  .video {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .play {
      background: url("https://www.unfpa.org/modules/custom/unfpa_global_pieceofme/templates/asset/image/abida/video.jpg");
      background-size: cover;
      flex: 1;
      justify-content: center;
      align-items: center;
      position: absolute;
      border: none;
      width: 730px;
      height: 400px;
      z-index: 5;
      cursor: pointer;

      .iconPlay {
        font-size: 150%;
        color: white;
        border 3px solid white;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
      }
    }

    iframe {
      position: absolute;
      width: 730px;
      height: 400px;
      z-index: 6;
    }
  }

  .quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h1 {
      font-size: 70px;
      font-weight: 100;
      margin-bottom: 20px;
      font-family: Playfair Display, serif;
    }
  }

`;

function Home() {
  const [playVid, setPlayVid] = useState(null);

  return (
    <HomeSectionStyled>
      <section className="video">
        <button
          className="play"
          onClick={() => {
            setPlayVid(
              <iframe
                title="YouTube video player"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/u-QkD-l7ByQ??autoplay=1&mute=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            );
          }}
        >
          <BsFillPlayFill className="iconPlay" />
        </button>
        {playVid}
      </section>
      <section className="quotes">
        <div>
          <h1>
            “My flesh may have been
            <br /> taken away, but I can <br /> never give away my heart.”
          </h1>
          <span>Abida</span>
        </div>
      </section>
    </HomeSectionStyled>
  );
}

export default Home;
