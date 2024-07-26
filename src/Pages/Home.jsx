
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Estates from '../components/Estates';


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <h1 className='text-2xl font-bold text-center my-6'>Estate</h1>
            <Estates/>
        </div>
    );
};

export default Home;