import { useTag } from "../../../dist/";

import { Instagram, Youtube, GitHub } from "react-feather";

export default function Footer() {
  const footerLinksTag = useTag("Footer links");

  return (
    <footer className="flex w-full justify-center bg-salmon-lgt p-8">
      <div className="font-open relative flex w-full max-w-[1500px] text-xs/[14.4px] text-home-lgt">
        <svg
          className="relative mr-16 h-6 cursor-pointer"
          viewBox="0 0 80 24"
          fill="#B2A8A3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.7191 2.75851V11.8809C25.7191 13.3651 26.0578 14.5265 26.7353 15.3654C27.429 16.2042 28.3888 16.6236 29.6148 16.6236C30.8892 16.6236 31.8733 16.2284 32.5669 15.438C33.2767 14.6475 33.6397 13.5506 33.6558 12.1471V2.75851H35.2529V12.0019C35.2529 13.728 34.7205 15.0911 33.6558 16.0913C32.6073 17.0915 31.1151 17.5915 29.1793 17.5915C26.8402 17.5915 25.098 17.0995 23.9526 16.1155C22.8073 15.1153 22.2346 13.7522 22.2346 12.0261V2.75851H25.7191ZM22.283 2.75851V4.01678H22.2346C22.2185 3.71028 22.1056 3.46024 21.8959 3.26666C21.6861 3.07308 21.428 2.97629 21.1215 2.97629C21.1215 2.97629 21.0651 2.97629 20.9522 2.97629C20.8392 2.97629 20.7828 2.97629 20.7828 2.97629V2.75851H22.283ZM27.1467 2.75851V2.97629C27.1467 2.97629 27.0902 2.97629 26.9773 2.97629C26.8644 2.97629 26.8079 2.97629 26.8079 2.97629C26.5014 2.97629 26.2433 3.07308 26.0336 3.26666C25.8239 3.46024 25.7191 3.71028 25.7191 4.01678H25.6707V2.75851H27.1467ZM33.7042 2.75851V4.01678H33.6558C33.6397 3.71028 33.5268 3.46024 33.3171 3.26666C33.1073 3.07308 32.8573 2.97629 32.5669 2.97629C32.5669 2.97629 32.5105 2.97629 32.3976 2.97629C32.2846 2.97629 32.2282 2.97629 32.2282 2.97629V2.75851H33.7042ZM36.6805 2.75851V2.97629C36.6805 2.97629 36.624 2.97629 36.5111 2.97629C36.4143 2.97629 36.3659 2.97629 36.3659 2.97629C36.0594 2.97629 35.7933 3.07308 35.5674 3.26666C35.3577 3.46024 35.2529 3.71028 35.2529 4.01678H35.2045V2.75851H36.6805Z" />
          <path d="M43.1915 2.75851V17.277H39.7071V2.75851H43.1915ZM39.7797 15.7525V17.277H38.0133V17.035C38.0133 17.035 38.0616 17.035 38.1584 17.035C38.2552 17.035 38.3117 17.035 38.3278 17.035C38.6989 17.035 39.0215 16.914 39.2957 16.672C39.57 16.4139 39.7071 16.1074 39.7071 15.7525H39.7797ZM43.1431 15.7525H43.1915C43.2076 16.1074 43.3448 16.4139 43.6029 16.672C43.8771 16.914 44.2078 17.035 44.595 17.035C44.595 17.035 44.6353 17.035 44.7159 17.035C44.8127 17.035 44.8692 17.035 44.8853 17.035V17.277H43.1431V15.7525ZM43.1431 4.28295V2.75851H44.8853L44.8611 3.00048C44.8611 3.00048 44.8208 3.00048 44.7401 3.00048C44.6595 3.00048 44.6111 3.00048 44.595 3.00048C44.2078 3.00048 43.8771 3.12147 43.6029 3.36345C43.3448 3.60542 43.2076 3.91192 43.1915 4.28295H43.1431ZM39.7797 4.28295H39.7071C39.7071 3.91192 39.57 3.60542 39.2957 3.36345C39.0215 3.12147 38.6908 3.00048 38.3036 3.00048C38.3036 3.00048 38.2552 3.00048 38.1584 3.00048C38.0616 3.00048 38.0133 3.00048 38.0133 3.00048V2.75851H39.7797V4.28295Z" />
          <path d="M51.4841 2.75851V17.277H47.9996V2.75851H51.4841ZM57.1221 16.3091L57.7028 17.277H51.4357V16.3091H57.1221ZM58.7191 12.8246L57.7754 17.277H53.5892L54.3394 16.3091C55.033 16.3091 55.646 16.172 56.1784 15.8977C56.7268 15.6074 57.1946 15.2041 57.5818 14.6879C57.969 14.1555 58.2674 13.5344 58.4771 12.8246H58.7191ZM48.048 15.7525L48.169 17.277H46.3784V17.035C46.3784 17.035 46.4268 17.035 46.5236 17.035C46.6204 17.035 46.6768 17.035 46.693 17.035C47.0479 17.035 47.3463 16.914 47.5883 16.672C47.8464 16.4139 47.9835 16.1074 47.9996 15.7525H48.048ZM51.4357 4.28295V2.75851H53.1053V3.00048C53.0891 3.00048 53.0327 3.00048 52.9359 3.00048C52.8552 3.00048 52.8149 3.00048 52.8149 3.00048C52.46 3.00048 52.1535 3.12147 51.8954 3.36345C51.6373 3.60542 51.5002 3.91192 51.4841 4.28295H51.4357ZM48.048 4.28295H47.9996C47.9835 3.91192 47.8464 3.60542 47.5883 3.36345C47.3302 3.12147 47.0237 3.00048 46.6688 3.00048C46.6526 3.00048 46.5962 3.00048 46.4994 3.00048C46.4187 3.00048 46.3784 3.00048 46.3784 3.00048V2.75851H48.048V4.28295Z" />
          <path d="M64.528 2.75851V17.277H61.0436V2.75851H64.528ZM70.166 16.3091L70.7467 17.277H64.4796V16.3091H70.166ZM71.763 12.8246L70.8193 17.277H66.6332L67.3833 16.3091C68.0769 16.3091 68.69 16.172 69.2223 15.8977C69.7708 15.6074 70.2386 15.2041 70.6257 14.6879C71.0129 14.1555 71.3113 13.5344 71.5211 12.8246H71.763ZM61.0919 15.7525L61.2129 17.277H59.4223V17.035C59.4223 17.035 59.4707 17.035 59.5675 17.035C59.6643 17.035 59.7208 17.035 59.7369 17.035C60.0918 17.035 60.3902 16.914 60.6322 16.672C60.8903 16.4139 61.0274 16.1074 61.0436 15.7525H61.0919ZM64.4796 4.28295V2.75851H66.1492V3.00048C66.1331 3.00048 66.0766 3.00048 65.9798 3.00048C65.8992 3.00048 65.8588 3.00048 65.8588 3.00048C65.5039 3.00048 65.1975 3.12147 64.9393 3.36345C64.6812 3.60542 64.5441 3.91192 64.528 4.28295H64.4796ZM61.0919 4.28295H61.0436C61.0274 3.91192 60.8903 3.60542 60.6322 3.36345C60.3741 3.12147 60.0676 3.00048 59.7127 3.00048C59.6966 3.00048 59.6401 3.00048 59.5433 3.00048C59.4627 3.00048 59.4223 3.00048 59.4223 3.00048V2.75851H61.0919V4.28295Z" />
          <path d="M77.6445 2.75851V17.277H74.1601V2.75851H77.6445ZM74.2327 15.7525V17.277H72.4663V17.035C72.4663 17.035 72.5147 17.035 72.6115 17.035C72.7082 17.035 72.7647 17.035 72.7808 17.035C73.1519 17.035 73.4745 16.914 73.7487 16.672C74.023 16.4139 74.1601 16.1074 74.1601 15.7525H74.2327ZM77.5961 15.7525H77.6445C77.6607 16.1074 77.7978 16.4139 78.0559 16.672C78.3301 16.914 78.6608 17.035 79.048 17.035C79.048 17.035 79.0883 17.035 79.169 17.035C79.2658 17.035 79.3222 17.035 79.3383 17.035V17.277H77.5961V15.7525ZM77.5961 4.28295V2.75851H79.3383L79.3141 3.00048C79.3141 3.00048 79.2738 3.00048 79.1932 3.00048C79.1125 3.00048 79.0641 3.00048 79.048 3.00048C78.6608 3.00048 78.3301 3.12147 78.0559 3.36345C77.7978 3.60542 77.6607 3.91192 77.6445 4.28295H77.5961ZM74.2327 4.28295H74.1601C74.1601 3.91192 74.023 3.60542 73.7487 3.36345C73.4745 3.12147 73.1438 3.00048 72.7566 3.00048C72.7566 3.00048 72.7082 3.00048 72.6115 3.00048C72.5147 3.00048 72.4663 3.00048 72.4663 3.00048V2.75851H74.2327V4.28295Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8899 17.1819C13.4725 17.0181 14.0234 16.8078 14.5427 16.5511C15.9784 15.8251 17.0834 14.8088 17.8577 13.5022C18.632 12.1794 19.0192 10.6146 19.0192 8.80787C19.0192 6.985 18.632 5.42023 17.8577 4.11357C17.0834 2.80691 15.9784 1.79868 14.5427 1.08889C13.1231 0.362962 11.4454 0 9.5096 0C7.5738 0 5.88805 0.362962 4.45233 1.08889C3.03275 1.79868 1.9358 2.81497 1.16148 4.13776C0.387159 5.44443 0 7.00113 0 8.80787C0 10.6307 0.387159 12.1955 1.16148 13.5022C1.9358 14.8088 3.03275 15.8251 4.45233 16.5511C5.85192 17.243 7.4896 17.5983 9.36442 17.6157C9.41281 17.6162 9.46088 17.6157 9.5096 17.6157C10.7349 17.6157 11.8617 17.4711 12.8899 17.1819ZM12.4617 15.6558C11.639 16.2849 10.6549 16.5995 9.5096 16.5995C8.38039 16.5995 7.39635 16.2849 6.55751 15.6558C5.7348 15.0105 5.0976 14.1071 4.64591 12.9456C4.19423 11.7842 3.96838 10.4049 3.96838 8.80787C3.96838 7.21084 4.18616 5.83159 4.62171 4.67011C5.0734 3.50863 5.7106 2.61332 6.53331 1.98419C7.37216 1.33893 8.36425 1.01629 9.5096 1.01629C10.6549 1.01629 11.639 1.33893 12.4617 1.98419C13.3005 2.61332 13.9377 3.50863 14.3733 4.67011C14.825 5.83159 15.0508 7.21084 15.0508 8.80787C15.0508 10.4049 14.825 11.7842 14.3733 12.9456C13.9377 14.1071 13.3005 15.0105 12.4617 15.6558Z"
          />
          <path d="M9.5096 17.6157C9.46088 17.6157 9.41281 17.6162 9.36442 17.6157C10.1387 17.6803 10.8969 17.8738 11.639 18.1965C12.381 18.5352 13.1312 18.9466 13.8893 19.4306C14.6637 19.9145 15.4541 20.4146 16.2607 20.9308C17.0673 21.4631 17.9222 21.9552 18.8256 22.4068C20.2613 23.1328 21.6164 23.6006 22.8908 23.8103C24.1652 24.0361 25.3267 24.0603 26.3752 23.8829C27.4399 23.7216 28.3594 23.407 29.1337 22.9392C29.9081 22.4714 30.513 21.9068 30.9485 21.2454C31.3841 20.584 31.6261 19.8742 31.6745 19.116L31.5293 19.0192C30.8679 19.5677 30.1178 19.9871 29.2789 20.2775C28.4401 20.5678 27.5367 20.7372 26.5688 20.7856C25.6009 20.834 24.5846 20.7614 23.5199 20.5678C22.4714 20.3743 21.4067 20.0678 20.3259 19.6483C19.3257 19.2612 18.4304 18.9143 17.6399 18.6078C16.8495 18.3175 16.1074 18.0594 15.4138 17.8335C14.7201 17.6238 14.0345 17.4383 13.357 17.277C13.2034 17.2441 13.0476 17.2124 12.8899 17.1819C11.8617 17.4711 10.7349 17.6157 9.5096 17.6157Z" />
        </svg>
        <nav ref={footerLinksTag} className="mr-auto flex items-center gap-8">
          {/* {fl.map((link, i) => (
            <span key={i}>{link}</span>
          ))} */}
        </nav>
        <nav className="flex items-center gap-8">
          <a href="https://instagram.com">
            <Instagram size={24} />
          </a>
          <a href="https://youtube.com">
            <Youtube size={24} />
          </a>
          <a href="https://github.com/MMMJB/Quilli-react">
            <GitHub size={24} />
          </a>
        </nav>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-home-lgt/50">
          © 2023 Michael Beck. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
