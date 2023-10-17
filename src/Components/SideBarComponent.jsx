import { useState } from "react";
import SideBarItem from "./SideBarItem";
function SideBarComponent() {
    const [items, setItems] = useState(["dashboard"]);

    return (
        <div style={{padding:"20px"}}>
            <div style={{color:"white", fontWeight:"bold"}}>Dashboard</div>
            <section>
                {items.map(item => <SideBarItem item={item} />)}

            </section>
        </div>
    );
}

export default SideBarComponent;