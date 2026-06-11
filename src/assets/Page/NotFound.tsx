import { Link } from "react-router-dom";
import classes from "./notFound.module.css";

export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>

      <Link to="/" className={classes.homeBtn}>
        Back to Home
      </Link>
    </div>
  );
}