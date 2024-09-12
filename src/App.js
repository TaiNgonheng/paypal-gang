import About from '../src/Components/Screen/About/About'
import Contact from '../src/Components/Screen/Contact/Contact'
import Home from './Components/Screen/Home/home'
import Profile from '../src/Components/Screen/Profile/Profile'
import MainContainer from "./Components/Screen/Container/MainContainer";
import {BrowserRouter,Routes,Route} from  'react-router-dom';


const App = () =>{
    return (
        <BrowserRouter>
            <MainContainer>
                 <Routes>
                     <Route path="/" element={<Home/>}/>      
                     <Route path="/profile" element={<Profile/>}/>
                     <Route path="/contact" element={<Contact/>}/>
                     <Route path="/about" element={<About/>}/>
                 </Routes>
                 </MainContainer>
        </BrowserRouter>
    )
}
export default App;