import React, { Component } from "react";

class AddData extends Component {
    render() {
        return (
<div className="main-panel">
    <div className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Tambah Produk Baru</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Nama Apartemen</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}

export default AddData