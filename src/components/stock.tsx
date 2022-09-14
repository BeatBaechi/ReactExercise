import React from "react";
import { AppState } from "../state/app.state";
import { StockChanger } from "./stock-changer";
import { StockDisplay } from "./stock-display";

const state: AppState = {
    stockValue: 0,
}

export class StockPage extends React.Component {

    /**
     *
     */
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { stockValue: 0 };
    }

    handleChange(value: number) {
        this.setState({ stockValue: value })
    }

    render() {
        return <div>
        <StockChanger appState={state} handleChange={this.handleChange} ></StockChanger>
        <StockDisplay stockValue={state.stockValue} appState={state} ></StockDisplay>
        </div>
    }
}