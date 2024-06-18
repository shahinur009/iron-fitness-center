<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const BookingCard = ({ trainer, slot }) => {
    const navigate = useNavigate();
    console.log(trainer)
    const paymentStarted = (packageInfo) => {
        // link to navigate payment page with packageinfo and trainer and slot data
        console.log(packageInfo)
        console.log(trainer)
        console.log(slot)
        navigate('/pay-now', {
            state: {
                trainer,
                slot,
                packageInfo
            }
        });
    }
    return (
        <div className="">
            <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Trainer Name:{trainer?.name}</h2>
                        <p className="dark:text-gray-800">Selected Slot:{slot}</p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between my-6">
                    {
                        trainer?.classLists?.map((classItem) => (
                            <div key={classItem._id} className="shadow p-4">
                                <h2 className="text-xl font-semibold tracking-wide">
                                    Class Name: {classItem?.class_title}
                                </h2>
                                <p className="dark:text-gray-800">
                                    Duration: {classItem?.duration}
                                </p>
                            </div>
                        ))
                    }
                </div>

=======

const BookingCard = ({ slot }) => {
    const { name, specialist,
        experience, bio, image, _id, socialIcons, slots } = slot;
    return (
        <div className="">
            <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                </div>
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
            </div>
            {/* pricing section */}
            <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="font-bold tracking-wider uppercase dark:text-violet-600">Pricing</span>
                        <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Beginner</h4>
                                    <span className="text-6xl font-bold">Free</span>
                                </div>
                                <p className="mt-3 leading-relaxed dark:text-gray-600">Etiam ac convallis enim, eget euismod dolor.</p>
                                <ul className="flex-1 mb-6 dark:text-gray-600">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Aenean quis</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Morbi semper</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Tristique enim nec</span>
                                    </li>
                                </ul>
<<<<<<< HEAD
                                <button type="button" onClick={() => {
                                    console.log("clicked")
                                    paymentStarted({
                                        name: "basic",
                                        price_show_name: "$10",
                                        price: 10
                                    })
                                }} className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
=======
                                <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Pro</h4>
                                    <span className="text-6xl font-bold">$24
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
                                <ul className="flex-1 space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Free</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Phasellus tellus</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Praesent faucibus</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Aenean et lectus blandit</span>
                                    </li>
                                </ul>
<<<<<<< HEAD
                                <button onClick={() => {
                                    console.log("clicked")
                                    paymentStarted({
                                        name: "standard",
                                        price_show_name: "$50",
                                        price: 50
                                    })
                                }} className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Get Started</button>
=======
                                <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Get Started</a>
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Team</h4>
                                    <span className="text-6xl font-bold">$72
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
                                <ul className="space-y-2 dark:text-gray-600">
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Fusce sem ligula</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Curabitur dictum</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Duis odio eros</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Vivamus ut lectus ex</span>
                                    </li>
                                </ul>
<<<<<<< HEAD
                                <button onClick={() => {
                                    console.log("premimum")
                                    paymentStarted({
                                        name: "premimum",
                                        price_show_name: "$100",
                                        price: 100
                                    })
                                }} className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
=======
                                <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</a>
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingCard;