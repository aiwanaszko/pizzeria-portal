import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const accent = purple['A200'];

const useStylesOne = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: accent,
  },
}));


function Ordering() {
  const classes = useStyles();
  const classesOne = useStylesOne();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
  setValue(newValue);
  }

  return (
    <div className={classes.root}>
    <Container>
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Table 1" />
        <Tab label="Table 2" />
        <Tab label="Table 3" />
      </Tabs>
    </AppBar>
    {value === 0 && <TabContainer>
      <Button variant='contained' size='small' color='secondary'>BOOK</Button>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Active orders</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Sum</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Change status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="center">145236547365</TableCell>
                  <TableCell align="center">02.06.2019 15:25</TableCell>
                  <TableCell align="center">€ 24.45</TableCell>
                  <TableCell align="center">Done</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">76654322234</TableCell>
                  <TableCell align="center">02.06.2019 15:49</TableCell>
                  <TableCell align="center">€ 35.60</TableCell>
                  <TableCell align="center">In delivery</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">234536475769</TableCell>
                  <TableCell align="center">02.06.2019 15:54</TableCell>
                  <TableCell align="center">€ 29.50</TableCell>
                  <TableCell align="center">In delivery</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Paper>


      </TabContainer>}
    {value === 1 && <TabContainer>
      <Button variant='contained' size='small' color='secondary'>BOOK</Button>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Active orders</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Sum</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Change status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="center">678908765678</TableCell>
                  <TableCell align="center">02.06.2019 15:04</TableCell>
                  <TableCell align="center">€ 48.20</TableCell>
                  <TableCell align="center">Done</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">234567899098</TableCell>
                  <TableCell align="center">02.06.2019 15:16</TableCell>
                  <TableCell align="center">€ 19.40</TableCell>
                  <TableCell align="center">New</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">34567890790078</TableCell>
                  <TableCell align="center">02.06.2019 15:29</TableCell>
                  <TableCell align="center">€ 45.00</TableCell>
                  <TableCell align="center">New</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </TabContainer>}

    {value === 2 && <TabContainer>
      <Button variant='contained' size='small' color='secondary'>BOOK</Button>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Active orders</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Sum</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Change status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="center">145236547365</TableCell>
                  <TableCell align="center">02.06.2019 15:25</TableCell>
                  <TableCell align="center">€ 24.45</TableCell>
                  <TableCell align="center">Done</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">76654322234</TableCell>
                  <TableCell align="center">02.06.2019 15:49</TableCell>
                  <TableCell align="center">€ 35.60</TableCell>
                  <TableCell align="center">In delivery</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">234536475769</TableCell>
                  <TableCell align="center">02.06.2019 15:54</TableCell>
                  <TableCell align="center">€ 29.50</TableCell>
                  <TableCell align="center">In delivery</TableCell>
                  <TableCell align="center"><Button variant='outlined' size='small' color='primary'>Delivered</Button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </TabContainer>}
      <Link to={process.env.PUBLIC_URL + '/ordering/new'}>New order</Link>
    </Container>
    </div>
  );
}

export default Ordering;
