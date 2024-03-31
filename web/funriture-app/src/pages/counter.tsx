import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "../store";

const { increment } = counter.actions;

export default function Counter() {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <Button 
      onClick={() => {
        dispatch(increment());
      }}
    >
      count is {count}
    </Button>
  );
}
