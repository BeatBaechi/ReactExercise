import React from "react";
import { AppState } from "../state/app.state";

interface StockDisplayProperties {
    appState: AppState;
    stockValue: number;
}

export class StockDisplay extends React.Component<StockDisplayProperties> {
    
    render() {
        return <div key={this.props.stockValue}> {this.props.stockValue}</div>
    }
}