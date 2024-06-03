import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard";
import img1 from '../../../assets/image/features images/body building.jpg';
import img2 from '../../../assets/image/features images/Personal-Trainer.png';
import img3 from '../../../assets/image/features images/group.jpg';
import img4 from '../../../assets/image/features images/Membership Plans.jpg';
import img5 from '../../../assets/image/features images/Sauna and Steam Rooms.webp';
import img6 from '../../../assets/image/features images/yoga.jpg';

const Features = () => {
    return (
        <div>
            
            {/* card-1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg-black text-white">
                <FeatureCard img={img1} title={'Body Building'} description={'Bodybuilding is not just about lifting weights, it is about building strength and confidence. As you see your muscles grow and your strength increase, you all gain a new level of self-assurance that extends beyond the gym.'} />
                {/* card-2 */}
                <FeatureCard img={img2} title={'Personal Training'} description={'Achieve your fitness goals with customized workouts and expert guidance tailored to your needs. Benefit from certified trainers who provide motivation, proper technique instruction, and ongoing support. Stay committed and accelerate your progress with flexible scheduling and personalized fitness programs.'} />
                {/* card-3 */}
                <FeatureCard img={img3} title={'Group Fitness Classes'} description={'Join dynamic and motivating group fitness classes such as yoga, Pilates, Zumba, spinning, and HIIT. Enjoy a supportive community atmosphere while improving your fitness with varied, instructor-led workouts. Benefit from a fun and engaging way to stay active and reach your fitness goals.'} />
                {/* card-4 */}
                <FeatureCard img={img6} title={'Classic Yoga'} description={'Explore the ancient practice of yoga, focusing on traditional postures, breathing techniques, and mindfulness to promote physical strength, flexibility, and inner peace. Join our serene classes led by experienced instructors, suitable for practitioners of all levels seeking harmony of body, mind, and spirit.'} />
                {/* card-5 */}
                <FeatureCard img={img5} title={'Cardio Zone'} description={'Indulge in relaxation and rejuvenation with our sauna and steam room facilities, offering therapeutic benefits for both body and mind. Unwind after your workout or simply enjoy the detoxifying effects, promoting muscle recovery and overall well-being.'} />
                {/* card-6 */}
                <FeatureCard img={img4} title={'Membership Plans'} description={'Choose from flexible membership options tailored to your needs and budget, granting access to our state-of-the-art facilities and expert services. Enjoy exclusive perks, discounts, and access to a vibrant fitness community.'} />
            </div>
        </div>
    );
};

export default Features;