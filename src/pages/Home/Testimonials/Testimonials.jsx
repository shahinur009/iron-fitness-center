import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import TestimonialsCard from "./TestimonialsCard";
import useAxiosPublic from "../../../hook/axiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic()

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/review');
            return data;
        }
    })
    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    // console.log(reviews)
    return (
        <section className="my-20">
            <SectionTitle
                heading={'Testimonial'}>
            </SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
            >

                {
                    reviews.map(rev => <SwiperSlide
                        key={rev._id} >
                        <TestimonialsCard rev={rev}></TestimonialsCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;