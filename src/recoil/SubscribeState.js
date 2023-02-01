import { atom } from 'recoil'

const SubscribeState = atom({
    key: 'subscribeState',
    default: false,
});

export default SubscribeState;