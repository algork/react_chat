import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export function Profile() {
  const dispatch = useDispatch();
  const { name, showName } = useSelector(profileSelector);

  const handeToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };

  return (
    <>
      <button onClick={handeToggleShowName}>Click me</button>
      {showName && name}
    </>
  );
}
