import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./style.css"
import TrainList from "./TrainList";
import Header from "./Header";
import  "bootstrap-icons/font/bootstrap-icons.css"
import TrainDetails from "./TrainDetails";
import BreakdownReference from "./BreakdownReference";
import {
    ArcElement,
    Chart as ChartJS,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement, LineElement
} from "chart.js";
import ReportPage from "./ReportPage";
ChartJS.register(
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend);

export default function Application() {
    return <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<TrainList list={[{id:1, state:true}, {id:1, state:false}, {id:1, state:false}, {id:1, state:false}]}/> }/>
                <Route path={"/reference"} element={<BreakdownReference/>}/>
                <Route path={"/details/:id"} element={<TrainDetails/>}/>
                <Route path={"/report"} element={<ReportPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
}