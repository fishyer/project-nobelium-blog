import { useEffect, useRef } from "react";
import Link from "next/link";
import BLOG from "@/blog.config";
import { useLocale } from "@/lib/locale";

const NavBar = () => {
  const locale = useLocale();
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || "/", show: true },
    { id: 1, name: locale.NAV.ABOUT, to: "/about", show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: "/feed", show: true },
    { id: 3, name: locale.NAV.SEARCH, to: "/search", show: true },
  ];
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar;
  const navRef = useRef(null);
  const sentinalRef = useRef([]);
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add("sticky-nav-full");
      } else {
        navRef.current?.classList.remove("sticky-nav-full");
      }
    } else {
      navRef.current?.classList.add("remove-sticky");
    }
  };
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler);
    obvserver.observe(sentinalRef.current);
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef]);
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? "max-w-3xl px-4" : "px-4 md:px-24"
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 2112 2112"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                >
                  <g transform="matrix(1,0,0,1,-8537.5,-3168.75)">
                    <g
                      id="favicon"
                      transform="matrix(5.55556,0,0,5.55556,8537.5,3168.75)"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="380"
                        height="380"
                        style="fill:none;"
                      />
                      <g id="text">
                        <g transform="matrix(0.18,0,0,0.18,-1536.75,-570.375)">
                          <path
                            d="M10121.1,5130.4C9968.22,5219.55 9790.52,5270.64 9600.98,5270.64C9030.08,5270.64 8566.59,4807.14 8566.59,4236.24C8566.59,3665.35 9030.08,3201.85 9600.98,3201.85C10171.9,3201.85 10635.4,3665.35 10635.4,4236.24C10635.4,4433.49 10580.1,4617.92 10484.1,4774.86C10439.2,4735.27 10380.2,4711.24 10315.7,4711.24C10175.1,4711.24 10060.9,4825.41 10060.9,4966.03C10060.9,5028.65 10083.5,5086.02 10121.1,5130.4Z"
                            style="fill:rgb(255,255,2);"
                          />
                        </g>
                        <g transform="matrix(1,0,0,1,0,1.696)">
                          <path
                            d="M146.532,249.687L230.071,249.687L230.071,233.947L146.532,233.947L146.532,249.687ZM230.071,211.429L146.532,211.429L146.532,226.926L230.071,226.926L230.071,211.429ZM146.532,204.407L230.071,204.407L230.071,187.941L146.532,187.941L146.532,204.407ZM148.953,103.675C148.953,103.675 156.216,109.489 162.027,115.057C168.083,110.94 174.134,105.614 179.463,99.802C176.072,97.139 172.683,94.958 169.534,93.022C168.323,93.022 167.113,92.78 165.66,92.295C158.154,94.716 144.594,97.621 131.277,99.56L131.762,114.33L140.236,114.33L148.953,103.675ZM290.605,274.385C297.87,277.048 299.564,280.196 299.564,285.039C299.564,295.21 290.363,299.325 250.652,299.325L225.712,299.325C201.74,299.325 197.623,294.726 197.623,278.017L197.623,256.225L182.853,256.225C171.955,288.672 135.393,299.568 82.365,303.2L81.637,299.568C122.074,291.821 144.836,280.438 152.101,256.225L146.532,256.225L146.532,257.194C146.532,259.857 134.666,265.91 123.528,265.91L119.411,265.91L119.411,169.295L148.227,180.92L227.647,180.92L240.483,167.117L263.729,184.792C264.697,179.224 265.664,171.476 266.634,164.696L107.304,164.696C108.998,177.53 105.125,187.941 94.955,192.058C77.521,199.323 66.142,177.53 85.269,167.602C91.564,164.696 98.103,156.462 98.345,144.597L101.251,144.597C103.432,148.956 104.883,153.556 106.095,157.673L108.273,157.673L106.095,86.484L131.277,91.325C139.51,85.757 147.501,79.219 151.858,75.104L170.262,89.147C176.8,89.389 182.126,89.874 186.726,91.083C190.358,86.242 193.506,81.4 195.929,76.798L216.268,87.211C215.057,89.632 212.394,89.874 208.276,89.147C206.098,91.811 203.435,94.474 200.528,97.139C208.276,102.95 208.521,110.698 204.161,114.088L220.627,121.837C219.416,124.258 216.995,124.742 212.878,123.774C210.457,127.163 207.309,130.312 203.677,133.459C216.753,144.113 210.215,158.158 197.865,153.314C196.169,150.166 193.506,146.778 190.603,143.388C181.884,148.956 172.2,153.556 162.512,156.704L160.333,152.831C168.083,148.23 175.83,142.418 182.61,135.88C177.767,131.764 172.683,128.133 168.323,125.71L170.504,123.289C178.735,123.774 185.273,124.986 190.843,126.921C193.75,123.289 196.413,119.414 198.35,115.783C197.381,115.541 196.413,115.541 195.202,115.057C193.506,112.394 190.843,109.489 187.694,106.58C180.189,111.667 171.955,116.024 163.966,119.172L163.966,118.932C162.996,120.626 161.06,121.353 158.879,121.353L132.002,121.353L132.487,136.608L140.721,136.608L149.68,125.468C149.68,125.468 159.364,133.459 165.419,139.755C164.935,142.418 162.512,143.63 159.364,143.63L132.729,143.63L133.214,157.673L242.178,157.673L242.902,143.63L220.627,143.63L218.688,136.608L243.146,136.608L243.872,121.353L221.837,121.353L219.658,114.33L244.114,114.33L244.841,98.833L219.174,98.833L217.237,91.811L242.662,91.811L253.558,78.977L279.468,98.591C278.014,100.77 276.077,101.496 271.233,102.223L269.055,153.556L279.468,143.146L304.891,167.36C302.954,169.295 300.533,170.023 295.691,170.265C287.942,175.349 275.108,182.614 265.907,186.489L267.116,187.456C265.664,189.152 262.517,190.846 257.917,191.816L257.917,255.015C257.675,256.709 243.632,261.551 234.671,261.551L230.071,261.551L230.071,256.225L224.5,256.225L224.5,273.417C224.5,276.08 225.227,276.808 232.249,276.808L253.558,276.808C261.064,276.808 268.086,276.808 271.478,276.566C274.626,276.324 275.835,275.838 277.289,273.902C279.708,270.754 282.855,263.005 287.457,251.382L289.88,251.382L290.605,274.385Z"
                            style="fill-rule:nonzero;"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    className="fill-current text-black dark:text-white"
                  />
                  <rect width="24" height="24" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(45) scale(39.598)"
                    >
                      <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg> */}
              </div>
            </a>
          </Link>
          {navBarTitle ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
          ) : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{" "}
              <span className="font-normal">{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
