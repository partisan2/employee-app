import ApplyLeave from "./components/ApplyLeave";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";
import PaySlip from "./components/PaySlip";



export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="w-full flex md:flex-row-reverse flex-col md:justify-between relative md:static top-20 bg-zinc-100">
        <div>
          <Notifications />
        </div>
        <ApplyLeave />
        <PaySlip />
      </div>
    </div>
  );
}
