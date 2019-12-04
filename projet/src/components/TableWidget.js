import React, { Component } from 'react'

export default class TableWidget extends Component {
    render() {
        return (
            <div className="card shadow">
                <div className="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Objet</th>
                                    <th>Pays</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>PILLET</td>
                                    <td>Baptiste</td>
                                    <td>Montre</td>
                                    <td>France</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>JOUSSELIN</td>
                                    <td>Gaultier</td>
                                    <td>OnePlus</td>
                                    <td>France</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
