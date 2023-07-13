import React from "react";

const ANISection = () => {
    return (
        <section className="animetaContentSections mt-16" id="aniAiCreatorBuddy">
        <div className="container mx-auto">
          <div className="flex sectionContent  flex-col-reverse sm:flex-row bgBlack text-white">
            
            <div className="contentBox  w-full sm:w-3/6">
              <div className="brandLogo">
                <picture>
                  <img
                    src="/images/v3/aniAiCreatorBuddy.svg"
                    alt="Brand Star"
                    className="object-contain"
                  />
                </picture>
              </div>
              <div className="sectionDescription">
                <h3 className="textWhite">AI-Powered  <br /> Content Strategy App</h3>
                <p className="textWhite">
                Ani is Animeta’s Creator content app that provides AI based content recommendation, video ideas, trending content, channel growth & overall optimization to creators.
                </p>
                <div className="appButtons">
                  <div className="imageBox">
                      <picture>
                          <img src="/images/v3/appStore.svg" alt="Brand Star" className='object-contain' />
                      </picture>
                  </div>
                  <div className="imageBox">
                      <picture>
                          <img src="/images/v3/googlePlay.svg" alt="Brand Star" className='object-contain' />
                      </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="imageBox  w-full sm:w-3/6">
              <picture>
                <img
                  src="/images/v3/creatorBuddy.png"
                  alt="Brand Star"
                  className="object-cover w-full h-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ANISection;