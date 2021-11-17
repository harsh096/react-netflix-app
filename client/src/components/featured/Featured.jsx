import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import dora from "./dora.png"; //just for testing, remove later.

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://imgix.bustle.com/uploads/image/2019/3/21/867e2959-280c-4f00-86fe-15e7dc02bb01-screen-shot-2019-03-21-at-41548-pm.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
        alt=""
      />
      <div className="info">
        <img src={dora} alt="" className="logo" />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusamus vitae alias. Maiores nam nobis, ducimus quidem voluptate est
          recusandae voluptatem nisi? Quidem laborum minima nisi reprehenderit
          et sit rerum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
