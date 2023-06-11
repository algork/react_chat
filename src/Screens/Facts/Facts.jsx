import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFactsActionWithThunk } from "../../Store/Facts/actions";
import { factsSelector } from "../../Store/Facts/selectors";
// import { v4 as uuidv4 } from "uuid";

export const Facts = () => {
  //   const count = Math.random() * (7 - 1) useSelector(factsSelector)+ 1;
  const { factsUrl, loading, error } = useSelector(factsSelector);
  const disptach = useDispatch();

  const handleGetFacts = () => {
    disptach(getFactsActionWithThunk());
  };

  useEffect(() => {
    console.log("PIDARAS");
    handleGetFacts();
  }, []);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetFacts}>Reload Page</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>{factsUrl.title}</div>
        <img src={factsUrl.url} alt="" />
      </div>
    </div>
  );
};
