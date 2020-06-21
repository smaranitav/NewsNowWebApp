import React from 'react';
import MyApp from './MyApp';
import ReactDOM from 'react-dom'

class ParentPage extends React.Component{
    render(){
        return(
        <div className="App">
            <MyApp />
        </div>)
    }
}

ReactDOM.render(<ParentPage />, document.getElementById("root"))