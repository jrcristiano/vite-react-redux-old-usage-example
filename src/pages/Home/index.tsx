import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { COUNTER_ACTION_TYPES } from "../../store/counter/action-types";

function Home() {
	const { counter } = useSelector((rootReducer: any) => rootReducer.counterReducer);

	const dispatch = useDispatch();

	const handleCounterIncrement = () => dispatch({
		type: COUNTER_ACTION_TYPES.INCREMENT,
	});

	const handleCounterDecrement = () => dispatch({
		type: COUNTER_ACTION_TYPES.DECREMENT,
	});

	return (
		<>
			<Link to="/users">Users</Link>
			<h1>Redux Counter {counter}</h1>
			<button onClick={handleCounterIncrement}>+ Incrementar</button>
			{ ' ' }
			<button onClick={handleCounterDecrement}>- Decrementar</button>
		</>
	);
}

export default Home;
