import TrainElement from "./TrainElement";
import Title from "./Title";
import {Doughnut, Line} from "react-chartjs-2";


export default function TrainList ({list}) {
    const elements = list.map((train) => <TrainElement train={train}/>);
    const data = {
        labels: ['Connected', 'Disconnected'],
        datasets: [
            {
                data: [2, 1],
                backgroundColor: ['green', 'red']
            },
        ],
    };
    const dataLine = {
        labels: [23, 24, 25, 26, 27],
        datasets: [{
            label: 'Nombre des anomalies par jour',
            data: [65, 59, 80, 81, 22],
            fill: false,
            borderColor: 'orange',
            tension: 0.2
        }]
    };
    return <>
        <div className={"m-4"}>
            <Title text={<><i className={"bi-list"}/> Liste des rammes enregistrees</>}/>
            <div className={"d-flex flex-wrap"}>
                {elements}
            </div>
            <br/>
            <Title text={<><i className={"bi-list"}/> Statistiques</>}/>
            <div className={"d-flex justify-content-around"} style={{height: 300}}>
                <Doughnut data={data}/>
                <Line data={dataLine}/>
            </div>
        </div>

    </>
}