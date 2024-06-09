import withRouter from "@/hocs/withRouter";
import { cn } from "@/utils/helper";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const TopHeader = withRouter(({ location, navigate }) => {
  return (
    <div
      className={cn(
        "flex text-white items-center border-b border-primary-100 justify-between h-[85px] w-full bg-transparent fixed top-0 px-[100px] py-[26px] z-[50]",
        { "bg-primary-700": location.pathname !== "/" }
      )}
    >
      <span className="flex items-center gap-2">
        <AiOutlineMail />
        <span>
          <span>Email us at: </span>
          <span className="text-gray-600">example@gmail.com</span>
        </span>
      </span>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6 text-gray-300">
          <FaFacebook />
          <FaInstagram size={18} />
          <FaYoutube size={20} />
        </div>
        <div className="flex items-center pl-8 border-l border-main-100">
          <span className="flex items-center gap-2">
            <AiOutlinePhone />
            <span className="text-gray-300">123-456-789</span>
          </span>
        </div>
      </div>
    </div>
  );
});
export default TopHeader;
