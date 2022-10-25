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
                <source src="https://jellysmack.com/wp-content/uploads/2022/02/ADDTL_jellysmack_longform_1920x1080_SANSattribution.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Banner