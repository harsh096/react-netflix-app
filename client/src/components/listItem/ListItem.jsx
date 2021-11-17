import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.ytimg.com/vi/yISKeT6sDOg/maxresdefault.jpg" alt="" />
      {isHovered && (
        <>
          <img
            src="https://i.giphy.com/media/u5bbqJE63sBGM/giphy.webp"
            id="video"
          ></img>
          <div className="info">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpIcon className="icon"/>
              <ThumbDownIcon className="icon"/>
            </div>
            <div className="infoTop">
              <span>1 hr 10 mins</span>
              <span className="ageLimit">16+</span>
              <span>2007</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsa ratione ad illum blanditiis praesentium, exercitationem
              asperiores
            </div>
            <div className="genre">
              Action
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
