import { Link } from "react-router-dom"

import "./PageNotFound.css"

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h2>404 Page Not Found</h2>
            <p>Looks like you are lost. Click <Link to={"/"}>here</Link> to go to home page.</p>
        </div>
    )
}

export default PageNotFound