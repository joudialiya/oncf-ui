import TrainElement from "./TrainElement";
import Title from "./Title";

export default function TrainList ({list}) {
    const elements = list.map((train) => <TrainElement train={train}/>);
    return <>
        <div className={"m-4"}>
            <Title text={<><i className={"bi-list"}/> Liste des rammes enregistrees</>}/>
            <div className={"d-flex flex-wrap"}>
                {elements}
            </div>
        </div>

    </>
}