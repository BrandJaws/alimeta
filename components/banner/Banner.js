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
            <video className='Bannervideo' id="myvideo" autoPlay loop muted playsInline>
                <source src="https://orla.ae/assets/video/banner_video_updated.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Banner