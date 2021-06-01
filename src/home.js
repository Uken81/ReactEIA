//Should I find a better name for this module?
import React from 'react';
import { DisplayInputValues } from './inputValues';
import { MakeArr, CreateLabelArray, changeStateArray, CreateValueslArray, inputList } from './arrayCreator';
import { Form } from './form';
import { DisplayInputLabels } from './inputLabels';
import { GetPDF } from './createPDF';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        //Is there a better/automated way to do this??? Many more will need to be added.
        this.state = {
            name: '',
            address: '',
            homePhone: '',
            mobilePhone: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        MakeArr();
        CreateLabelArray();
        CreateValueslArray();

        console.log(inputList);
        console.log(changeStateArray);
    }

    handleSubmit(e) {
        e.preventDefault();

        //Should I move this to seperate component??? I originally had it in the creatState module.  
        const nextState = changeStateArray.reduce((state, key, index) => {
            const inputId = inputList[index];
            console.log(inputId);
            const input = document.getElementById(inputId);
            console.log(input);
            if (!input) {
                // avoid error by try getting value from undefined input
                return state;
            }
            const value = input.value;
            return { ...state, [key]: value };
        }, {});

        this.setState(nextState);

    }

    render() {
        return (
            <div className="main">
                <div className="user-input">
                    <Form />
                    <button className="btn btn-primary" id="name-submit" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="output" id="copy-this">
                    <DisplayInputLabels />
                    <DisplayInputValues
                        name={this.state.name}
                        address={this.state.address}
                        homePhone={this.state.homePhone}
                        mobilePhone={this.state.mobilePhone}
                    />
                </div>
                <button className="btn" id="pdf" onClick={GetPDF}>PDF</button>
            </div>

        )
    }
}

export default Home;

