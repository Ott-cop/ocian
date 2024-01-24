import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function ContainerMain({children}: any) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenableElements = document.querySelectorAll('.hiddenable');
        hiddenableElements.forEach((el) => observer.observe(el));
    }, []);
    return(
        <>  
            <Header></Header>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </>
        
    )
}