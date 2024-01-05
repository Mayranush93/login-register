import {useState} from "react";

function useLocalStorage(key, initialState) {

    const [data, setData] = useState(() => {
        const _data = localStorage.getItem(key);
        if (!_data) {
            return initialState;
        }
        try {
            return JSON.parse(_data) || _data
        } catch (e) {
            return _data
        }
    });


    const _setData = (_data) => {
        localStorage.setItem(key, typeof _data === "string" ? _data : JSON.stringify(_data))
        setData(_data)
    }

    return [data, _setData]
}

export default useLocalStorage;
