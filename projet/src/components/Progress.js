import React, { Component } from 'react'
import { Progress } from 'reactstrap'

export default class ProgressBars extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card shadow pb-4 firstRow">
                <h5 className="card-title text-center">Progression</h5>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-3 align-items-center">
                            <a>{this.props.type1}</a>
                        </div>
                        <div className="col-9">
                            <Progress value={this.props.value} />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-3">
                            <a>{this.props.type2}</a>
                        </div>
                        <div className="col-9">
                            <Progress color="success" value={50} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
