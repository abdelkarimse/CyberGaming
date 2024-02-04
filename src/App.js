import "./App.css"
import {Header,Hero,Mostpopular,GamingLibray,Footer} from "./sections/index"
import { Container} from "./componets/index";
 


const App = ()=>{
    return (
        <div>
            <Header />
            <Container >
                <Hero />
                <Mostpopular />
                <GamingLibray />
            </Container>
            <Footer />
        </div>
    );
}
export default App;