const { default: Link } = require("next/link");
const { default: WidthClamp } = require("../../Shared/width-clamp");
const { default: LogoIcon } = require("@/components/Common/Icons/logo");
const { default: Image } = require("next/image");

const DashboardNavbar = () => {
  return (
    <nav>
      <WidthClamp>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-12 cursor-pointer">
              <LogoIcon />
              <p className="font-bold text-blueAccent">HelpMeOut</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Image src={"/images/profile-circle.png"} alt="Profile" width={40} height={40} />
            <span>Ben Nkem</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="vuesax/linear/arrow-down">
                <g id="arrow-down">
                  <path
                    id="Vector"
                    d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                    stroke="black"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </WidthClamp>
    </nav>
  );
};

export default DashboardNavbar;
