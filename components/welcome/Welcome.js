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
                    <span><Image src={char1} /></span>
                    <span><Image src={char2} /></span>
                    <span><Image src={char3} /></span>
                    <span><Image src={char4} /></span>
                    <span><Image src={char5} /></span>
                    <span><Image src={char6} /></span>
                    <span><Image src={char7} /></span>
                </h1>
            </section>
        </>
    )
}

export default Welcome