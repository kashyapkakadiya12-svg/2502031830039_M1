import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <>
      <h2>User Page</h2>
      <h3>User ID is: {id}</h3>
    </>
  );
}