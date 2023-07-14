import React from "react";

const AnimetaBrandStarSection = () => {
  return (
    <section className="animetaContentSections" id="animetaBrandStar">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sectionContent">
          <div className="imageBox w-full sm:w-3/6 ">
            <picture>
              <img
                src="/images/v3/brandstar.png"
                alt="Brand Star"
                className="object-cover w-full h-full"
              />
            </picture>
          </div>
          <div className="contentBox w-full sm:w-3/6">
            <div className="brandLogo">
              <picture>
                <img
                  src="/images/v3/animetaBrandStar.svg"
                  alt="Brand Star"
                  className="object-contain"
                />
              </picture>
            </div>
            <div className="sectionDescription">
              <h3>Influencer Marketing Platform</h3>
              <p>
                Animeta Brandstar is a first of its kind tech-data enabled
                influencer marketing, that enables brands to discover and
                execute campaigns, with the most relevant creators, in an
                advanced dataintuitive way; with a strong focus on ROI &
                performance metrics.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimetaBrandStarSection;
