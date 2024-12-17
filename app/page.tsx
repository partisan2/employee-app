import ApplyLeave from "./components/ApplyLeave";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";
import PaySlip from "./components/PaySlip";
import ProfileBar from "./components/ProfileBar";
import Schedule from "./components/Schedule";



export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen w-full flex md:flex-row-reverse flex-col md:justify-between relative md:static top-20 bg-zinc-100 mt-4">
        <div>
          <Notifications />
          <Schedule />
        </div>
        <div className="">
          <div className="mt-5 md:mx-5 mx-2 bg-white py-5 px-8 border rounded-xl drop-shadow-lg ">
            Welcome
          </div>
          <div className="flex">
            <ApplyLeave />
            <PaySlip />
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
