import React, { useState } from "react";
const App = () => {
    const [text, setText] = useState(""); // State to store user input
    const [binary, setBinary] = useState(""); // State to store binary output

    // Function to convert text to binary
    const convertToBinary = () => {
        // Convert each character to its binary equivalent
        const binaryText = text
            .split("") // Split the text into characters
            .map((char) => {
                return char.charCodeAt(0).toString(2).padStart(8, "0"); // Convert char to binary and pad it to 8 bits
            })
            .join(" "); // Join all binary values with space
        setBinary(binaryText); // Set the binary state
    };

    return (
        <div className="flex flex-col justify-center m-32 p-20 border-4">
            <h1 className="text-black font-bold mb-4">Programming Translator</h1>
            <p className="mb-4">Enter your idea:</p>
            <input
                type="text"
                className="inputfield justify-center bg-black text-white mb-4 p-2 rounded-md"
                value={text}
                onChange={(e) => setText(e.target.value)} // Update state on input change
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={convertToBinary} // Trigger conversion on button click
            >
                Convert to Binary
            </button>
            {binary && (
                <div className="mt-4 p-2 bg-gray-200 text-black rounded">
                    <p className="font-bold">Binary Code:</p>
                    <p>{binary}</p>
                </div>
            )}
        </div>
    );
};

export default App;