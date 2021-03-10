import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LocationInfoContext } from "../App";
import "./style/index.scss";

export const Form = () => {
  const { setInput } = useContext(LocationInfoContext);
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => {
    setInput(data.location);
    return data;
  });
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <input type="submit" value="" className="form__search" />
        <input
          type="text"
          placeholder="Search"
          name="location"
          ref={register({ required: true })}
          className="form__input"
        />
      </form>
    </>
  );
};
