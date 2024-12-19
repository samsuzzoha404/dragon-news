import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaSquareXTwitter></FaSquareXTwitter>
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagramSquare></FaInstagramSquare>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
