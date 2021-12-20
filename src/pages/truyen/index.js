import Banner from "../../components/Banner"
import Container from "../../components/Container"
import ThongTin from "./components/ThongTin"

const truyen = () => {
    return (
        <div>
            <Banner/>
            <Container>
                <div className="flex mb-6">
                    <ThongTin/>
                </div>
             
            </Container>  
        </div>
    )
}

export default truyen