'use client';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const DrawSvg = () => {
  const svgPathRef = useRef(null);
  const svgPathRef2 = useRef(null);
  const svgPathRef3 = useRef(null);
  const svgPathRef4 = useRef(null);
  const svgPathRef5 = useRef(null);

  useGSAP(
    () => {

      const timeline = gsap.timeline()

      if (svgPathRef.current) {
        timeline.fromTo(
          svgPathRef.current,
          { drawSVG: false,autoAlpha: 1, },
          { drawSVG: true, duration: 2,autoAlpha: 1, ease: "power1.inOut" }
        );
        timeline.fromTo(
          svgPathRef2.current,
          { drawSVG: false,autoAlpha: 1, },
          { drawSVG: true, duration: 0.5,autoAlpha: 1, ease: "power1.inOut" }
        )
        timeline.fromTo(
          svgPathRef3.current,
           { drawSVG: false,autoAlpha: 1, },
          { drawSVG: true, duration: 0.5,autoAlpha: 1, ease: "power1.inOut" }
        )
        timeline.fromTo(
          svgPathRef4.current,
           { drawSVG: false,autoAlpha: 1, },
          { drawSVG: true, duration: 0.5,autoAlpha: 1, ease: "power1.inOut" }
        )
        timeline.fromTo(
          svgPathRef5.current,
           { drawSVG: false,autoAlpha: 1, },
          { drawSVG: true, duration: 0.5,autoAlpha: 1, ease: "power1.inOut" }
        )
      }
    },
    { scope: svgPathRef, dependencies: [svgPathRef] }
  );

  return (
    <>
      
<svg width="386" height="419" viewBox="0 0 386 419" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={svgPathRef} d="M350.366 69.7699C353.384 72.1499 356.402 74.5299 359.43 76.9199C358.912 84.7699 349.044 89.5399 342.404 85.8099C335.774 82.0799 333.676 72.2299 337.125 65.2399C342.184 54.9899 357.025 52.6799 365.629 59.8999C374.232 67.1199 375.832 81.2899 370.323 91.2799C364.814 101.27 353.461 106.88 342.414 106.75C334.71 106.66 326.729 103.79 321.795 97.6199C317.417 92.1499 315.874 84.6999 316.161 77.5799C316.717 63.8299 324.162 50.3299 335.803 43.8699C347.444 37.4099 362.946 38.7999 372.728 48.0299C382.51 57.2599 385.232 73.9999 378.113 85.5799C369.365 99.8099 350.788 102.57 334.595 102.94C243.93 105.01 153.973 76.1899 63.5753 83.8099C51.2253 84.8499 38.8369 86.5899 27.1001 90.7599C23.6509 91.9899 19.8281 93.4099 16.4938 91.8799C13.0542 90.2899 11.5021 86.1699 10.4577 82.3999C7.63133 72.2299 5.99297 61.7099 5.60014 51.1299C5.35103 44.3399 5.74385 37.0699 9.52838 31.5399C13.6578 25.4999 20.8724 22.8299 27.6845 20.7199C129.627 -10.9401 239.436 5.88993 342.73 32.3399C357.025 35.9999 372.862 41.0899 379.78 54.6499C386.745 68.3099 381.572 85.6899 372.268 97.7399C362.975 109.79 350.174 118.25 339.127 128.58C315.778 150.43 300.745 180.27 288.855 210.55C272.041 253.34 260.4 299.61 265.104 345.59C266.828 362.45 271.044 379.69 281.411 392.75C291.787 405.8 309.493 413.58 324.813 407.92C331.405 405.48 337.499 400.19 338.974 393.05C340.45 385.91 335.678 377.42 328.694 377.05C321.709 376.68 316.324 387.14 321.469 392.1C313.163 390.31 312.176 376.33 319.18 371.36C326.193 366.38 336.368 369.63 341.944 376.3C340.44 379.78 338.936 383.26 337.431 386.75C343.228 382.66 340.478 372.22 334.26 368.87C328.042 365.52 320.54 367 313.709 368.55C300.199 371.62 286.69 374.69 273.181 377.76C290.57 374.79 307.95 371.83 325.34 368.86C328.061 368.4 330.916 367.94 333.513 368.91C336.588 370.05 338.754 373.03 339.894 376.22C343.717 386.92 337.019 399.23 327.592 405.04C318.164 410.85 306.782 411.74 295.85 412.38C215.091 417.1 134.015 415.83 53.4289 408.6C44.9592 407.84 36.2979 406.95 28.6426 403.09C16.4268 396.92 8.46488 383.77 5.24563 370.01C2.02639 356.26 2.94617 341.83 4.55579 327.77C7.67923 300.37 13.7345 272.27 29.8307 250.4C41.4717 234.58 57.7596 222.89 68.7108 206.54C85.3244 181.74 87.5759 149.42 84.9986 119.28C83.8489 105.86 80.8308 90.7899 69.8413 83.7199" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" className="text-black dark:text-white"/>
<path  ref={svgPathRef2}  d="M98.8242 171.44C105.445 169.1 111.845 166.07 117.9 162.41C119.309 165.43 123.256 166.15 126.36 165.29C129.474 164.43 132.195 162.44 135.261 161.42C142.868 158.89 150.897 162.62 158.677 164.45C166.007 166.17 173.585 166.2 181.097 166.22C204.063 166.28 227.029 166.34 250.004 166.4" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" className="text-black dark:text-white"/>
<path ref={svgPathRef3}   d="M82.5747 219.72C85.1999 216.07 90.3162 215.99 94.6852 216.21C132.588 218.19 170.606 217.77 208.461 214.95" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" className="text-black dark:text-white"/>
<path ref={svgPathRef4}  d="M67.3599 271.37C73.5876 267.26 80.1985 263.79 87.0777 261.02C88.9173 260.28 90.9293 259.58 92.8264 260.13C95.2312 260.83 96.7259 263.29 98.7763 264.79C104.86 269.23 112.956 264.15 120.353 263.52C124.176 263.19 127.989 264.12 131.783 264.7C145.235 266.76 158.917 264.53 172.349 262.3" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" className="text-black dark:text-white"/>
<path ref={svgPathRef5}  d="M168.076 356.52C171.736 353.79 175.952 351.87 180.359 350.92C179.631 353.48 182.189 356.03 184.747 356.12C187.305 356.21 189.614 354.64 191.617 352.98C193.619 351.32 195.603 349.46 198.075 348.78C205.05 350.94 212.619 350.93 219.584 348.76" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" className="text-black dark:text-white"/>
</svg>

    </>
  );
};

export default DrawSvg;

