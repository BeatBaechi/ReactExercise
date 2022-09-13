import React from "react";
import { AppState } from "../state/app.state";

interface StockChangerProperties {
    appState: AppState;
}

export class StockChanger extends React.Component<StockChangerProperties> {
    render() {
        return <div> 
            <button onClick={() => this.increase()}>Increase</button> 
            <button  onClick={() => {this.props.appState.stockValue--}}>Decrease</button>
        </div>
    }

    increase() { 
        console.log('Increase')
        this.props.appState.stockValue++;
        console.log(this.props.appState.stockValue)
    }
}