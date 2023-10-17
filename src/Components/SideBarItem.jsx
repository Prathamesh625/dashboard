import { MdExpandMore , MdOutlineProductionQuantityLimits ,MdOutlineLiveHelp } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FcProcess } from "react-icons/fc";
import Styles from "./SideBarItem.module.css"
function SideBarItem({ item }) {
    return (
        <>
        <div className={Styles.dashbord}>
            <div className={Styles["dashbord-item"]}>
                    <div className={Styles["icons-flex"]}>
                    <RxDashboard className={Styles.icon2 } />        
                    <h1>Dashboard</h1>
                    </div>        
         </div> 
                <div className={Styles["dashbord-item"]}>
                    <div className={Styles["icons-flex"]}>
                        <MdOutlineProductionQuantityLimits className={Styles.icon2 } />
                      <h1>Product</h1>
                    </div>  
            <MdExpandMore className={Styles.icons}/>
        </div>
                <div className={Styles["dashbord-item"]}>
                    <div className={Styles["icons-flex"]}>
                    <BsFillFileEarmarkPersonFill className={Styles.icon2 }/>
                    <h1>Customers</h1>
                    </div>
            <MdExpandMore className={Styles.icons}/>
        </div>
                <div className={Styles["dashbord-item"]}>
                    <div className={Styles["icons-flex"]}>        
                    <LiaMoneyBillWaveSolid className={Styles.icon2 }/>
                    <h1>income</h1>
                    </div>
            <MdExpandMore className={Styles.icons}/>
        </div>
                <div className={Styles["dashbord-item"]}>
                    <div className={Styles["icons-flex"]}> 
                    <FcProcess className={Styles.icon2 }/>    
                        <h1>promote</h1>
                    </div>
            <MdExpandMore className={Styles.icons}/>
        </div>
                <div className={Styles["dashbord-item"]}>
                <div className={Styles["icons-flex"]}>     
                        <MdOutlineLiveHelp className={Styles.icon2}/>
                        <h1>Help</h1>
                </div>
            <MdExpandMore className={Styles.icons}/>
                </div>
        </div>
    </>);
}

export default SideBarItem;