import "../component/All.css"

const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full  img-style mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img 
          src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1723791126~exp=1723794726~hmac=21a221941c2143e77f9b6ddf8dc39c492da80e3833267eb947b99c9bd1fc5165&w=740"
          className="w-full lg:banner rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              TechGadgets: Tech Gadgets offers cutting-edge electronics for modern living..
            </h2>
           
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-801.jpg?t=st=1723790038~exp=1723793638~hmac=0d164079bd45d1417cf8d7756b7bebe55043602631e63bba889276462e53e70e&w=900"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xlfont-bold">
              TechGadgets: Tech Gadgets offers cutting-edge electronics for modern living..
            </h2>
           
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/overhead-view-white-headphone-against-blue-background_23-2147889912.jpg?t=st=1723791592~exp=1723795192~hmac=623430990e682a730d01cc29e81db155a2c4ed2fae0855ec84a6b8ba0b6b8bcb&w=360"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              TechGadgets: Tech Gadgets offers cutting-edge electronics for modern living..
            </h2>
          
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/overhead-view-white-headphone-against-blue-background_23-2147889912.jpg?t=st=1723791592~exp=1723795192~hmac=623430990e682a730d01cc29e81db155a2c4ed2fae0855ec84a6b8ba0b6b8bcb&w=360"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              TechGadgets: Tech Gadgets offers cutting-edge electronics for modern living.
            </h2>
          
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Bannar;