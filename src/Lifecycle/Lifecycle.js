import React from 'react';
import LifecycleFunc from './LifecycleFunc';

export default class Lifesycle extends React.Component {

    constructor(props){
        super();
        this.state = {
            s1:0
        };
    }

    buttonHandler = () => {
        let val = this.state.s1;
        val++;
        this.setState({s1:val});
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        //return({'s1': props.arg})
    }

    componentDidMount() {
        console.log('Запустится один раз после отрисовки компонента')
    }

    componentDidUpdate() {
        console.log('Запустится после каждого изменения компонента')
    }

    render () {
        return(
            <>
                <h2>ООП подход</h2>
                <div>
                    <button onClick = {this.buttonHandler}>
                        Push
                    </button>
                </div>
                <div>
                    {this.state.s1}
                </div>
                <hr></hr>
                <h2>Функциональный подход</h2>
                <LifecycleFunc />
            </>
        )
    }
}