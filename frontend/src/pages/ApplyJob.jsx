import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ApplyJob() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const cardColors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF", "#B9FBC0"];

    useEffect(() => {
        axios.get("https://secure-fireworks-ad3f3462ec.strapiapp.com/api/jobs?populate=*")
            .then(response => {
                console.log("Jobs Data:", response.data);
                setJobs(response.data.data || []); // Ensure jobs is an array
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching jobs:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100"> 
            <Navbar />
            <div className="container flex-grow-1 mt-5">
                <h1 className="text-center mb-4">Job Listings</h1>
                {loading ? (
                    <p className="text-center">Loading job data...</p>
                ) : (
                    jobs.length > 0 ? (
                        <div className="row g-4">
                            {jobs.map((job, index) => {
    const { Title, Description, Job_type, Location, Salary, Skills } = job; // Remove ".attributes"
    return (
        <div key={job.id} className="col-12 col-md-4 d-flex align-items-stretch">
            <div className="card p-4 shadow-lg w-100 text-dark d-flex flex-column" style={{ backgroundColor: cardColors[index % cardColors.length], borderRadius: '10px' }}>
                <h2 className="text-center">{Title}</h2>
                <hr />
                <p><strong>Description:</strong> {Description}</p>
                <p><strong>Type:</strong> {Job_type}</p>
                <p><strong>Location:</strong> {Location}</p>
                <p><strong>Salary:</strong> ${Salary}</p>
                <p><strong>Skills:</strong> {Skills && Array.isArray(Skills) ? Skills.map(skill => skill.Skills).join(", ") : "N/A"}</p>
                <div className="mt-auto text-center">
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
})}
   </div>
                    ) : (
                        <p className="text-center">No jobs available.</p>
                    )
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ApplyJob;
