import { useEffect, useState } from "react";
import { AppState } from "../state/app.state";

interface StockDisplayProperties {
    appState: AppState;
}

export function StockDisplay(properties: StockDisplayProperties) {
        const [stockValue, setStockValue] = useState(properties.appState.stockValue);

        useEffect(() => {
           setStockValue(properties.appState.stockValue);
           console.log('Changed');
        });

        return <div>{stockValue}</div>
}

// export class StockDisplay extends React.Component<StockDisplayProperties> {
//     render() {
//         const [stockValue, setStockValue] = useState(this.props.appState.stockValue);

//         useEffect(() => {
//            setStockValue(this.props.appState.stockValue);
//         });

//         return <div> {stockValue}</div>
//     }
// }