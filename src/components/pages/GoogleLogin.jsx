import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      console.log(userInfo);
      navigate("/");
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-sm btn-ghost">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
