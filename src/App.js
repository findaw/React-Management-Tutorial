import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core';
const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : 'auto'
  },
  table  : {
    minWidth : 1080
  }
});
const customers = [{
    'id' : 1,
    'birthday' : 980505,
    'name' : 'kate',
    'gender' : 'male',
    'img' : 'http://placeimg.com/36/36/1'
  },
  {
    'id' : 2,
    'birthday' : 980505,
    'name' : 'earl',
    'gender' : 'female',
    'img' : 'http://placeimg.com/36/36/2'
  },
  {
    'id' : 3,
    'birthday' : 980505,
    'name' : 'Bob',
    'gender' : 'female',
    'img' : 'http://placeimg.com/36/36/3'
  }
]
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} img={c.img} name={c.name} birthday={c.birthday }  gender={c.gender}/>)})}
          </TableBody>
        </Table>
      </Paper>
        
    );
  }
}

export default withStyles(styles)(App);
