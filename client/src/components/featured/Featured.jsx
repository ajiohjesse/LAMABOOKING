import useFetch from "../../hooks/useFetch";
import "./featured.css";

function Featured(props) {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=abuja,lagos,lekki,kano"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait. . ."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o="
              alt="image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Abuja</h1>
              <h3>
                {data[0]} {data[0] > 1 ? "properties" : "property"}
              </h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o="
              alt="image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h3>
                {data[1]} {data[1] > 1 ? "properties" : "property"}
              </h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/661041.webp?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o="
              alt="image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lekki</h1>
              <h3>
                {data[2]} {data[2] > 1 ? "properties" : "property"}
              </h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/853006.webp?k=49f75610fb56878eb04a87432a9fa76f3b3e3d68383996d46c7dbbf53c5467c2&o="
              alt="image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kano</h1>
              <h3>
                {data[3]} {data[3] > 1 ? "properties" : "property"}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
