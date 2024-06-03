import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import AboutUs from './About/AboutUs';
import Classes from './Classes/Classes';
import Testimonials from './Testimonials/Testimonials';
import Subscribe from './NewsLetter/Subscribe';
import Teams from './Teams/Teams';
import Forum from './Forum/Forum';
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
            <Subscribe />
            <Teams />
            <Forum />

        </div>
    );
};

export default Home;