import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full space-y-2">
        <button className="btn border-blue-400 text-blue-700 bg-white">
          <FcGoogle></FcGoogle>
          Login with Google
        </button>
        <button className="btn border-purple-400 bg-white">
          <VscGithub></VscGithub>
          <span className="text-purple-700">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
