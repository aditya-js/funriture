import { Button, SHAPE } from "baseui/button";
import { theme } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const { changeTheme } = theme.actions;

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{ float: "right" }}>
      <Button shape={SHAPE.circle} onClick={() => dispatch(changeTheme())}>
        {theme === 0 ? "light" : "dark"}
      </Button>
    </div>
  );
}
