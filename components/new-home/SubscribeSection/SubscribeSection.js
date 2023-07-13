import React from "react";
import Newsletter from "../../newsletter/Newsletter";

const SubscribeSection = () => {
  return (
    // <Newsletter />
    <section className="aboutAnimeta mt-16">
      <div className="container mx-auto">
        <div className="flex  flex-col sm:flex-row items-end sectionContent">
          <div className="imageBox  w-full sm:w-3/6">
            <picture>
              <img
                src="/images/v3/aboutAnimeta.svg"
                alt="Brand Star"
                className="object-cover w-full h-full"
              />
            </picture>
          </div>
          <div className="contentBox  w-full sm:w-3/6">
            <div className="sectionDescription pb-20">
              <h2>about animeta</h2>
              <p>
                Animeta is a Singapore based Creator Tech company focused on
                creating & nurturing digital creators by helping them grow their
                communities & maximize their earnings across multiple social
                media platforms & customized brand solutions through the
                proprietary Animeta AI-based Creator Tech platforms.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="simpleTextButton">
        shaping the future of the creator economy
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
