import React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const products = [{ id: 1, name: 'Conan the Barbarian', price: '1982' }];

class Summary extends React.Component {
    
 
    render() {
        return (
           //this is very temporary just to show how it works :)
        
        <BootstrapTable data={ products }
        >
		
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>

      </BootstrapTable>
      
      
        );
    }
}



export default Summary