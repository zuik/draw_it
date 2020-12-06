import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";



class DrawingBoard extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div>
            <CanvasDraw onChange={(e) => { this.props.setBoard(this.myRef.current.getSaveData()) }} ref={this.myRef}></CanvasDraw>
        </div>;
    }
}

function App() {
    const [board, setBoard] = useState("{}");
    const parsedJSON = JSON.parse(board);
    const code = JSON.stringify(parsedJSON, null, 2);

    return (<div>
        <DrawingBoard setBoard={setBoard} />
        <pre>
            {code}
        </pre>
    </div>)
}

export default App;
