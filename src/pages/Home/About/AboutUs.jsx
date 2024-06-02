import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import img from '../../../assets/image/features images/logo.jpg'

const AboutUs = () => {
    return (
        <div>
            <SectionTitle
                heading={'About us'}>
            </SectionTitle>
            <div className="md:flex gap-3 p-5">
                <div className="w-full md:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="w-full md:w-1/2 shadow-lg border-2 p-4">
                    <h1 className="text-xl font-bold">about us</h1>
                    <p>
                        Welcome to Iron Fitness, where strength meets community. Our mission is to empower individuals to transform their lives through fitness, wellness, and community support. Founded on the principles of dedication, perseverance, and excellence, Iron Fitness is more than just a gym—it is a destination for those seeking to unleash their full potential.

                        Our commitment to your success goes beyond the gym floor. We offer a range of personalized training programs, group fitness classes, and wellness services to help you achieve your goals and live your healthiest, happiest life.

                        Join us at Iron Fitness and become part of our vibrant community dedicated to building strength, resilience, and a lifelong love for fitness. Together, we will redefine what it means to be strong—inside and out.

                        Welcome to Iron Fitness. Your journey starts here.
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </div>


    );
};

export default AboutUs;