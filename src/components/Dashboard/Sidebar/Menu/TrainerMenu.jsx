import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";

const TrainerMenu = () => {
    return (
        <>
            <MenuItems icon={BsFillHouseAddFill} label='Manage Slots' address='manageSlots' />
            <MenuItems icon={MdHomeWork} label='Add New Slot' address='addNewSlot' />
            <MenuItems
                icon={MdOutlineManageHistory}
                label='Add New Forum'
                address='addNewForum'
            />
        </>
    );
};

export default TrainerMenu;