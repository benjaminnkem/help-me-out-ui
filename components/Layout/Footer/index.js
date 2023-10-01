import LogoWhiteIcon from "@/components/Common/Icons/LogoWhite";
import WidthClamp from "@/components/UI/Shared/width-clamp";

const Footer = () => {
  return (
    <footer className="py-20 text-white bg-blueAccent">
      <WidthClamp>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 cursor-pointer">
            <LogoWhiteIcon />
            <p className="font-bold">HelpMeOut</p>
          </div>

          <div className="space-y-4">
            <h6 className="font-bold">Menu</h6>

            <ul className="space-y-5 font-light">
              <li className="text-sm text-white/80">Home</li>
              <li className="text-sm text-white/80">Converter</li>
              <li className="text-sm text-white/80">How It Works</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h6 className="font-bold">Home</h6>

            <ul className="space-y-5 font-light">
              <li className="text-sm text-white/80">About</li>
              <li className="text-sm text-white/80">Contact Us</li>
              <li className="text-sm text-white/80">Privacy Policy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h6 className="font-bold">Screen Record</h6>

            <ul className="space-y-5 font-light">
              <li className="text-sm text-white/80">Browser Window</li>
              <li className="text-sm text-white/80">Desktop</li>
              <li className="text-sm text-white/80">Application</li>
            </ul>
          </div>
        </div>
      </WidthClamp>
    </footer>
  );
};

export default Footer;
