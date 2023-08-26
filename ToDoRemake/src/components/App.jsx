import React, {useState} from "react"

function App () {

    const [inputText, setInputText] = useState("")

    function handleChange(event) {
        const newValue = event.target.value
        setInputText(newValue)
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>List of things to do</h1>
            </div>
            <div className="form">
                <input type="text" value={inputText}/>
                <button onClick={handleChange}>
                    <span>Add</span>
                    </button>
                    </div>
                    <div>
                        <ul>
                            <li>An Item</li>
                        </ul>
                    </div>
        </div>
    )
}

export default App