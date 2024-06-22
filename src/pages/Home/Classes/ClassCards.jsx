const ClassCards = ({item}) => {
    const {image, title, description, total_bookings} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '30%'}} className="w-1/2 h-1/2 md:w-[120px] md:h-[120px]"  src={image} alt="" />
            <div>
                <h3 className="uppercase text-violet-500 font-bold text-lg">{title}*</h3>
                <p>{description}</p>
                <p className="font-bold">Booking: {total_bookings}</p>
              
            </div>
              
          
        </div>
    );
};

export default ClassCards;