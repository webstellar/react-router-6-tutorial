import { Link } from "react-router-dom";

 const Error = () => {
  return (
    <section className="section">
      <h2>404 error</h2>
      <p>page not found </p>
      <Link to="/">Go back to home</Link>
    </section>
  );
};
export default Error;
