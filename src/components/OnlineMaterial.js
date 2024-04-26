import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer2";

// Import images for each course
import image1 from "../images/image1.jpeg";
import image2 from "../images/image1.jpeg";
import image3 from "../images/image1.jpeg";
import image4 from "../images/image1.jpeg";

const OnlineMaterialPage = () => {
    // Define course data for electronics courses
    const electronicsCourses = [
        {
            title: "Robotics",
            description: "Learn about robotics and automation.",
            longDescription: "In this course, you will delve into the fascinating world of robotics and automation. Explore concepts such as kinematics, dynamics, and control algorithms.",
            link: "/robotics",
            imageUrl: image1
        },
        {
            title: "Signal Processing",
            description: "Explore signal processing techniques.",
            longDescription: "Signal processing is a fundamental aspect of many fields, including telecommunications, audio processing, and image processing. In this course, you will learn about various signal processing techniques and their applications.",
            link: "/signal",
            imageUrl: image2
        },
        {
            title: "Circuit Design",
            description: "Master the art of circuit design.",
            longDescription: "Circuit design is the foundation of electronics engineering. In this comprehensive course, you will learn about circuit theory, analysis, and design principles. Gain hands-on experience with circuit simulation software and practical design projects.",
            link: "/circuit",
            imageUrl: image3
        },
        {
            title: "Embedded Systems",
            description: "Discover the world of embedded systems.",
            longDescription: "Embedded systems are ubiquitous in modern technology, powering everything from smartphones to industrial machinery. In this course, you will explore the design and development of embedded systems, including microcontroller programming, real-time operating systems, and interfacing with peripherals.",
            link: "/embedded",
            imageUrl: image4
        }
    ];

    // State to keep track of which course's description is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to handle expanding/collapsing description
    const handleExpandDescription = (index) => {
        if (expandedIndex === index) {
            // If clicked course is already expanded, collapse it
            setExpandedIndex(null);
        } else {
            // Otherwise, expand the clicked course
            setExpandedIndex(index);
        }
    };

    return (
        <div style={{ backgroundColor: "#393d32", minHeight: "100vh", color: "#393D32"}}>
            <Navbar />
            <div style={{ padding: "20px" }}>
                {electronicsCourses.map((course, index) => (
                    <div key={index} style={{ marginBottom: "20px", background: "linear-gradient(to top, #FFCFC0, #F1E3C8)", marginLeft:"100px", marginRight:"100px", borderRadius:"10px"}}>
                        <div onClick={() => handleExpandDescription(index)} style={{ cursor: "pointer" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px",backdropFilter: "blur(10px)", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                                <img src={course.imageUrl} alt={course.title} style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "20px" }} />
                                <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{course.title}</h2>
                                {expandedIndex === index ? (
                                    <div style={{ textAlign: "center" }}>
                                        <p>{course.longDescription}</p>
                                        <Link to={course.link} style={{ textDecoration: "none", color: "#393D32" }}>
                                            <button style={{ padding: "10px 20px", backgroundColor: "#393D32", color: "#F1E3C8", border: "none", borderRadius: "5px", cursor: "pointer", margin: "10px" }}>Know More</button>
                                        </Link>
                                        <button onClick={() => handleExpandDescription(index)} style={{ padding: "10px 20px", backgroundColor: "#F1E3C8", color: "#393D32", border: "none", borderRadius: "5px", cursor: "pointer" }}>Show Less</button>
                                    </div>
                                ) : (
                                    <p>{course.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default OnlineMaterialPage;
