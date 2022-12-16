// import Poster from "../../public/images/poster.jpg";
// if (typeof window !== 'undefined') {
//     var elem = document.getElementById("myvideo");
// }

// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }

function Banner() {
    return (
        <div className='BannerSection'>
            {/* <div className="wistia_responsive_padding"><div className="wistia_responsive_wrapper"><iframe src="https://fast.wistia.net/embed/iframe/ani3jykos7?seo=false&videoFoam=true" title="Animeta R6 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div> */}
            <video className='Bannervideo desktop-only' id="myvideo"  poster="https://animeta.ai/images/poster.jpg" autoPlay loop muted playsInline>
                <source src="https://d3e066o7tnnbih.cloudfront.net/banner_video_updated.mp4" type="video/mp4" />
            </video>
            <video className='Bannervideo mobile-only' id="myvideo"  poster="https://animeta.ai/images/poster.jpg" autoPlay loop muted playsInline>
                <source src="https://orla.ae/assets/video/mobile-banner-video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Banner