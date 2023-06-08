import LoginFields from './LoginFields'
import LoginAlert from './LoginAlert'
import Footer from '../components/Footer'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Reducer from './reducer/Reducer'

const loginStore= createStore (Reducer);

export default function Login(){
    return (
            <Provider store={loginStore} >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                    <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                        <h1 >
                             Gestión de Clientes
                        </h1>
                    </div>
                </Box>

                <Stack  spacing={2} lastSpacing={8}>
                <LoginAlert/>
                <LoginFields/>
                <Footer/>
                </Stack>   

            </Provider>
        );
}
