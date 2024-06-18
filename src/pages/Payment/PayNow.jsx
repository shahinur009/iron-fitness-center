import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hook/axiosSecure/useAxiosSecure';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';

const PayNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot, packageInfo, trainer } = location.state || {};
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user)

  const handlePayment = () => {
    axiosSecure.post('/pay-now', {
      trainer_info: trainer,
      trainer_id: trainer._id, slot_name: slot, package_name: packageInfo.name, price: packageInfo.price, user_id: user?.id, email: user?.email
    })
      .then(data => {
        if (data.data?.result) {
          toast.success(data.data?.message ?? 'Payment Successful')
          navigate('/dashboard')
        }
      }).catch((err) => {
        toast.error(err.error || 'Something went wrong!')
      })
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

      {/* Trainer name */}
      <p><span className="font-semibold">Trainer Name:</span> {trainer.name}</p>

      {/* Slot name */}
      <p><span className="font-semibold">Slot Name:</span> {slot}</p>

      {/* Package name */}
      <p><span className="font-semibold">Package Name:</span> {packageInfo.name}</p>

      {/* Price */}
      <p><span className="font-semibold">Price:</span> {packageInfo.price_show_name}</p>

      {/* Your name, email & other info */}
      <div className="mt-4">
        <p><span className="font-semibold">Your Name:</span> {user.displayName}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
      </div>

      {/* Confirm Button */}
      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
        Confirm Payment
      </button>
    </div>
  )
}

export default PayNow