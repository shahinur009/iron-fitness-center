import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import useAuth from '../../../hook/useAuth';

const UpdateProfile = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth();

    function open() {
        setIsOpen(true)
    }
    function close() {
        setIsOpen(false)
    }
    return (
        <>
            <Button
                onClick={open}
                className="rounded-md py-2 px-4 text-sm font-medium text-white focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white bg-orange-400 cursor-pointer hover:bg-[#af4053] block mb-1"
            >
                Update Profile
            </Button>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-orange-400 p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className=" font-medium text-black w-full">
                                        <input type="text" className='w-full rounded-md mb-2' defaultValue={user?.displayName} />
                                    </DialogTitle>
                                    <input type="text" className='w-full rounded-md' defaultValue={user?.email} />
                                    <div className="mt-4 flex gap-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white" 
                                        >
                                            Updated
                                        </Button>
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default UpdateProfile;