import React, { Component } from "react";
import Sidebar from "./Sidebar";

class ListDataTitip extends Component {
    render() {
        return (
            <>
            <Sidebar/>
            <div className="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title ">Daftar Produk Disewakan</h4>
                                        <p className="card-category">Data Produk Disewakan</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th>
                                                        ID
                                                    </th>
                                                    <th>
                                                        Nama Konsumen
                                                    </th>
                                                    <th>
                                                        Nama Apartemen
                                                    </th>
                                                    <th>
                                                        Unit
                                                    </th>
                                                    <th>
                                                        Aksi
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>
                                                            Dakota Rice
                                                        </td>
                                                        <td>
                                                            Niger
                                                        </td>
                                                        <td>
                                                            Oud-Turnhout
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2
                                                        </td>
                                                        <td>
                                                            Minerva Hooper
                                                        </td>
                                                        <td>
                                                            Curaçao
                                                        </td>
                                                        <td>
                                                            Sinaai-Waas
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            3
                                                        </td>
                                                        <td>
                                                            Sage Rodriguez
                                                        </td>
                                                        <td>
                                                            Netherlands
                                                        </td>
                                                        <td>
                                                            Baileux
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            4
                                                        </td>
                                                        <td>
                                                            Philip Chaney
                                                        </td>
                                                        <td>
                                                            Korea, South
                                                        </td>
                                                        <td>
                                                            Overland Park
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            5
                                                        </td>
                                                        <td>
                                                            Doris Greene
                                                        </td>
                                                        <td>
                                                            Malawi
                                                        </td>
                                                        <td>
                                                            Feldkirchen in Kärnten
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            6
                                                        </td>
                                                        <td>
                                                            Mason Porter
                                                        </td>
                                                        <td>
                                                            Chile
                                                        </td>
                                                        <td>
                                                            Gloucester
                                                        </td>
                                                        <td className="text-primary">
                                                            <button className="btn btn-primary">Hapus Data</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ListDataTitip