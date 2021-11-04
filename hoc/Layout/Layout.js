import Sidebar from "../../containers/Sidebar/Sidebar";

export default function Layout(props) {
    return (
        <div className="pq-main--layout">
          <div className="pq--wrapper">
            <Sidebar />
            {props.children} 
          </div>
        </div>
    )
}
