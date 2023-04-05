import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-ITxvx0kFIF35md4ngd3ImDrnGOWaTFvUw&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>India</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://l450v.alamy.com/450v/dh4bp7/rajkot-city-gujarat-india-asia-dh4bp7.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gujrat</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
