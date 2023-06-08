import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

import Reducer from './reducer/Reducer.js';
import {  createStore  } from 'redux';
import { Provider } from 'react-redux';

import CrearClientes from './CrearClientes';
import ListarClientes from './ListarClientes';
import MyInfo from './MyInfo' 
import Footer from '../components/Footer'

const adminStore= createStore (Reducer);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={'full-width-tabpanel-${index}'}
      aria-labelledby={'full-width-tab-${index}'}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Admin() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Provider store={adminStore}>
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab label="Listar clientes" {...a11yProps(0)} />
          <Tab label="Agregar Clientes" {...a11yProps(1)} />
          <Tab label="..." {...a11yProps(2)} />
        </Tabs>
    <div style={{ marginLeft: 'auto' }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
          <Tabs 
          onChange={handleChange}
          style={{ marginLeft: 'auto' }}  
          value={value}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example">
        </Tabs><Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/8/85/Joss_Whedon_%2827970806483%29.jpg" /></Stack>
  </div>
      </Toolbar>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ListarClientes/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CrearClientes/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MyInfo/>
        </TabPanel>

      </SwipeableViews>
      <Footer/>
    </Box>
    </Provider>
  );
}



