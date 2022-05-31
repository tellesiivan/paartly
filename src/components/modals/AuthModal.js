import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { authModalStatus } from "../../store/user/modalsSlice";
import Login from "../forms/auth/Login";
import Signup from "../forms/auth/Signup";

export default function AuthModal() {
  const { open, from } = useSelector((store) => store.modals.authModal);
  const dispatch = useDispatch();

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(authModalStatus({ open: false, from }))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md shadow-xl ">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-bold leading-6 text-gray-900"
                  >
                    {from.charAt(0).toUpperCase() + from.slice(1)}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-sm text-slate-600">
                    {from === "login"
                      ? "Welcome back, keep on sharing your modifications."
                      : "Create an account to start sharing your modifications."}
                  </Dialog.Description>
                  <div className="my-4">
                    {from === "login" ? <Login /> : <Signup />}
                  </div>
                  <div className="mt-6 text-sm text-center text-slate-600">
                    {from === "login" ? (
                      <p>
                        Don&apos;t have an account yet?{" "}
                        <span
                          className="font-semibold text-black cursor-pointer hover:opacity-80"
                          onClick={() =>
                            dispatch(
                              authModalStatus({ open: true, from: "signup" })
                            )
                          }
                        >
                          Sign Up
                        </span>{" "}
                      </p>
                    ) : (
                      <p>
                        Already have an account?{" "}
                        <span
                          className="font-semibold text-black cursor-pointer hover:opacity-80"
                          onClick={() =>
                            dispatch(
                              authModalStatus({ open: true, from: "login" })
                            )
                          }
                        >
                          Login
                        </span>{" "}
                      </p>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}