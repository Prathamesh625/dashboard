
import Bar from "./Bar";
import Barchart from "./BarChart";
import PieChart from "./PieChart";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { LuWallet } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import Styles from "./DashBoardComponent.module.css"
import Graph from "./Graphs";
function DashBoard() {
    return (
      <section  className={Styles["Container"]}>
         <div >
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>Hello Shahrukh</div>
                <input type="text" placeholder="Search..." />
            </div>
            </div>
             <div>
            <div className={Styles["comp"]}>
              
                    <div className={Styles["dashboard-comp"]}>
                         <div className={Styles["circle1"]}>
                        <PiCurrencyCircleDollar style={{marginTop:"0.4em" , marginLeft:"0.4em" , fontSize:"3.5em" , color:"green"}} />
                        </div>
                        <div style={{ width: "40%", marginLeft: "10px" }}>Earning <b style={{ fontSize: "2rem" }}>$198K</b> this month</div>
                    </div>
                    <div className={Styles["dashboard-comp"]}>
                          <div className={Styles["circle2"]}>
                             <CgNotes style={{marginTop:"0.4em" , marginLeft:"0.4em" , fontSize:"3.5em" , color:"purple"}} />     
                        </div>
                          <div style={{width:"40%", marginLeft:"10px"}}>Orders <b style={{fontSize:"2rem"}}>$2.4K</b> this month</div>
                    </div>
                    <div className={Styles["dashboard-comp"]}>
                         <div className={Styles["circle3"]}>
                            <LuWallet style={{marginTop:"0.4em" , marginLeft:"0.4em" , fontSize:"3.5em" , color:"blue"}} /> 
                        </div>
                         <div style={{width:"40%", marginLeft:"10px"}}>Balance <b style={{fontSize:"2rem"}}>$2.4k</b> this month</div>
                    </div>
                    <div className={Styles["dashboard-comp"]}>
                         <div className={Styles["circle4"]}>
                            <SlHandbag style={{marginTop:"0.4em" , marginLeft:"0.4em" , fontSize:"3.5em" , color:"red"}} /> 
                        </div>
                           <div style={{width:"40%", marginLeft:"10px"}}>Total Sales <b style={{fontSize:"2rem"}}>$89K</b> this month</div>
                    </div>
                </div>
            </div> 
            <Graph/>
   
             <div style={{ backgroundColor: "white", width: "100%", height: "200px", gridColumnEnd: "span 4", borderRadius: "10px", }} className={Styles["last-div"]} > 
                    <div>
                        <h1>Product Sell</h1>
                        <p>Product Name</p>
                    </div>
                    <div className={Styles["last-div-input"]}>
                        <input type="text" placeholder="search" />
                        <input type="text" placeholder="Last 30 days" />
                        <div className={Styles["last-div-input-p"]}>    
                        <p>Stokes</p>
                        <p>Price</p>
                        <p>Total Sells</p>
                        </div>
                    </div>
                </div>
                     <div style={{marginTop:"-6em"}}>
                        <div className={Styles["item-details"]}>
                            <div>
                                <h1>Abstract 3D</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, unde?</p>
                            </div>
                            <div className={Styles["item-list"]}>
                                <p>32 in Stocks</p>
                                <p>$45.99</p>
                                <p style={{paddingRight:"2em"}}>20</p>
                            </div>
                        </div>    
                        <div className={Styles["item-details"]}>
                            <div>
                                <h1>Sarphens Illustration</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsum?</p>
                            </div>
                            <div className={Styles["item-list"]}>
                                <p>32 in Stocks</p>
                                <p>$45.99</p>
                                <p style={{paddingRight:"2em"}}>20</p>
                    </div>
                </div>
            </div>
                     
    </section>);
        
    }

export default DashBoard;