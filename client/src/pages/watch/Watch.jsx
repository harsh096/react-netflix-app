import "./watch.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import sampleVideo from "./nyc.mp4";

export default function Watch() {
  return (
    <div className="container">
      <div className="back">
        <KeyboardBackspaceIcon className="backIcon" />
        Home
      </div>

      <video className="video" src={sampleVideo} autoPlay progress controls />
    </div>
  );
}
