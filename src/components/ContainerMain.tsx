import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ReturnToTop from "./ReturnToTop";

export default function ContainerMain({children}: any) {
    return(
        <>  
            <Header></Header>
            <ReturnToTop></ReturnToTop>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </>
        
    )
}