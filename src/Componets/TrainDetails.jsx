import Title from "./Title";

export default function TrainDetails () {
    return<>
        <div className={"m-4"}>
            <Title text={<><i className={"bi-info"}/> Information sur la ramme</>}/>
            <Title text={<><i className={"bi-list"}/> L'histoire des pannes</>}/>
            <div className={"d-flex justify-content-end"}>
                <button className={"btn btn-warning me-2"}><i className={"bi-search"}/> Recevoire un releve</button>
                <button className={"btn btn-success"}><i className={"bi-file-binary"}/> Export</button>
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