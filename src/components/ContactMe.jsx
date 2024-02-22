import { useEffect } from "react";
import { useState } from "react";
import '../assets/cssComponents/contactMe.css';

export function ContactMe({ setForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);
    const [error, setError] = useState(null);
    const [firstInput, setFirstInput] = useState(false); 

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleTextareaChange(e) {
        setTextArea(e.target.value);
    }

    useEffect(() => {
        if(firstInput) {
            if(name === "") {
                setError("Name cannot be empty");
                return;
            }
    
            if( name.match(/^\d+$/) ) {
                setError("Name cannot start with a number");
                return;
            }
    
            setError(null);
        }

        setFirstInput(true);
    }, [name])

    useEffect(() => {
        if(firstInput) {
            if(email === "") {
                setErrorEmail("Email cannot be empty");
                return;
            }
    
            if( email.match(/^\d+$/) ) {
                setErrorEmail("Email cannot start with a number");
                return;
            }
    
            if( !(email.includes("@")) ) {
                setErrorEmail("Email is not written like that");
                return;
            }
    
            setErrorEmail(null)
        }
        
        setFirstInput(true);
    }, [email])

    return (
        <article className="contact">
            <div>
                <h2 className="headers">Contact Me</h2>

                <button onClick={() => {
                    setForm(false);
                    
                }}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" value={name}
                style={error && {border: "1px solid red"}}
                placeholder="Name"/>
                {
                    error && <p style={{color: "red"}}>{error}</p>
                }

                <input type="email" onChange={handleEmailChange} value={email}
                style={errorEmail && {border: "1px solid red"}}
                placeholder="Email"/>
                {
                    errorEmail && <p style={{color: "red"}}>{errorEmail}</p>
                }
                <textarea 
                value={textArea} 
                onChange={handleTextareaChange} 
                cols="30" 
                rows="5">
                </textarea>
                <input type="submit" value="Send Message"/>
            </form>

        </article>
    )
}