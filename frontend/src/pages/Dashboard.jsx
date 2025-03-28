import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
    return (
        <div className="d-flex flex-column min-vh-100"> 
            <Navbar />
            <div className="container flex-grow-1 mt-5">
                <h1>Dashboard</h1>
                <p>Going to Update soon. MeanWhile Have a look in Post a Job and Apply for a Job Pages</p>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
