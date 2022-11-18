import {useEffect} from "react";

function Dashboard() {
    useEffect(() => {
        document.title = "WebDevTools - Dashboard";
    });

    return (
        <p>Dashboard</p>
    )
}

export default Dashboard;