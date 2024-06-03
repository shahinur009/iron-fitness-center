import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Subscribe = () => {
    return (
        <div>
            <SectionTitle
                heading={'Subscribe please'}>
            </SectionTitle>
            <section className="p-6 bg-black dark:bg-gray-100  dark:text-gray-800">
                <div className="container grid gap-6  mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">

                        <h1 className="text-2xl text-white md:text-5xl font-extrabold  mb-3 dark:text-gray-900">IRON FITNESS CENTER</h1>
                        <form noValidate="" action="" className="self-stretch space-y-3">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm sr-only">Email address</label>
                                <input id="email" type="email" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <button type="button" className="btn w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Subscribe please</button>
                        </form>
                    </div>
                    <img src="https://i.ibb.co/87M7N0d/subscribe.jpg" alt="" className="object-cover md:h-[400px] w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Subscribe;