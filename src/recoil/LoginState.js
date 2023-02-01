import { atom } from 'recoil'
 const LoginState = atom({
    key: 'loginState',
    default: false,
});

export default LoginState;