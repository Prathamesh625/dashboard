import Bar from "./Bar";
import Barchart from "./BarChart";
import PieChart from "./PieChart";
import Styles from "./DashBoardComponent.module.css"
function Graph() {
    return (
    <div className={Styles["graphs"]} style={{marginTop:"10px"}}>
    <div className={Styles["bar-plot"]}>
    <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center",}}>
    <p style={{width:"15%"}}><b>Overview</b> Monthly earning</p>
    <div style={{backgroundColor:"#F3F1FD",padding:"10px"}}>Quarterly </div></div><Bar /></div>
    <div className={Styles["pie-plot"]}>
    <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center",}}>
        <p style={{width:"40%"}}><b>Customers</b> Total new customers</p>
          </div>
         
<PieChart />
        
          </div>
                </div> );
}

export default Graph;