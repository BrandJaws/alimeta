import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import dotImg from "../public/images/dot-img.png";
// import icon1 from "../public/images/icon-1.png";
// import icon2 from "../public/images/icon-2.png";
// import icon3 from "../public/images/icon-3.png";
// import icon4 from "../public/images/icon-4.png";
// import founderTeam1 from "../public/images/founder-team-1.png";
import founderTeam1 from "../public/images/new-team-1.png";
import founderTeam2 from "../public/images/new-team-2.png";
import founderTeam3 from "../public/images/new-team-3.png";
import managementTeam1 from "../public/images/management-team-1.png";
import managementTeam2 from "../public/images/management-team-2.png";
import managementTeam3 from "../public/images/management-team-3.png";
import teamBanner from "../public/images/v3/teamBanner.jpg";

import Welcome from "../components/welcome/Welcome";
import Header from "../components/new-home/Header/Header";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import AnishSection from "../components/common/AnishSection";
import RajeshSection from "../components/common/RajeshSection";
import SameerSection from "../components/common/SameerSection";

import DevdattaSection from "../components/common/DevdattaSection";
import BiswamitraSection from "../components/common/BiswamitraSection";
import KrishnaSection from "../components/common/KrishnaSection";

export default function People() {
  const [profileData, setProfileData] = useState(null);
  const handleSetProfileData = (data) => {
    setProfileData(data);
  };
  const window = useWindowSize();
  console.log(profileData);
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>People | Animeta</title>
        <meta name="msapplication-TileImage" content="/og-image.png" />
        <meta property="og:site_name" content="People | Animeta" />
        <meta property="og:title" content="People | Animeta" />
        <meta
          property="og:description"
          content="Animeta is the World's first Social Media Influencer collaboration platform for Digital Creators, TikTok stars, & everyone else - powered by AIJoin the revolution of influencers that make money with digital creator tech, empower the creator economy, and get famous faster."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>

        <meta
          name="keywords"
          content="Creator Economy, Influencer collaboration, Animeta, Influencer Marketing, Social Media Influencer, Digital Creator, Social Commerce"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://animeta.ai/" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="https://animeta.ai/og-image.png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="https://animeta.ai/og-image.png" />
        <meta
          name="msapplication-TileImage"
          content="https://animeta.ai/og-image.png"
        />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
        async
      ></Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081900158205152"
        crossOrigin="anonymous"
      ></Script>
      <link itemProp="thumbnailUrl" href="https://animeta.ai/og-image.png" />

      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link itemProp="url" href="https://animeta.ai/og-image.png" />
      </span>
      {/* <Welcome /> */}
      {/* <Header /> */}
      <section className="people-page-header">
        <div className="mx-auto">
          <div className="people-hero-section">
            <h1>
              MEET THE <span>TEAM</span>
            </h1>
            <Image src={teamBanner} alt="icon meta 1" />
            {/* <p className="bg-black"><mark>We offer financial investment, data analytics & business intelligence, content strategy<br className="break-in-title" />& creative supervision, brand, PR & social media.</mark></p> */}
          </div>
        </div>
      </section>
      {/* <section className="people-page-marquee">
                <div className="marquee-section">
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                    <div className="marquee-item">
                        <Image src={dotImg} alt="dot img" />
                        <span>PEOPLE</span>
                    </div>
                </div>
            </section> */}
      <section className="people-page-icons-section">
        <div className="team-section container mx-auto">
          <h1 className="team-heading">Founding Team</h1>
          <div className="icons-section">
            <div
              className={`icon-box cursor-pointer ${profileData === "anishMehta" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("anishMehta")}
            >
              <div className="icon">
                <Image src={founderTeam1} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>FOUNDER</mark></h1>
                </div>
                <div className="designation">
                  <p>Anish Mehta</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "anishMehta" && <AnishSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer ${profileData === "rajeshKamat" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("rajeshKamat")}
            >
              <div className="icon">
                <Image src={founderTeam2} alt="icon meta 4" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>FOUNDING INVESTOR</mark></h1>
                </div>
                <div className="designation">
                  <p>Rajesh Kamat</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "rajeshKamat" && <RajeshSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer ${profileData === "sameerManchanda" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("sameerManchanda")}
            >
              <div className="icon">
                <Image src={founderTeam3} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>FOUNDING INVESTOR</mark></h1>
                </div>
                <div className="designation">
                  <p>Sameer Manchanda</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "sameerManchanda" && <SameerSection />}</>
            )}
          </div>
        </div>
        {profileData && window.width > 1024 && (
          <>
            {profileData === "anishMehta" ? (
              <AnishSection />
            ) : profileData === "rajeshKamat" ? (
              <RajeshSection />
            ) : profileData === "sameerManchanda" ? (
              <SameerSection />
            ) : null}
          </>
        )}
        <div className={`team-section team-section2 container mx-auto ${profileData !== "devdattaPotnis" && profileData !== "krishnaDesai" && profileData !== "biswamitraRay" ? 'pb-28' : ''}`}>
          <h1 className="team-heading">Management Team</h1>
          <div className="icons-section">
            <div
              className={`icon-box cursor-pointer ${profileData === "devdattaPotnis" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("devdattaPotnis")}
            >
              <div className="icon">
                <Image src={managementTeam1} alt="icon meta 2" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>CHIEF EXECUTIVE <br />OFFICER</mark></h1>
                </div>
                <div className="designation">
                  <p>Devdatta Potnis</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "devdattaPotnis" && <DevdattaSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer ${profileData === "krishnaDesai" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("krishnaDesai")}
            >
              <div className="icon">
                <Image src={managementTeam2} alt="icon meta 3" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>CHIEF PRODUCT OFFICER<br />& DATA SCIENTIST</mark></h1>
                </div>
                <div className="designation">
                  <p>Krishna Desai</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "krishnaDesai" && <KrishnaSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer ${profileData === "biswamitraRay" && 'relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:border-solid after:border-t-0 after:border-r-[15px] after:border-l-[15px] after:border-b-[15px] after:border-b-black'}`}
              onClick={() => handleSetProfileData("biswamitraRay")}
            >
              <div className="icon">
                <Image src={managementTeam3} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1><mark>SVP - BRANDED CONTENT<br />& CREATOR STRATEGY</mark></h1>
                </div>
                <div className="designation">
                  <p>Biswamitra Ray</p>
                </div>
              </div>
            </div>
            {profileData && window.width < 1024 && (
              <>{profileData === "biswamitraRay" && <BiswamitraSection />}</>
            )}
          </div>
        </div>
        {profileData && window.width > 1024 && (
          <>
            {profileData === "devdattaPotnis" ? (
              <DevdattaSection />
            ) : profileData === "krishnaDesai" ? (
              <KrishnaSection />
            ) : profileData === "biswamitraRay" ? (
              <BiswamitraSection />
            ): null}
          </>
        )}
      </section>
    </>
  );
}
