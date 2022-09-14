import React from "react";
import { AppState } from "../state/app.state";

interface StockChangerProperties {
    appState: AppState;
    handleChange: (value: number) => void;
}

export class StockChanger extends React.Component<StockChangerProperties> {
    render() {
        return <div> 
            <button onClick={() => this.increase()}>Increase</button> 
            <button onClick={() => this.decrease()}>Decrease</button>
        </div>
    }

    increase() { 
        this.props.appState.stockValue++;
        this.props.handleChange(this.props.appState.stockValue);
    }

    decrease() {
        this.props.appState.stockValue--;
        this.props.handleChange(this.props.appState.stockValue);
    }
}