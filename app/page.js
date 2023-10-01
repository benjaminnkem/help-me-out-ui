import RefreshIcon from "@/components/Common/Icons/Refresh";
import RightArrowIcon from "@/components/Common/Icons/RightArrowIcon";
import RoundedCircleIcon from "@/components/Common/Icons/RoundedCircle";
import ShareIcon from "@/components/Common/Icons/Share";
import LogoIcon from "@/components/Common/Icons/logo";
import Footer from "@/components/Layout/Footer";
import WidthClamp from "@/components/UI/Shared/width-clamp";
import { inter, sora } from "@/lib/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <WidthClamp>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4 cursor-pointer">
                <LogoIcon />
                <p className="font-bold text-blueAccent">HelpMeOut</p>
              </div>

              <div className="flex items-center gap-6 text-lg font-semibold">
                <p className="cursor-pointer">Features</p>
                <p className="cursor-pointer">How It Works</p>
              </div>

              <Link href={"/account"}>
                <span className="font-bold cursor-pointer tet-lg">Get Started</span>
              </Link>
            </div>
          </WidthClamp>
        </nav>

        <WidthClamp>
          <div className="min-h-[35rem] flex items-center">
            <div className="grid items-center grid-cols-2 gap-10">
              <div className="space-y-6">
                <h1 className={`text-6xl font-bold ${sora.className}`}>
                  Show Them <br /> Don&apos;t Just Tell
                </h1>

                <p className={`text-lg text-black/75 ${inter.className}`}>
                  Help your friends and loved ones by creating and sending videos on how to get things done on a
                  website.
                </p>

                <button className="flex items-center gap-4 px-6 py-4 text-sm text-white group bg-blueAccent rounded-xl">
                  <span>Install HelpMeOut</span>{" "}
                  <div className="transition-transform group-hover:translate-x-1">
                    <RightArrowIcon />
                  </div>
                </button>
              </div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="absolute -right-10 -top-10 -z-10">
                  <Image
                    src={"/images/header-dot1.png"}
                    alt="Image"
                    width={200}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -left-10 -bottom-10 -z-10">
                  <Image
                    src={"/images/header-dot2.png"}
                    alt="Image"
                    width={200}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="grid grid-rows-2 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={"/images/header-2.png"}
                      alt="Image"
                      width={400}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={"/images/header-1.png"}
                      alt="Image"
                      width={400}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden max-h-[30rem]">
                  <Image
                    src={"/images/header-girl.png"}
                    alt="Image"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </WidthClamp>
      </header>

      <main>
        <div className="min-h-[5rem] bg-primaryOffWhite my-20"></div>

        <section>
          <WidthClamp>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="grid flex-shrink-0 w-12 h-12 rounded-full place-content-center bg-primaryPurple">
                    <RoundedCircleIcon />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-blueAccent">Simple Screen Recording</h4>
                    <p className="text-grey">
                      Effortless screen recording for everyone. Record with ease, no tech expertise required.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="grid flex-shrink-0 w-12 h-12 rounded-full place-content-center bg-primaryPurple">
                    <ShareIcon />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-blueAccent">Easy-to-Share URL</h4>
                    <p className="text-grey">
                      Share your recordings instantly with a single link. No attachments, no downloads.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="grid flex-shrink-0 w-12 h-12 rounded-full place-content-center bg-primaryPurple">
                    <RefreshIcon />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-blueAccent">Revisit Recordings</h4>
                    <p className="text-grey">
                      Access and review your past content effortlessly. Your recordings, always at your fingertips. your
                      recordings instantly with a single link. No attachments, no downloads.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={"/images/screenshot-1.png"}
                  alt="Image"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className="my-20">
          <WidthClamp>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-10">
                <div className="grid w-16 h-16 mx-auto text-white rounded-full place-content-center bg-blueAccent">
                  <h5 className="text-xl font-bold">1</h5>
                </div>

                <div className="p-2 space-y-4 text-center">
                  <p className="text-xl font-bold text-blueAccent">Record Screen</p>
                  <p className="text-grey">
                    Click the &quot;Start Recording&quot; button in our extension. choose which part of your screen to
                    capture and who you want to send it to.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="grid w-16 h-16 mx-auto text-white rounded-full place-content-center bg-blueAccent">
                  <h5 className="text-xl font-bold">2</h5>
                </div>

                <div className="p-2 space-y-4 text-center">
                  <p className="text-xl font-bold text-blueAccent">Share Your Recording</p>
                  <p className="text-grey">
                    We generate a shareable link for your video. Simply send it to your audience via email or copy the
                    link to send via any platform.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="grid w-16 h-16 mx-auto text-white rounded-full place-content-center bg-blueAccent">
                  <h5 className="text-xl font-bold">1</h5>
                </div>

                <div className="p-2 space-y-4 text-center">
                  <p className="text-xl font-bold text-blueAccent">Learn Effortlessly</p>
                  <p className="text-grey">
                    Recipients can access your video effortlessly through the provided link, with our user-friendly
                    interface suitable for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 my-5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Image src={"/images/rec1.png"} alt="Image" key={idx} width={300} height={260} />
              ))}
            </div>
          </WidthClamp>
        </section>
      </main>
      <Footer />
    </>
  );
}
