import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true, rowGroup:true
      }, {
        headerName: "Model", field: "model", rowGroup: true
      }, {
        headerName: "Price", field: "price", rowGroup: true
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Ford", model: "Monde", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }],
      autoGroupColumnDef: {
    headerName: "Model",
    field: "model",

  }
    }
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
        height: '600px',
        width: '100%' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          groupSelectsChildren={true}
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          >
        </AgGridReact>
      </div>
    );
  }
}

export default Grid;
