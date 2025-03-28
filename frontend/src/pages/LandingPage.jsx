import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            {/* Hero Section */}
            <div className="container text-left mt-5">
                <h1 className="fw-bold text-primary">Welcome to <span className="text-dark">GT Portal</span></h1>
                <p className="lead text-secondary">
                    Connecting skilled professionals with the right opportunities. Whether you're looking for your next career move 
                    or seeking exceptional talent for your company, GT Portal has you covered.
                </p>
                <div className="mt-3">
                    <Link to="/signup" className="btn btn-success m-2 shadow">Sign Up as Job Seeker</Link>
                    <Link to="/signup" className="btn btn-warning m-2 shadow">Sign Up as Employer</Link>
                </div>
            </div>

            {/* Why Choose Us - F-Pattern Layout */}
            <div className="container mt-5">
                <h2 className="text-left fw-bold text-dark">Why Choose GT Portal?</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg bg-light">
                            <h4 className="text-primary">🔹 Verified & Secure Hiring</h4>
                            <p><strong>KYC Verification</strong> ensures authenticity and minimizes fraud.</p>
                            <p><strong>Employer Badges</strong> highlight trusted companies for candidates.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg bg-warning text-dark">
                            <h4>🎯 AI-Powered Matching</h4>
                            <p><strong>Skill-Based Coding Games</strong> help showcase real abilities.</p>
                            <p><strong>Employee Filtering System</strong> enables targeted candidate selection.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg bg-success text-white">
                            <h4>🚀 Career Growth & Job Porting</h4>
                            <p><strong>Qualification Ratings</strong> give insights into candidate expertise.</p>
                            <p><strong>Job Porting Feature</strong> allows employees to switch jobs seamlessly.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="container mt-5">
                <h2 className="text-left fw-bold">How It Works</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm bg-info text-white">
                            <h4>For Job Seekers</h4>
                            <ul>
                                <li><strong>Create Your Profile</strong> – Showcase your skills, experience, and career goals.</li>
                                <li><strong>Explore Opportunities</strong> – AI-driven recommendations for the best job matches.</li>
                                <li><strong>Apply & Get Hired</strong> – Track applications, take skill tests, and land your dream job.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm bg-danger text-white">
                            <h4>For Employers</h4>
                            <ul>
                                <li><strong>Register & Verify</strong> – Complete KYC and get an Employer Badge.</li>
                                <li><strong>Post Job Listings</strong> – Define requirements and desired skills.</li>
                                <li><strong>Screen & Hire</strong> – Use filters, coding challenges, and reviews to select top talent.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-left mt-4">
                    <Link to="/signup" className="btn btn-dark btn-lg shadow">Sign Up Now</Link>
                </div>
            </div>

            {/* Testimonials */}
            <div className="container mt-5">
                <h2 className="text-left fw-bold text-dark">What Our Users Say</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm bg-light">
                            <blockquote className="blockquote">
                                <p>"GT Portal helped me land my dream job within weeks! The skill-based tests made my application stand out."</p>
                                <footer className="blockquote-footer">Aisha K., Software Engineer</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm bg-light">
                            <blockquote className="blockquote">
                                <p>"We found top-tier talent faster than ever. The filtering system and KYC verification make hiring seamless."</p>
                                <footer className="blockquote-footer">Mark R., Hiring Manager</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="text-left mt-4">
                    <Link to="/signup" className="btn btn-outline-primary btn-lg shadow">Join Now & Experience the Difference!</Link>
                </div>
            </div>

            {/* Final Call-to-Action */}
            <div className="container text-left mt-5">
                <h2 className="fw-bold">Ready to Take the Next Step?</h2>
                <p>Find your perfect job or hire top talent today. Register now and unlock a world of opportunities!</p>
                <div className="mt-3">
                    <Link to="/signup" className="btn btn-success m-2 btn-lg shadow">Find Your Dream Job</Link>
                    <Link to="/signup" className="btn btn-warning m-2 btn-lg shadow">Hire Top Talent</Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;
