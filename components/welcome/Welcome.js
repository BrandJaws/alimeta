import Image from "next/image";
import char1 from "../../public/images/A-char.png";
import char2 from "../../public/images/N-char.png";
import char3 from "../../public/images/I-char.png";
import char4 from "../../public/images/M-char.png";
import char5 from "../../public/images/E-char.png";
import char6 from "../../public/images/T-char.png";
import char7 from "../../public/images/A-char-2.png";


const Welcome = () => {
    return (
        <>
            <section className="Splash">
                <h1>
                    <span><Image className="lazyload" src={char1} alt="char1" /></span>
                    <span><Image className="lazyload" src={char2} alt="char2" /></span>
                    <span><Image className="lazyload" src={char3} alt="char3" /></span>
                    <span><Image className="lazyload" src={char4} alt="char4" /></span>
                    <span><Image className="lazyload" src={char5} alt="char5" /></span>
                    <span><Image className="lazyload" src={char6} alt="char6" /></span>
                    <span><Image className="lazyload" src={char7} alt="char7" /></span>
                </h1>
            </section>
        </>
    )
}

export default Welcome