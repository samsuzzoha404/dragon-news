import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import RightBottom from "./RightBottom";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs />
      <RightBottom />
    </div>
  );
};

export default RightNavbar;
