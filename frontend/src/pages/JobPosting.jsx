import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobPosting = () => {
  const [job, setJob] = useState({
    Title: "",
    Description: "",
    Location: "",
    Salary: "",
    Skills: "",
    Job_type: "Full-time",
    Date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: name === "Salary" ? Number(value) : value, // Convert Salary to number
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://secure-fireworks-ad3f3462ec.strapiapp.com/api/jobs", { data: job });
      alert("Job Posted Successfully!");
      setJob({ // Clear form fields after successful submission
        Title: "",
        Description: "",
        Location: "",
        Salary: "",
        Skills: "",
        Job_type: "Full-time",
        Date: "",
      });
    } catch (error) {
      console.error("Error posting job:", error.response?.data || error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="job-posting-container d-flex justify-content-center align-items-center min-vh-100">
        <div className="form-card p-4 w-50">
          <h2 className="text-center text-white mb-4">Post a Job</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-wrap">
            {/* Left Side */}
            <div className="form-left pe-lg-3 w-50">
              <input type="text" name="Title" placeholder="Job Title" value={job.Title} onChange={handleChange} required />
              <textarea name="Description" placeholder="Job Description" value={job.Description} onChange={handleChange} required />
              <input type="text" name="Location" placeholder="Location" value={job.Location} onChange={handleChange} required />
            </div>

            {/* Right Side */}
            <div className="form-right ps-lg-3 w-50">
              <input type="number" name="Salary" placeholder="Salary" value={job.Salary} onChange={handleChange} required />
              <input type="text" name="Skills" placeholder="Skills (comma-separated)" value={job.Skills} onChange={handleChange} required />
              <select name="Job_type" value={job.Job_type} onChange={handleChange}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
              <input type="date" name="Date" value={job.Date} onChange={handleChange} required />
            </div>

            {/* Full-width button */}
            <div className="w-100 mt-3">
              <button type="submit" className="btn btn-glossy w-100">Post Job</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobPosting;
