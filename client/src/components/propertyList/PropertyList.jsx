import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList(props) {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  const images = [
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading. . ."
      ) : (
        <>
          {data &&
            images.map((img, i) => {
              let typeArray = [];
              let countArray = [];
              for (let item of data) {
                typeArray.push(item.type);
                countArray.push(item.count);
              }
              return (
                <div className="pListItem" key={i}>
                  <img src={img} alt="property-type" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{typeArray[i]}</h1>
                    <h3>
                      {countArray[i]}{" "}
                      {countArray[i] > 1 ? typeArray[i] + "s" : typeArray[i]}
                    </h3>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default PropertyList;
