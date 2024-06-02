
const SectionTitle = ({ heading }) => {
    return (
        <>
            <div className="mx-auto w-full md:w-4/12 mb-3">
                <h3 className="font-bold text-[14px] md:text-4xl py-2 border-y-4 text-center uppercase">{heading}</h3>
            </div>
        </>
    );
};

export default SectionTitle;