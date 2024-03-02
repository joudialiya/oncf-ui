import {Link} from "react-router-dom";

export default function Header() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={"/image.png"} width={128}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link"><i className={"bi-list"}/> Liste
                                des rames enregistrees</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/reference"} className="nav-link">
                                <i className={"bi-code"}/> Reference des pannes</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Rechercher"
                               aria-label="Search"/>
                        <button className="btn btn-dark" type="submit">Rechercher</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
}