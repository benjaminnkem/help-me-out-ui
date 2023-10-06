"use client";
import FacebookIcon from "@/components/Common/Icons/Facebook";
import GoogleIcon from "@/components/Common/Icons/Google";
import LogoIcon from "@/components/Common/Icons/logo";
import WidthClamp from "@/components/UI/Shared/width-clamp";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();

  return (
    <>
      <main>
        <WidthClamp>
          <div className="inline-block">
            <Link href={"/"}>
              <div className="flex items-center gap-4 py-12 cursor-pointer">
                <LogoIcon />
                <p className="font-bold text-blueAccent">HelpMeOut</p>
              </div>
            </Link>
          </div>
        </WidthClamp>

        <div className="max-w-2xl mx-auto mb-20">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Log in or Sign up</h1>
            <p className="max-w-sm mx-auto text-grey">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <div className="max-w-md mx-auto my-10">
            <div className="space-y-4">
              <div className="flex justify-center w-full">
                <button
                  className="flex items-center justify-center w-full gap-4 py-3 border-2 border-black rounded-lg"
                  onClick={() => router.push("/dashboard")}
                >
                  <GoogleIcon />
                  <span>Continue with Google</span>
                </button>
              </div>

              <div className="flex justify-center w-full">
                <button
                  className="flex items-center justify-center w-full gap-4 py-3 border-2 border-black rounded-lg"
                  onClick={() => router.push("/dashboard")}
                >
                  <FacebookIcon />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 my-5">
              <span className="w-full h-[1px] bg-grey"></span>
              <span className="text-grey">or</span>
              <span className="w-full h-[1px] bg-grey"></span>
            </div>

            <div className="my-10">
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 text-sm border-2 outline-none border-grey rounded-xl placeholder:text-grey"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-3 text-sm border-2 outline-none border-grey rounded-xl placeholder:text-grey"
                      placeholder="Enter your Password"
                    />
                  </div>

                  <button
                    className="w-full py-3 text-white rounded-xl bg-blueAccent"
                    onClick={() => router.push("/dashboard")}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
