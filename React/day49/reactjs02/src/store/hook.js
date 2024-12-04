//tạo hook để đọc state từ global
import { useContext } from 'react';
import { ProviderContext } from './Provider';

export const useSelector = (callback) => {
    if (typeof callback !== 'function') {
        throw new Error('Callbacks must be a function');
    }
    const { state } = useContext(ProviderContext);
    return callback(state);
}
export const useDispatch = () => {
    const { dispatch } = useContext(ProviderContext);
    return dispatch;
}  