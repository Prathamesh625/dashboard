import "../App.css"


import Styles from "./Bar.module.css"
function Bar() {



  return (
    
    <div style={{ display: "flex", alignItems: "end",width:"100%" }} >
      <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "200px"}} className={Styles["bar-items"]}></div>
        <div>Jan</div>
         </div>
       <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
<div style={{height: "250px"}} className={Styles["bar-items"]}></div>
        <div>Feb</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "100px"}} className={Styles["bar-items"]}></div>
        
        <div>Mar</div>
         </div>
           <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "240px"}} className={Styles["bar-items"]}></div>
        <div>Apr</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "210px"}} className={Styles["bar-items"]}></div>
        <div>May</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "200px"}} className={Styles["bar-items"]}></div>
        <div>Jun</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "200px"}} className={Styles["bar-items"]}></div>
        <div>Jul</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "260px" , backgroundColor: "rgba(90, 50, 233,255)"}} className={Styles["bar-items"]}></div>
        <div>Aug</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "230px"}} className={Styles["bar-items"]}></div>
        <div>Sep</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "250px"}} className={Styles["bar-items"]}></div>
        <div>Oct</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "200px"}} className={Styles["bar-items"]}></div>
        <div>Nov</div>
      </div>
        <div  style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>

     
      <div style={{height: "200px"}} className={Styles["bar-items"]}></div>
        <div>Dec</div>
         </div>
    </div>
  );
}

export default Bar;
