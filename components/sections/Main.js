import React from "react";
import styled from "styled-components";
import { BsShare } from "react-icons/bs";

const MainSectionStyled = styled.section`

  .image1 {
    width: 100vw;
    height: 350px;
    background: url("https://www.unfpa.org/modules/custom/unfpa_global_pieceofme/templates/asset/image/abida/description-image.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }

  .info {
    background: white;
    width: 100%;
    padding: 0 150px;

    .components {
      padding: 80px 0;
      display: flex;

      .quotes {
        width: 50%;

        h1 {
          margin-left: 50px;
          font-size: 40px;
          font-family: Playfair Display, serif;
        }

        button {
          margin-left: 50px;
          background: transparent;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;

          .icon {
            font-size: 150%;
            color: #dabd90;
            border 3px solid #dabd90;
            width: 60px;
            height: 60px;
            padding: 15px;
            border-radius: 50%;
          }

          span {
            margin-left: 10px;
            font-family: Lato, sans-serif;
          }
        }
      }

      .para {
        width: 50%;
        padding-top: 20px;

        p {
            font-family: Lato, sans-serif;
            font-size: 14px;
            line-height: 20px;
            font-style: italic;

            span {
                font-weight: bold;
            }
        }
      }
    }
  }

  .leaf {
    width: 100%;
    height: 100vh;
    padding: 0 150px;
    background: url("https://www.unfpa.org/modules/custom/unfpa_global_pieceofme/templates/asset/image/background_leaves.jpg");
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    align-items: center;

    .info-leaf {
        display: flex;
        color: white;

        p {
            margin-left: 50px;
            width: 75%;
            font-family: Lato, sans-serif;
            font-size: 14px;
            line-height: 20px;

            span {
                font-weight: bold;
            }
        }

        .para-head {
            width: 50%;
            h3 {
                margin-left: 50px;
                font-family: Playfair Display, serif;
                font-size: 28px;
                line-height: 34px;
            }

        }

        .para {
            width: 50%;
        }
    }
  }

  .callout {
    width: 100vw;
    height: 100vh;

    .bgVideo {
      width: 100%;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        z-index: 1;
    }

    .callout-comp {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .callout-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Nato, sans-serif;
        z-index: 5;
        color: white;

        h1 {
            font-size: 63px;
            font-family: Playfair Display, serif;
            line-height: 76px;
            margin: 0 0 20px 0;
        }

        span {
            margin: 0 0 20px 0;
        }

        button {
            display: inline-block;
            background: #fff;
            border: 1px solid #fff;
            padding: 16px 30px;
            border-radius: 40px;
            margin-right: 15px;

            span {
                color: #000;
                font-size: 11px;
                font-family: Roboto, sans-serif;
            }
        }

        .pl {
            background: transparent;

            span {
                color: white;
            }
        }
    }
  }
`;

function Main() {
  return (
    <MainSectionStyled>
      <section className="image1"></section>
      <section className="info">
        <div className="components">
          <div className="quotes">
            <h1>
              “My main job is to <br /> teach about the harms <br />
              of FGM.”
            </h1>
            <button>
              <BsShare className="icon" />
              <span>SHARE ABIDA&apos;S STORY</span>
            </button>
          </div>
          <div className="para">
            <p>
              I inform people about my condition. I always had urinary problems.
              When I got my monthly period it was very painful. I used to feel
              like throwing up. I used to vomit, and it was a very terrible time
              for me. Then I gave birth, and to this day I still suffer from the
              pain.
            </p>
            <p>
              <span className="bold">
                I used to ask my mother why she did this to me.
              </span>{" "}
              I questioned her about why she let me suffer so much. I promised
              myself that I wouldn&apos;t cut my daughter.
            </p>
            <p>
              I teach women and girls about the harm of FGM. I tell them that it
              harms you physically and takes away your sexual desire. FGM took
              away my sexual desire, and it would do the same to my daughter.
            </p>
            <p>
              I want to say to the world: &quot;Stop FGM, it has harmed me and
              damaged my life. If you don&apos;t stop it, you will witness the
              suffering.&quot;
            </p>
          </div>
        </div>
      </section>
      <section className="leaf">
        <div className="info-leaf">
          <div className="para-head">
            <h3>
              Like most women in her <br />
              community, Abida <br />
              underwent female genital <br />
              mutilation when she was <br />
              seven days old.
            </h3>
            <p>
              Female genital mutilation, which involves injuring or altering the
              female genitalia for non-medical reasons, is practised all around
              the world, affecting 200 million women and girls alive today. It
              is a violation of human rights that stems from - and perpetuates -
              gender inequality.
            </p>
          </div>
          <div className="para">
            <p>
              When girls are cut, they are at risk of haemorrhage, infection and
              other grave complications that can be fatal. Survivors carry
              lifelong physical and psychological scars, and face heightened
              risks of dying in childbirth.
            </p>
            <p>
              In Ethiopia, as in many places, the practice has declined in
              recent decades - affecting 65 per cent of girls and women today,
              down from 80 per cent in 2000. The Afar region, where Abida lives,
              is one of two regions where prevalence remains very high,
              currently 91 per cent. The region&apos;s maternal mortality rate
              is five times the national average.
            </p>
            <p>
              <span>But here, too, change is under way. </span>It comes from the
              heart of communities, driven by women like Abida Dawud, Zahra
              Mohammed Ahmed and Khadija Mohammed, who are taking action to
              spare their daughters and granddaughters the pain and loss they
              have endured.
            </p>
          </div>
        </div>
      </section>
      <section className="callout">
        <video
          className="bgVideo"
          loop
          autoPlay
          muted
          type="video/mp4"
          src="https://www.unfpa.org/modules/custom/unfpa_global_pieceofme/templates/asset/video/desktop/intro.mp4"
        ></video>
        <div className="callout-comp">
          <div className="callout-info">
            <h1>Girls are born complete.</h1>
            <span>Champion the end of female genital mutilation</span>
            <div>
              <button className="pl">
                <span>PLEDGE</span>
              </button>
              <button>
                <span>DONATE</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainSectionStyled>
  );
}

export default Main;
