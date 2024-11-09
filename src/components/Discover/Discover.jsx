import sad from "../../assets/videos/sad.mp4";
function Discover() {
  return (
    <div className="w-full h-screen sm:px-40">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
        <div>
          <h2 className="font-reader-regular text-2xl sm:text-5xl">
            Discover Real-Life Stories
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-center sm:w-1/2">
            We are constantly working out in the open and try to share as much
            knowledge as possible. Sharing knowledge about challenges we
            encounter in our daily work helps others, but also gives you an
            insight into our thought process.
          </p>
        </div>
        <div className="w-full h-[70vh] sm:h-96 flex flex-col sm:flex-row gap-10 items-center justify-center px-3">
          <div className=" w-full sm:w-1/2 h-full bg-[#EDEBE9] shadow-lg rounded-2xl overflow-hidden">
            <img className="w-full h-full"
              src="https://cdn.dribbble.com/userupload/5540636/file/original-a66346c8e3757c51b87aadac1354f76a.png?resize=752x"
              alt=""
            />
          </div>
          <div className="w-full  sm:w-1/2 h-full bg-[#EDEBE9] shadow-lg rounded-2xl overflow-hidden ">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src={sad} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
