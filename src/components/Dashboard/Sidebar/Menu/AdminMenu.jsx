import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
    return (
        <>
            <MenuItems icon={BsFillHouseAddFill} label='All Subscribers' address='all-subscribers' />
            <MenuItems icon={MdHomeWork} label='All Trainers Info' address='all-trainers-info' />
            <MenuItems icon={MdHomeWork} label='Applied Trainers' address='apply-trainers' />
            <MenuItems icon={MdHomeWork} label='Balance' address='balance' />
            <MenuItems icon={MdHomeWork} label='Add New Class' address='add-new-class' />
            <MenuItems
                icon={MdOutlineManageHistory}
                label='Add New Forum'
                address='addNewForumAdmin'
            />
        </>
    );
};

export default AdminMenu;