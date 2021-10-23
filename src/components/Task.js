import React from 'react'
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index'

const Task = () => {
    const account = useSelector((state) => state.account);
    const disPatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, disPatch);

    return (
        <div>
            <div>{account}</div>
            <button onClick={() => depositMoney(1000)}>Deposit $</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw $</button>
            
        </div>
    )
}

export default Task
