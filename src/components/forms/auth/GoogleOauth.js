import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { authModalStatus } from "../../../store/slices/modalsSlice";

export default function GoogleOauth({ from }) {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleGoogleOAuth = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("handleGoogleOAuth", error.message);
    }
    if (!loading) {
      dispatch(authModalStatus({ open: false, from: "login" }));
    }
  };

  return (
    <button
      className="flex items-center justify-center w-full p-3 bg-blue-600 rounded-lg"
      onClick={handleGoogleOAuth}
    >
      {loading ? (
        <ClipLoader color="#fff" size="22px" />
      ) : (
        <>
          <FcGoogle className="mr-3" />{" "}
          <p className="text-sm font-semibold text-white">
            {from === "login" ? "Continue with Google" : "Signup with Google"}
          </p>
        </>
      )}
    </button>
  );
}
