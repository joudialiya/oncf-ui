import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./style.css"
import TrainList from "./TrainList";
import Header from "./Header";
import  "bootstrap-icons/font/bootstrap-icons.css"
import TrainDetails from "./TrainDetails";
import BreakdownReference from "./BreakdownReference";

export default function Application() {
    return <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<TrainList list={[1, 0, 3, 2]}/> }/>
                <Route path={"/reference"} element={<BreakdownReference/>}/>
                <Route path={"/details/:id"} element={<TrainDetails/>}/>
            </Routes>
        </BrowserRouter>
    </>
}