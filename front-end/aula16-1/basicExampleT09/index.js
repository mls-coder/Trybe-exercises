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

const store = Redux.createStore(reducer);

const actionIncrement = () => {
    const btn = document.getElementById('increment');
    btn.addEventListener('click', () => {
        const action = { type: INCREMENT }
        store.dispatch(action);
        console.log('increment');
    });
};

const actionDecrement = () => {
    const btn = document.getElementById('decrement');
    btn.addEventListener('click', () => {
        const action = { type: DECREMENT }
        store.dispatch(action);
        console.log('decrement');

    });
};

const actionIncrementBy10 = () => {
    const btn = document.getElementById('incrementBy10');
    btn.addEventListener('click', () => {
        const action = { type:  }
        store.dispatch(action);
        console.log('increment10');
    });
};

store.subscribe(() => {
    const span = document.getElementById('value');
    span.innerText = store.getState();
});

window.onload = () => {
    actionIncrement();
    actionDecrement();
    actionIncrementBy10();
}
