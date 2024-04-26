import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer2";

const EmbeddedSystemsPage = () => {
    // Array of video URLs
    const videos = [
        "https://www.youtube.com/embed/3v0J0Em02FM?si=dC9-p465xDZhhmvP",
        "https://www.youtube.com/embed/oPn_adlC1Q0?si=rpFze8zf57ZLlbqp",
        "https://www.youtube.com/embed/3v0J0Em02FM?si=dC9-p465xDZhhmvP",
        "https://www.youtube.com/embed/oPn_adlC1Q0?si=rpFze8zf57ZLlbqp"
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
            title: "Introduction to Embedded Systems",
            content: "Embedded systems are specialized computing systems designed to perform dedicated functions within larger systems or devices. They are typically built around microcontrollers or microprocessors and are used in a wide range of applications, including consumer electronics, industrial automation, automotive systems, and medical devices. Embedded systems often operate in real-time and are optimized for performance, power consumption, and cost."
        },
        {
            title: "Embedded Systems Design",
            content: "Embedded systems design involves the development of hardware and software components that work together to achieve specific functionality. Hardware design includes selecting components, designing circuitry, and prototyping printed circuit boards (PCBs). Software design involves writing firmware or low-level code to control hardware peripherals, implement algorithms, and interface with external devices. Embedded systems designers must consider factors such as power consumption, memory usage, and real-time performance during the design process."
        },
        {
            title: "Embedded Systems Programming",
            content: "Programming embedded systems requires knowledge of programming languages such as C, C++, and assembly language, as well as an understanding of the target hardware architecture. Embedded systems programmers write code to initialize hardware, handle interrupts, manage memory, and implement application logic. They often use development tools such as compilers, debuggers, and emulators to test and debug their code on target hardware."
        },
        {
            title: "Applications of Embedded Systems",
            content: "Embedded systems have diverse applications in various industries, including consumer electronics, automotive, healthcare, and telecommunications. In consumer electronics, embedded systems power devices such as smartphones, smartwatches, and home appliances, providing functionality such as user interfaces, connectivity, and multimedia capabilities. In automotive systems, embedded systems control functions such as engine management, vehicle stability, and driver assistance systems, enhancing safety and performance. In healthcare, embedded systems are used in medical devices such as pacemakers, insulin pumps, and diagnostic equipment, enabling monitoring, treatment, and diagnosis of medical conditions. In telecommunications, embedded systems are employed in networking equipment, wireless devices, and base stations, facilitating communication and connectivity."
        }
    ];    

    // Difficult words with their definitions
    const difficultWords = {
        "microcontrollers": "Small computers on a single integrated circuit containing a processor core, memory, and programmable input/output peripherals.",
        "peripherals": "Devices or components connected to a computer system that provide input/output capabilities, such as keyboards, mice, monitors, and printers.",
        "prototyping": "The process of creating a preliminary model or version of a product to test and evaluate its design.",
        "firmware": "Software that is embedded into hardware devices to control their operation and functionality.",
        "real-time": "Operating or occurring without noticeable delay; immediate or instantaneous.",
        "interrupts": "Signals sent by hardware or software to interrupt the normal flow of program execution and request attention from the processor.",
        "compilers": "Software programs that translate high-level programming languages into machine code or executable code.",
        "emulators": "Software or hardware systems that replicate the behavior of another computer system or device.",
        "debuggers": "Tools or programs used by software developers to identify and fix errors or bugs in their code.",
        "connectivity": "The ability of devices or systems to communicate or exchange data with each other, typically over a network."
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
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", cursor: "pointer", transition: "box-shadow 0.3s", marginTop:"50px" }} onMouseOver={(e) => e.target.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"} onMouseOut={(e) => e.target.style.boxShadow = ""}>Embedded Systems</h1>
                <div style={{ position: "relative", padding: "20px", marginBottom: "20px" }}>
                    {/* Previous Video Arrow */}
                    <button onClick={goToPreviousVideo} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: "1", background: "none", border: "none", fontSize: "24px", color: "#F1E3C8", cursor: "pointer" }}>&lt;</button>
                    {/* Video Player Component */}
                    <iframe
                        width="560"
                        height="315"
                        src={videos[currentVideoIndex]}
                        title="Embedded Systems Video"
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

export default EmbeddedSystemsPage;
