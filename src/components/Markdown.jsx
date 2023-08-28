import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
// This component reads the markdown file and renders it.
// It will be used in the Article component.
// The file is passed as a prop, the format is a string of the path to the file.
const Markdown = ({ filePath }) => {
    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
        fetch("/markdown/" + filePath)
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch((err) => {
                console.error('Error fetching markdown!', err);
            });
    }, []);
    return (
        <ReactMarkdown>{markdown}</ReactMarkdown>
    )
}

export default Markdown