import Poster from "../../public/images/poster.jpg";
if (typeof window !== 'undefined') {
    var elem = document.getElementById("myvideo");
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function Banner() {
    return (
        <div className='BannerSection' onClick={openFullscreen}>
            <video className='Bannervideo' id="myvideo"  poster="https://animeta.ai/images/poster.jpg" autoPlay loop muted playsInline>
                <source src="http://69.16.254.149/~pixlddx/videos/banner_video_updated.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Banner