import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const account = useSelector((state)=> state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
     <h1>{account}</h1>
     <button onClick={()=>depositMoney(5000)}>Deposit</button>
     <button onClick={()=>withdrawMoney(1000)}>WithDraw</button>
    </div>
  );
}

export default App;
