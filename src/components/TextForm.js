import React, { useState } from 'react'





export default function TextForm(props) {
    
    const handleUpClick = () => {
        //console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = () => {
        //console.log("upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        //console.log("upper case was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy = ()=>{
        var texti  = document.getElementById("myBox");
        texti.select();
        navigator.clipboard.writeText(texti.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }



    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text");
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className= "btn btn-primary mx-3 my-2" onClick={handleUpClick}>UPPER CASE</button>
                <button className= "btn btn-primary mx-3 my-2" onClick={handleLoClick}>Lower Case</button>
                <button className= "btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className=  "btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
                <button className= "btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-5" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                    <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
                    <p>Average Time To Read {0.08 * text.split(" ").length}s</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"enter something to review"}</p>
                    <h2><b>What is WordCounter?</b></h2>
                    <p>Apart from counting words and characters, our online editor can help you to improve word choice and writing style,
                        and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.

                        Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.

                        In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.

                        In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.

                        Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</p>
            </div>
        </>
    )
}
