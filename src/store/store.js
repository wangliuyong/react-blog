import { createStore } from 'redux';


function counter(state, action) {
    state={
        number:0,
        user:{}
    }
    switch (action.type) {
        case 'INCREMENT':
            return state.number + action.payload;
        case 'DECREMENT':
            return state.number - action.payload;
        default:
            return state.number;
    }
}

export let store = createStore(counter);


// store.subscribe(() =>
//     console.log(store.getState())
// );
//
// // 改变内部 state 惟一方法是 dispatch 一个 action。
// // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// // 1