import useRole from "../../../hook/useRole";

const Statistics = () => {
    const [role, isLoading] = useRole()
    return (
        <div className="mx-auto h-64 w-96 md:mt-10">
            <h1 className="text-2xl">welcome to <span className="font-bold text-3xl ">{role}</span> panel</h1>
        </div>
    );
};

export default Statistics;