import React, { useLayoutEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const products = [{ id: 1, name: 'Conan the Barbarian', price: '1982' }];
//this should autodirect to LoginPage if you're not logged in.. not sure how.
class MainPage extends React.Component {
    
 
    render() {
        return (
            <useLayoutEffect>
        <BootstrapTable data={ products }>

        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>

      </BootstrapTable>
      </useLayoutEffect>
        )
    }
}



export default MainPage