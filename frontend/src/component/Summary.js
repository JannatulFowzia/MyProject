import React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import Detail from "./Detail";

const products = [{ id: 1, name: 'Anza James Rani', date: '26-Aug-2019', report:'40019244.txt' },
{ id: 2, name: 'Hanna Rydholm', date: '26-Aug-2019', report:'40019242.txt' },
{ id: 3, name: 'Jannatul Fowzia', date: '26-Aug-2019', report:'40019241.txt' },
{ id: 4, name: 'Saeideh Valipour', date: '26-Aug-2019', report:'40019243.txt' },
{ id: 5, name: 'Trupti Sanbe', date: '26-Jan-2019', report:'40019232.txt' }];

class Summary extends React.Component {
    colFormatter = (cell, row) => {
    return (
      <Link to = "Detail">
        {cell}
      </Link>
    )
  }
 
    render() {
        return (
           //this is very temporary just to show how it works :)
        
        <BootstrapTable data={ products } >
		
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

        <TableHeaderColumn dataField='date'>Date Of Joining</TableHeaderColumn>

        <TableHeaderColumn dataField='report' dataFormat = {this.colFormatter}>Report</TableHeaderColumn>
         

      </BootstrapTable>
      
      
        );
    }
}



export default Summary