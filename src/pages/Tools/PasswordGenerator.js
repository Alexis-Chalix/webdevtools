import { useEffect } from "react";

function PasswordGenerator() {
    useEffect(() => {
        document.title = "WebDevTools - Password Generator";
    });

    return (
        <p>Password Generator</p>
    )
}

export default PasswordGenerator;