import {Link} from "react-router-dom";

export default function TrainElement ({train}) {
    return <>
        <div className={"train-element flex-fill m-4 p-3 border border-2 border-black rounded shadow-sm"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col d-flex justify-content-center align-items-center"}>
                        <img className={"train-element-img"} src={"/img.png"}/>
                    </div>
                    <div className={"col d-flex justify-content-center align-items-center"}>
                        <div>
                            <div>Identifiant</div>
                            <div>Detail-0</div>
                            <div>
                                <Link className={"btn btn-success"} to={"/details/1"}>DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}