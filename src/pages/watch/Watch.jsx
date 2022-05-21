import { ArrowBackIos } from "@material-ui/icons"
import { useLocation } from "react-router-dom";
import "./watch.scss";
import {Link} from "react-router-dom";

export default function Watch() {
  const location = useLocation()
const movie = location.movie;
  return (
    <div className="watch">
    <Link to ="/">
      <div className="back">
      <ArrowBackIos/>
        Home
      </div>
      </Link>
      <video
        className="video"
        playsInline
        loop
        controls
        src= {movie.video} />
    </div>
  );
}
