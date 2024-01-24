import Footer from "./Footer";
import Header from "./Header";

export default function ContainerMain({children}: any) {
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