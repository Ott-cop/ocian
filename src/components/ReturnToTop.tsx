import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

export default function ReturnToTop() {
    const [isScroll, setisScroll] = useState<boolean>(false);

    const options = {
        duration: 600,
        smooth: true
    }
    const returnTop = () => {
        animateScroll.scrollToTop(options);
    };
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setisScroll(true);
        } else if (window.scrollY === 0) {
            setisScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return(
        <>
            <div className={`returnTop-color ${isScroll ? 'hide-icon' : ''}`} onClick={returnTop}>
                <i className="icon-returnTop-color"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></i>
            </div>
        </>
    );
}