import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer2";

const CircuitDesignPage = () => {
    // Array of video URLs
    const videos = [
        "https://www.youtube.com/embed/FNLG_Y3QWVw?si=BcGicgZhExKpRBL6",
        "https://www.youtube.com/embed/haaRTKm8ePQ?si=9iURV6JrKFH2JTyA",
        "https://www.youtube.com/embed/FNLG_Y3QWVw?si=BcGicgZhExKpRBL6",
        "https://www.youtube.com/embed/haaRTKm8ePQ?si=9iURV6JrKFH2JTyA"
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
            title: "Introduction to Circuit Design",
            content: "Circuit design is a fundamental aspect of electrical engineering, providing the backbone for the creation of electronic devices and systems. It encompasses the process of conceptualizing, designing, and implementing circuits to achieve specific functionality or objectives."
        },
        {
            title: "Basic Circuit Components",
            content: "Basic circuit components are the building blocks of electronic circuits, each serving a specific purpose in the design and operation of electrical systems. **Resistors**, **capacitors**, **inductors**, and **semiconductor devices** such as diodes and transistors are among the most common components used in circuit design."
        },
        {
            title: "Circuit Analysis Techniques",
            content: "Circuit analysis is the process of determining the behavior of electrical circuits using mathematical and computational methods. It involves analyzing the voltage, current, and power relationships within a circuit to understand its operation and performance."
        },
        {
            title: "Advanced Circuit Design Concepts",
            content: "Advanced circuit design concepts push the boundaries of traditional circuit design techniques to achieve higher performance, efficiency, and functionality in electronic systems. These concepts build upon the fundamental principles of circuit theory and explore new approaches to circuit design and implementation."
        }
    ];    

    // Difficult words with their definitions
    const difficultWords = {
        "fundamental": "Forming a necessary base or core; of central importance.",
        "conceptualizing": "Forming a concept or idea of something.",
        "encompasses": "Includes or contains within its scope.",
        "specific": "Clearly defined or identified.",
        "functionality": "The quality of being suited to serve a purpose well.",
        "objectives": "Goals or aims to be achieved.",
        "building blocks": "Basic elements or components.",
        "electrical": "Relating to electricity or the use of electric currents.",
        "operation": "The process or manner of functioning.",
        "relationship": "The way in which two or more concepts, objects, or people are connected.",
        "performance": "The execution or accomplishment of a task or action.",
        "boundaries": "Limits that define the extent of something."
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
        <div style={{ backgroundColor: "transparent", minHeight: "100vh", color: "#F1E3C8" }}>
            <Navbar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", marginTop: "50px", marginBottom: "50px", cursor: "pointer", transition: "box-shadow 0.3s" }} onMouseOver={(e) => e.target.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"} onMouseOut={(e) => e.target.style.boxShadow = ""}>CIRCUIT DESIGN</h1>
                {/* Video Player */}
                <div style={{ position: "relative", padding: "20px", marginBottom: "20px" }}>
                    {/* Previous Video Arrow */}
                    <button onClick={goToPreviousVideo} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: "1", background: "none", border: "none", fontSize: "24px", color: "#F1E3C8", cursor: "pointer" }}>&lt;</button>
                    {/* Video Player Component */}
                    <iframe
                        width="560"
                        height="315"
                        src={videos[currentVideoIndex]}
                        title="Circuit Design Video"
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

export default CircuitDesignPage;
