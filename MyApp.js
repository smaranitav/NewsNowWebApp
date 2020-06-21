import React from "react";
import Navigation from "./Navigation";
import {
    BrowserRouter
} from "react-router-dom";

class MyApp extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Navigation />
                </BrowserRouter>
            </div>
        )
    }


}
export default MyApp;
