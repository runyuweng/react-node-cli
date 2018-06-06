import * as React from "react";

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps> {
    render() {
        return (
            <div>
                <p>Hi, welcome to react-node</p>
            </div>
        )
    }
}