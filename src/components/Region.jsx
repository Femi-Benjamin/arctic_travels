import React from "react";
import Zoom from "react-reveal/Zoom";

const Region = () => {
  return (
    <div>
      <div className="md:flex px-5">
        <Zoom>
          <div>
            <img
              className='woman h-[1024px]  object-cover bg-gradient-to-r from-cyan-500 to-blue-500"'
              src="https://img.freepik.com/free-photo/tourist-with-baggage-map-fuji-mountain-kawaguchiko-japan_335224-170.jpg?w=1480&t=st=1664281746~exp=1664282346~hmac=4488888feca47b3c95e32a25069a621554b3dca420ba08485a1e2392001a8449"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div>
            <img
              className="snow h-[1024px]  object-cover"
              src="https://img.freepik.com/free-photo/snowboarder-motion-riding-down-hill-mountain-resort_181624-48819.jpg?w=2000"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div>
            <img
              className="ski h-[1024px]  object-cover"
              src="https://img.freepik.com/free-photo/young-skier-motion-with-beautiful-winter-landscape_181624-37168.jpg?w=2000"
              alt=""
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};
export default Region;
