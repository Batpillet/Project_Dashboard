import React, { Component } from 'react'
import { Progress } from 'reactstrap'

export default class ProgressBars extends Component {
    render() {
        return (
            <div className="card shadow pb-4">
                <h5 className="card-title text-center">Progression</h5>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-3 align-items-center">
                            <a>Casque</a>
                        </div>
                        <div className="col-9">
                            <Progress value="25" />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-3">
                            <a>Smartphone</a>
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
