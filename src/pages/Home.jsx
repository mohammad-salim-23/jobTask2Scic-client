import AllProducts from "../component/AllProducts";
import Bannar from "../component/Bannar";
import Navbar from "../component/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;