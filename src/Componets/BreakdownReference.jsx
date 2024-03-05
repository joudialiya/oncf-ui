import Title from "./Title";

export default function BreakdownReference() {
    return <>
        <div className={"p-4"}>
            <Title text={<><i className={"bi-code"}/> Reference des pannes</>}/>
            <div className={"d-flex justify-content-end"}>
                <button className={"btn btn-success"}><i className={"bi-file-binary"}/> Export</button>
            </div>
            <hr/>
        </div>
    </>
}