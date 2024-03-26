import {Link} from "react-router-dom";
import {useState} from "react";

export default function TrainElement ({train}) {
    return <>
        <div className={"train-element m-3 p-3 border border-2 border-black rounded shadow-sm"}>
                <div className={"d-flex"}>
                    <div className={"col d-flex justify-content-center align-items-center position-relative"}>
                        <div className={"text-center"} style={{fontSize: 64, color: (train.state)? "#E17A13": "gray"}}>
                            <i className="bi bi-train-front-fill"></i>
                        </div>
                        <div className={"position-absolute"} style={{left: 0, top: 10}}>
                            <i className={"bi-circle-fill position-absolute"} style={{left: 0,color: "red", fontSize: 20}}/>
                            <div className={"position-absolute"} style={{left: 5, top: 2, color: "white"}}>1</div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className={"m-1"}>Z2M-117</div>
                        <div className={"m-1"}>
                            <Link className={"link-underline-success link-underline-opacity-0"} to={"/details/1"}>
                                Events du jour (1)
                            </Link>
                        </div>
                        <div className={"m-1"}>
                            <Link className={"btn"} style={{color: "white",backgroundColor: (train.state)? "#E17A13": "gray"}} to={"/details/1"}>Details</Link>
                        </div>
                    </div>
            </div>
        </div>
    </>
}