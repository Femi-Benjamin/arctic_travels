import React from "react";
import Slide from "react-reveal/Slide";

function Resort() {
  return (
    <React.Fragment>
      <Slide left>
        <div className="ml-12 text-2xl md:text-5xl font-semibold mb-10">
          <h1 className="not-italic font-[600px] text-[48px] leading-[135%] font-bold pt-5">
            The best resorts to chill
            <br /> and relax
          </h1>
        </div>
      </Slide>
      <div ClassName="md:flex grid">
        <>
          <div>
            <div className="md:relative md:left-96 md:ml-96 md:h-full px-5">
              <Slide right>
                <img
                  className="rounded-2xl mb-5 h-[411px] object-cover"
                  src="https://img.freepik.com/free-photo/nature-paradise-landscape-caribbean-maldives_1203-5348.jpg?w=2000"
                  alt="Resort Place"
                />
              </Slide>

              <Slide right>
                <img
                  className="rounded-2xl mb-5 h-[411px] object-fill"
                  src="https://luxurylatinamerica.com/blog/wp-content/le-blanc-top.jpg"
                  alt="Resort Place"
                />
              </Slide>
            </div>
          </div>
        </>

        <>
          <div>
            <div className=" md:-top-96 md:ml-64 md:h-full md:w-1/3 px-5">
              <Slide left>
                <img
                  className="rounded-2xl mb-5 h-[411px] object-fill"
                  src="https://thesecondangle.com/wp-content/uploads/2021/10/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg"
                  alt="Resort Place"
                />
              </Slide>

              <Slide left>
                <img
                  className="rounded-2xl mb-5 h-[411px]"
                  src="https://nairametrics.com/wp-content/uploads/2019/09/Outdoor-pool-and-Facade-of-Transcorp-Hilton.jpg"
                  alt="Resort Place"
                />
              </Slide>
            </div>
          </div>
        </>
      </div>
    </React.Fragment>
  );
}

export default Resort;
