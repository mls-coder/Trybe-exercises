const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: 
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const actionIncrement = () => {
    const btn = document.getElementById('increase');
    btn.addEventListener('click', () => {
        const action = { type: INCREMENT }
        store.dispatch(action);
        console.log('increment');
    });
};

const actionDecrement = () => {
    const btn = document.getElementById('decrease');
    btn.addEventListener('click', () => {
        const action = { type: DECREMENT }
        store.dispatch(action);
        console.log('decrement');

    });
};

const actionIncrementBy10 = () => {
    const btn = document.getElementById('increaseBy10');
    btn.addEventListener('click', () => {
        const action = { type:  }
        store.dispatch(action);
        console.log('increment10');
    });
};

window.onload = () => {
    actionIncrement();
    actionDecrement();
    actionIncrementBy10();
}

const store = Redux.createStore(reducer);