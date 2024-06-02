import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Features from './Features/Features';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IRON | HOME</title>
            </Helmet>
            <Banner />
            <Features />
        </div>
    );
};

export default Home;