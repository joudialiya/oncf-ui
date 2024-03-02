import {Link} from "react-router-dom";

export default function TrainElement ({train}) {
    return <>
        <div className={"train-element flex-fill m-4 p-4 border border-2 border-black rounded shadow-sm"}>
            <div className={"container "}>
                <div className={"row"}>
                    <div className={"col"}>
                        <img src={"/img.png"} width={64}/>
                    </div>
                    <div className={"col"}>
                        <div>Identifiant</div>
                        <div>Detail-0</div>
                        <div>
                            <Link className={"btn btn-success"} to={"/details/1"}>DETAILS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}