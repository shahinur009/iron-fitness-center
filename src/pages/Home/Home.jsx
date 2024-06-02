import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import AboutUs from './About/AboutUs';
import Classes from './Classes/Classes';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IRON | HOME</title>
            </Helmet>
            <Banner />
            <Features />
            <AboutUs />
            <Classes />
            <Testimonials />
        </div>
    );
};

export default Home;