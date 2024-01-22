import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import inc_dec from "./reducers/inc_dec";
import { increment, decrement } from "./actions";

function App() {
  const myState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-5">
          <input
            type="text"
            value={myState}
            className="bg-dark text-white text-center fs-4"
          />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={() => dispatch(increment())}
            className=" mx-2 btn btn-success"
          >
            Add +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger"
          >
            Minus -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
