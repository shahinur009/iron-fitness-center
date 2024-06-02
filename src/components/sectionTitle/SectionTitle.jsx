
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className="mx-auto  w-4/12 mb-3">
                <p className="text-black text-center mb-2 font-semibold">****{subHeading}****</p>
                <h3 className="font-bold text-4xl py-2 border-y-4 text-center uppercase">{heading}</h3>
            </div>
        </>
    );
};

export default SectionTitle;