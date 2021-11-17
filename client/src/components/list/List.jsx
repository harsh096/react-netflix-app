import "./list.scss";
import ListItem from "../listItem/ListItem";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRef, useState } from "react";

function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [sliderMoved, setSliderMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setSliderMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    // console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue watching..</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          onClick={() => handleClick("left")}
          className="sliderArrow left"
          style={{ display: !sliderMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlinedIcon
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
}

export default List;
