import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer2";

const RoboticsPage = () => {
    // Array of video URLs
    const videos = [
        "https://www.youtube.com/embed/htjRUL3neMg?si=V0hNthc_9wzSzLPY",
        "https://www.youtube.com/embed/HvMQONnCXbE?si=oA3KuJfn1b-uqTR4",
        "https://www.youtube.com/embed/htjRUL3neMg?si=V0hNthc_9wzSzLPY",
        "https://www.youtube.com/embed/HvMQONnCXbE?si=oA3KuJfn1b-uqTR4"
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Function to handle moving to the previous video
    const goToPreviousVideo = () => {
        const newIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        setCurrentVideoIndex(newIndex);
    };

    // Function to handle moving to the next video
    const goToNextVideo = () => {
        const newIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(newIndex);
    };

    const sections = [
        {
            title: "Introduction to Robotics",
            content: "Robotics is an interdisciplinary field that involves the design, construction, operation, and use of robots. It combines principles from mechanical engineering, electrical engineering, computer science, and other disciplines to create intelligent machines capable of performing tasks autonomously or with human guidance. Robotics has applications in various industries, including manufacturing, healthcare, transportation, and entertainment."
        },
        {
            title: "Robotics Components and Sensors",
            content: "Robots consist of several key components, including actuators, sensors, controllers, and end-effectors. Actuators are devices that provide motion to the robot, such as motors and hydraulic cylinders. Sensors allow the robot to perceive its environment and make decisions based on sensory input, including cameras, lidar, and proximity sensors. Controllers are the brains of the robot, responsible for processing sensory information and generating commands for the actuators. End-effectors are tools or devices attached to the robot's manipulator for interacting with the environment, such as grippers, welders, and sensors."
        },
        {
            title: "Robotics Programming and Control",
            content: "Robotics programming involves writing software to control the behavior of robots. This can range from simple scripts to complex algorithms for navigation, manipulation, and decision-making. Programming languages commonly used in robotics include C++, Python, and ROS (Robot Operating System). Control theory is also essential in robotics, providing mathematical tools and techniques for designing controllers that regulate the robot's motion and behavior. PID (Proportional-Integral-Derivative) control is a widely used technique for controlling the position, velocity, and acceleration of robotic systems."
        },
        {
            title: "Applications of Robotics",
            content: "Robotics has diverse applications across various domains, including industrial automation, healthcare, agriculture, and space exploration. In manufacturing, robots are used for tasks such as assembly, welding, painting, and quality inspection, increasing efficiency and precision while reducing costs. In healthcare, robots assist with surgery, rehabilitation, and patient care, enhancing the capabilities of medical professionals and improving patient outcomes. In agriculture, robots are employed for planting, harvesting, and monitoring crops, increasing productivity and sustainability. In space exploration, robots are used for planetary exploration, satellite servicing, and space station maintenance, enabling scientific discovery and space missions."
        }
    ];    

    // Difficult words with their definitions
    const difficultWords = {
        "interdisciplinary": "Involving two or more academic disciplines or fields of study.",
        "autonomously": "Having the capability to act independently or without external control.",
        "end-effectors": "The part of a robotic manipulator that interacts with the environment, such as grippers or tools.",
        "proportional": "Corresponding in size or amount to something else.",
        "integral": "Necessary to make a whole complete; essential or fundamental.",
        "derivative": "A quantity representing the rate of change of another quantity.",
        "precision": "The quality, condition, or fact of being exact and accurate.",
        "rehabilitation": "The action of restoring someone to health or normal life through training and therapy after imprisonment, addiction, or illness.",
        "productivity": "The effectiveness of productive effort, especially in industry, as measured in terms of the rate of output per unit of input.",
        "sustainability": "The ability to be maintained at a certain rate or level."
    };

    // Component for rendering content with popups
    const ContentWithPopups = ({ content }) => {
        const words = content.split(/\b/);

        const handleWordClick = (word) => {
            if (difficultWords[word]) {
                window.alert(difficultWords[word]);
            }
        };

        return (
            <div>
                {words.map((word, index) => (
                    <span
                        key={index}
                        onClick={() => handleWordClick(word)}
                        style={difficultWords[word] ? { textDecoration: "underline", cursor: "pointer" } : {}}
                    >
                        {word}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div style={{ minHeight: "100vh", color: "#F1E3C8" }}>
            <Navbar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Video Player */}
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", cursor: "pointer", transition: "box-shadow 0.3s", marginTop:"50px" }} onMouseOver={(e) => e.target.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"} onMouseOut={(e) => e.target.style.boxShadow = ""}>Robotics</h1>
                <div style={{ position: "relative", padding: "20px", marginBottom: "20px" }}>
                    {/* Previous Video Arrow */}
                    <button onClick={goToPreviousVideo} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: "1", background: "none", border: "none", fontSize: "24px", color: "#F1E3C8", cursor: "pointer" }}>&lt;</button>
                    {/* Video Player Component */}
                    <iframe
                        width="560"
                        height="315"
                        src={videos[currentVideoIndex]}
                        title="Robotics Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
                    ></iframe>
                    {/* Next Video Arrow */}
                    <button onClick={goToNextVideo} style={{ position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", zIndex: "1", background: "none", border: "none", fontSize: "24px", color: "#F1E3C8", cursor: "pointer" }}>&gt;</button>
                </div>
                {/* Page Heading */}
                {/* Information Sections */}
                <div style={{ width: "80%" }}>
                    {sections.map((section, index) => (
                        <div key={index} style={{ marginBottom: "30px" }}>
                            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{section.title}</h2>
                            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                <ContentWithPopups content={section.content} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoboticsPage;
