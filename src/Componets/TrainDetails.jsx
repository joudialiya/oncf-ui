import Title from "./Title";
import {Doughnut} from "react-chartjs-2";

export default function TrainDetails () {
    const data = {
        labels: ['CCU', 'UGS', "TCU", "NOEUD"],
        datasets: [
            {
                data: [2, 1, 4, 5],
                backgroundColor: ["red", "orange", "green", "darkblue"]
            },
        ],
    };
    return<>
        <div className={"m-4"}>
            <Title text={<><i className={"bi-info"}/> Information sur la rame</>}/>
            <div className={"d-flex m-4"}>
                <div className={"m-4 container w-25 shadow"}>
                    <div className={"row justify-content-center align-items-start bg-success-subtle"}>Connectivite</div>
                    <div className={"row"}>
                        <div className={"col"}>M</div>
                        <div className={"col"}><i className={"bi-wifi"} style={{color: "green"}}></i></div>
                        <div className={"col"}>(172.0.0.1)</div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>MH</div>
                        <div className={"col"}><i className={"bi-wifi-off"} style={{color: "red"}}></i></div>
                        <div className={"col"}>(n/a)</div>
                    </div>
                </div>
                <div className={"w-25"}><Doughnut data={data}/></div>

            </div>

            <Title text={<><i className={"bi-list"}/> L'historique des pannes</>}/>
            <div className={"d-flex justify-content-end"}>
                <button className={"btn btn-warning me-2"}><i className={"bi-search"}/> Recevoir un releve</button>
                <button className={"btn btn-success"}><i className={"bi-file-binary"}/> Exporter </button>
            </div>
            <hr/>
            <div className={"bg-info text-white p-2 rounded"}>
                <div>
                    <b>Zone de filtrage:</b>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="datetime-local"/>
                    <input className="form-control me-2" type="datetime-local"/>
                    <button className="btn btn-dark" type="submit">Filtrer</button>
                </form>
            </div>
            <br/>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th># Identifiant</th>
                    <th>Date</th>
                    <th>Code de panne</th>
                    <th>Description de panne</th>
                </tr>
                </thead>
            </table>
        </div>
    </>
}