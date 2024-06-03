import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Team = () => {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <SectionTitle
                    heading={'Our Team'}>
                </SectionTitle>
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="w-full max-w-xs text-center">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://i.ibb.co/RvLMzLv/shahin-picture-linkedin.png" alt="avatar" />

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Md Shahinur Islam</h3>
                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                            <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">Email: shahinur@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs text-center">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://i.ibb.co/VCPw1zX/johnson-mike-041324-getty-2001450659.webp" alt="avatar" />

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                            <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">Email: janedoe@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs text-center">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://i.ibb.co/dk7gnzL/Jessica-Williams-683x1024.jpg" alt="avatar" />

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jessica Williams</h3>
                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">MD</span>
                            <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">Email: jessicawilliams@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs text-center">
                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://i.ibb.co/5LF9vQG/Laura-Martinez.jpg" alt="avatar" />

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Laura Martinez</h3>
                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Trainer & HR</span>
                            <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">Email: lauraHR@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;