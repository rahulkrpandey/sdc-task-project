import {
  useActionDispatch,
  useTypedSelector,
} from "../../redux/store/utils/useStore";
import classes from "./header.module.css";

import { AuthAction as action } from "../../redux/store/Store";

const Header = () => {
  const dispatch = useActionDispatch();
  const authState = useTypedSelector((state) => state.auth);

  const clickHandler: React.MouseEventHandler = (event) => {
    dispatch(action.logOut());
  };

  return (
    <nav className={classes["navigation"]}>
      <img
        src={require("../../assets/images/logo.png")}
        alt="ggsipu logo"
        className={classes["logo"]}
      />
      <div className={classes["nav-list"]}>
        <ul>
          <li className={classes["hidden"]}>
            <a href="#">admission</a>
          </li>

          <li className={classes["hidden"]}>
            <a href="#">academics</a>
          </li>

          <li className={classes["hidden"]}>
            <a href="#">students</a>
          </li>

          <li className={classes["hidden"]}>
            <a href="#">examination</a>
          </li>

          <li>
            <button onClick={clickHandler}>logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
