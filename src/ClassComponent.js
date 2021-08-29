import React from 'react';

class ClassComponent extends React.Component {
    //    constructor() {
    //        super();
    //        this.state = {
    //            counter: 0
    //        }
    //        this.increase=this.increase.bind(this);
    //   }
    state = {
        counter: 0
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillMount(){
        console.log("componentWillUnmount");
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    decrease = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.increase()}>Increase</button>
                <button onClick={() => this.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default ClassComponent;