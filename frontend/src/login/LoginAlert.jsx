import Alert from '@mui/material/Alert';
import {useSelector} from 'react-redux';

function LoginAlert(){
    const active =useSelector(state=> state.alertActive);
    const typeAlert=useSelector(state=>state.typeAlert);
    const alertMessage=useSelector(state=> state.alertMessage);

    if (!active)
        return <></>;
    else if (typeAlert==="wrongpassword")
        return (<Alert severity="error">{alertMessage}</Alert>)
    else if (typeAlert==="expiredsesion")
        return (<Alert severity="info">{alertMessage}</Alert>)
}

export default LoginAlert;
