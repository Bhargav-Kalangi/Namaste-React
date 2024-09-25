import { useRouteError } from "react-router-dom";
const ErrorHandling = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!!!!</h1>
      <h2>something went wrong!!!!</h2>
    </div>
  );
};
export default ErrorHandling;
