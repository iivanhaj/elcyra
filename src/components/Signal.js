import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer2";

const SignalProcessingPage = () => {
    // Array of video URLs
    const videos = [
        "https://www.youtube.com/embed/VjuFaPAIOHw?si=HiLI9wgxugKVaZDF",
        "https://www.youtube.com/embed/mexN6d8QF9o?si=2YK3BBblk_kDcUCX",
        "https://www.youtube.com/embed/VjuFaPAIOHw?si=HiLI9wgxugKVaZDF",
        "https://www.youtube.com/embed/mexN6d8QF9o?si=2YK3BBblk_kDcUCX"
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
            title: "Introduction to Signal Processing",
            content: "Signal processing is a field of study that focuses on the analysis, manipulation, and interpretation of signals. It encompasses a wide range of applications, including audio processing, image processing, and communication systems. Signal processing techniques are used to extract useful information from signals, enhance signal quality, and perform various tasks such as filtering, compression, and feature extraction."
        },
        {
            title: "Digital Signal Processing Basics",
            content: "Digital signal processing (DSP) is the use of digital processing techniques to modify or analyze digital signals. It involves converting analog signals into digital form, applying various algorithms to process the digital data, and then converting the processed data back into analog form if required. DSP techniques are widely used in audio and video processing, telecommunications, and control systems."
        },
        {
            title: "Signal Filtering Techniques",
            content: "Signal filtering is a fundamental operation in signal processing that involves removing unwanted noise or artifacts from a signal while preserving the desired information. Filtering techniques can be classified into two main categories: linear filtering and nonlinear filtering. Linear filters such as low-pass filters, high-pass filters, and band-pass filters are commonly used to attenuate or eliminate specific frequency components of a signal."
        },
        {
            title: "Applications of Signal Processing",
            content: "Signal processing has numerous applications across various fields, including audio processing, image processing, speech recognition, medical imaging, radar systems, and wireless communications. In audio processing, signal processing techniques are used for tasks such as noise reduction, equalization, and audio enhancement. In image processing, signal processing techniques are applied to tasks such as image denoising, image segmentation, and image compression."
        }
    ];    

    // Difficult words with their definitions
    const difficultWords = {
        "manipulation": "The action of manipulating something in a skillful manner.",
        "interpretation": "The action of explaining the meaning of something.",
        "enhance": "To improve or increase the quality, value, or extent of something.",
        "compression": "The process of reducing the size of data to save storage space or transmission time.",
        "algorithms": "A set of rules or instructions for solving a problem or accomplishing a task, typically in the form of a computer program.",
        "attenuate": "To reduce the force, effect, or value of something.",
        "denoising": "The process of removing noise from a signal.",
        "segmentation": "The process of dividing an image into multiple segments or regions.",
        "recognition": "The action or process of recognizing or being recognized, especially visually or audibly.",
        "applications": "The practical use or relevance of something in a particular area."
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
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", cursor: "pointer", transition: "box-shadow 0.3s", marginTop:"50px" }} onMouseOver={(e) => e.target.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"} onMouseOut={(e) => e.target.style.boxShadow = ""}>Signal Processing</h1>
                <div style={{ position: "relative", padding: "20px", marginBottom: "20px" }}>
                    {/* Previous Video Arrow */}
                    <button onClick={goToPreviousVideo} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: "1", background: "none", border: "none", fontSize: "24px", color: "#F1E3C8", cursor: "pointer" }}>&lt;</button>
                    {/* Video Player Component */}
                    <iframe
                        width="560"
                        height="315"
                        src={videos[currentVideoIndex]}
                        title="Signal Processing Video"
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

export default SignalProcessingPage;
