import { useDispatch, useSelector } from "react-redux";
import {
  changeUserNameAction,
  toggleCheckboxStatus,
  toggleUserNameAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { addMessageWithThunk } from "../../Store/Messages/actions";

export function Profile() {
  const dispatch = useDispatch();
  const { name, showName, checkboxStatus } = useSelector(profileSelector);

  const handeToggleShowName = () => {
    dispatch(toggleUserNameAction());
    // dispatch(
    //   addMessageWithThunk({
    //     chatId: "id1",
    //     message: "some text",
    //     author: "Alex",
    //   })
    // );

    // dispatch(addChatAction({ name: name }));
  };

  const handleCheckboxStatus = () => {
    dispatch(toggleCheckboxStatus());
  };

  const handleNameChange = (e) => {
    dispatch(changeUserNameAction({ name: e.target.value }));
  };

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        <input type="checkbox" onChange={handleCheckboxStatus} />
      </div>
      <div>
        <button onClick={handeToggleShowName}>Show name</button>
        {showName && name}
      </div>
    </>
  );
}
