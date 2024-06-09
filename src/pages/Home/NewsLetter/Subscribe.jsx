import { useState } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Subscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubscribe = (event) => {
        event.preventDefault();

        const subscriptionData = {
            name,
            email,
        };

        fetch('http://localhost:4009/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriptionData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Subscribed successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setName('');
                    setEmail('');
                }
            })

    };

    return (
        <div className="mb-20">
            <SectionTitle heading="Newsletter" />
            <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900 dark:bg-gray-50">
                        <h1 className="text-5xl font-extrabold mb-12 text-gray-50 dark:text-gray-900">Subscription</h1>
                        <form onSubmit={handleSubscribe} className="self-stretch space-y-3">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your name"
                                    className="w-full p-4 rounded-md focus:ring focus:ring-violet-400 border-gray-700 dark:border-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm sr-only">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address"
                                    className="w-full p-4 rounded-md focus:ring focus:ring-violet-400 border-gray-700 dark:border-gray-300"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full py-4 font-semibold rounded bg-orange-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                    <img src="https://i.ibb.co/87M7N0d/subscribe.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Subscribe;