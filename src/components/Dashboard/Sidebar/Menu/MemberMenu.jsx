import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import { MdHomeWork } from "react-icons/md";

const MemberMenu = () => {
    return (
        <>
            <MenuItems icon={BsFillHouseAddFill} label='Activity' address='activity' />
            <MenuItems icon={MdHomeWork} label='Booked Trainer' address='bookedTrainer' />

        </>
    );
};

export default MemberMenu;