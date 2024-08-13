"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  const style = pathname === "/" ? "border-[#d22f27] border-r-2" : "";
  const fill = pathname === "/" ? "#d22f27" : "#898996";
  return (
    <aside className="fixed bottom-0 top-0 pt-10 ml-14  border-r-[0.1px] border-r-[#898996] w-[15%] ">
      <Link href={`/`}>
        <div className=" font-extrabold font-serif flex">
          <Image src="logo.svg" alt="logo" width={20} height={20} />
          <h1 className="ml-2 text-xl">
            MMoon<span className="text-[#d22f27]">.</span><span className="text-xs">tv</span>
          </h1>
        </div>
      </Link>
      <div className="my-10 font-mono text-[#898996]">
        <h6 className=" text-base font-bold">MENU</h6>
        <ul className="mt-5">
          <Link href={`/`}>
            <li className={`text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500 ${style}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="20px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,300,150"
                className="inline mb-3 mr-1"
              >
                <g
                  fill={fill}
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,2c-0.26138,0.00002 -0.51237,0.10237 -0.69922,0.28516l-10.9082,8.92187c-0.0126,0.00947 -0.02497,0.01924 -0.03711,0.0293l-0.03711,0.03125v0.00195c-0.20274,0.18887 -0.31802,0.45339 -0.31836,0.73047c0,0.55228 0.44772,1 1,1h1v11c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-11h1c0.55228,0 1,-0.44772 1,-1c0.0002,-0.27776 -0.11513,-0.54309 -0.31836,-0.73242l-0.01562,-0.01172c-0.02194,-0.01988 -0.04475,-0.03878 -0.06836,-0.05664l-1.59766,-1.30664v-3.89258c0,-0.552 -0.448,-1 -1,-1h-1c-0.552,0 -1,0.448 -1,1v1.43945l-6.32227,-5.17187c-0.18422,-0.17125 -0.42621,-0.26679 -0.67773,-0.26758zM18,15h4v8h-4z"></path>
                  </g>
                </g>
              </svg>
              Home
            </li>
          </Link>
          <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#898996"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,300,150"
              className="inline mb-2 mr-1"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M178.462,0H19.873C8.914,0,0.001,8.913,0.001,19.872v71.361V107.1v15.867v15.867v39.628     c0,10.959,8.913,19.872,19.872,19.872h158.589c10.958,0,19.872-8.913,19.872-19.872v-39.628v-15.867V107.1V91.233V19.872     C198.334,8.913,189.42,0,178.462,0z M7.933,19.872c0-6.581,5.358-11.939,11.939-11.939h158.589     c6.581,0,11.938,5.357,11.938,11.939v67.394h-47.6c-0.334,0-0.631,0.112-0.941,0.19c-8.639-12.097-22.76-20.023-38.726-20.023     S73.048,75.36,64.409,87.456c-0.309-0.077-0.607-0.19-0.941-0.19H7.933V19.872z M142.8,115.033     c0,21.871-17.796,39.667-39.667,39.667c-21.871,0-39.666-17.796-39.666-39.667c0-21.871,17.796-39.667,39.667-39.667     C125.006,75.366,142.8,93.162,142.8,115.033z M7.933,95.2h51.984c-1.168,2.534-2.107,5.184-2.818,7.933H7.933V95.2z      M7.933,111.067h47.801c-0.109,1.311-0.201,2.628-0.201,3.967s0.092,2.655,0.201,3.967H7.933V111.067z M7.933,126.933H57.1     c0.711,2.749,1.651,5.4,2.818,7.933H7.933V126.933z M190.401,178.461c0,6.582-5.357,11.939-11.939,11.939H19.873     c-6.581,0-11.939-5.357-11.939-11.939V142.8h55.533c0.334,0,0.631-0.112,0.941-0.19c8.639,12.097,22.76,20.023,38.726,20.023     s30.086-7.927,38.726-20.023c0.31,0.078,0.607,0.19,0.941,0.19h47.6V178.461z M190.401,134.867H146.35     c1.168-2.534,2.107-5.184,2.818-7.933h41.233V134.867z M190.401,119h-39.868c0.109-1.311,0.201-2.628,0.201-3.967     c0-1.339-0.092-2.655-0.201-3.967h39.868V119z M190.401,103.133h-41.233c-0.711-2.749-1.651-5.4-2.818-7.933h44.051V103.133z"
                      fill="#898996"
                    />
                    <path
                      d="M103.133,79.333c-19.686,0-35.7,16.014-35.7,35.7c0,19.686,16.014,35.7,35.7,35.7c19.686,0,35.7-16.014,35.7-35.7     C138.834,95.347,122.82,79.333,103.133,79.333z M103.133,142.8c-15.309,0-27.767-12.458-27.767-27.767     c0-15.309,12.458-27.766,27.767-27.766s27.767,12.458,27.767,27.767C130.901,130.343,118.443,142.8,103.133,142.8z"
                      fill="#898996"
                    />
                    <path
                      d="M138.834,55.533h39.667c2.192,0,3.967-1.774,3.967-3.967V19.833c0-2.192-1.774-3.967-3.967-3.967h-39.667     c-2.192,0-3.967,1.774-3.967,3.967v31.733C134.868,53.759,136.641,55.533,138.834,55.533z M142.8,23.8h31.733v23.8H142.8V23.8z"
                      fill="#898996"
                    />
                    <path
                      d="M87.268,39.667c0-6.562-5.326-11.9-11.877-11.9H27.743c-6.55,0-11.877,5.338-11.877,11.9s5.327,11.9,11.877,11.9h47.647     C81.941,51.567,87.268,46.229,87.268,39.667z M23.8,39.667c0-2.189,1.77-3.967,3.943-3.967h47.647     c2.212,0,3.944,1.743,3.944,3.967c0,2.189-1.77,3.967-3.943,3.967H27.743C25.532,43.634,23.8,41.891,23.8,39.667z"
                      fill="#898996"
                    />
                    <rect
                      x="158.667"
                      y="162.633"
                      width="7.933"
                      height="19.833"
                      fill="#898996"
                    />
                    <rect
                      x="170.568"
                      y="162.633"
                      width="7.933"
                      height="19.833"
                      fill="#898996"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Genres
          </li>
          <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              className="inline mb-1 mr-2"
            >
              <g id="Iconly/Curved/Category">
                <g id="Category">
                  <path
                    id="Stroke 1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z"
                    stroke="#dbdbe6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#898996"
                  />
                  <path
                    id="Stroke 3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
                    stroke="#dbdbe6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#898996"
                  />
                  <path
                    id="Stroke 5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z"
                    stroke="#dbdbe6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#898996"
                  />
                  <path
                    id="Stroke 7"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z"
                    stroke="#dbdbe6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#898996"
                  />
                </g>
              </g>
            </svg>
            Categories
          </li>
        </ul>
      </div>
      <div className="my-10 font-mono text-[#898996]">
        <h6 className=" text-base font-bold">SOCIAL</h6>
        <ul className="mt-5">
          <Link href={`/`}>
            <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#898996"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                className="inline mb-1 mr-2"
              >
                <path
                  d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
                  fill="#898996"
                />
              </svg>
              Friends
            </li>
          </Link>
          <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="inline mb-1 mr-3"
              viewBox="0 -0.5 65 65"
              version="1.1"
            >
              <title>Person-heart</title>
              <desc fill="#898996">Created with Sketch.</desc>
              <defs fill="#898996"></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Person-heart"
                  transform="translate(2.000000, 1.000000)"
                  stroke="#c7c7cc"
                  strokeWidth="2"
                >
                  <path
                    d="M54.9,49 C50,45.3 43.6,44.5 41.1,43.2 C38.5,41.9 35,39.5 35,37.4 C35,36.3 35.5,35.6 35.8,35.4 C40.9,32.6 42.6,23.5 43,23.5 C44.7,23.5 45.9,19.2 45.9,16.4 C45.9,14.1 45.2,14.2 44,13.5 L44,13.2 C44,5.8 37.9,0 30.5,0 C23,0 16.6,6 16.6,13.4 L16.6,13.7 C15.4,14.4 14.9,14.8 14.9,17 C14.9,19.9 15.9,23.9 17.6,23.9 C17.9,23.9 20.1,32.7 25,35.7 C25.3,35.9 25.8,36.4 25.8,37.4 C25.8,39.8 22.5,41.9 19.7,43.3 C16.3,45 -0.1,46.4 -0.1,62 L52.9,62"
                    id="Shape"
                    fill="#898996"
                  ></path>
                  <path
                    d="M53,50 C51.6,46.9 44,46.7 44,52.2 C44,56.5 51.4,62 53,62 C54.6,62 62,56.5 62,52.2 C62,46.1 52.1,46.5 52.1,53"
                    id="Shape"
                    fill="#898996"
                  ></path>
                </g>
              </g>
            </svg>
            Parties
          </li>
          <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="inline mb-1 mr-2"
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path
                d="M478.4 221.3c-44.7 0-81 36.3-81 81s36.3 81 81 81 81-36.3 81-81-36.3-81-81-81z m32.4 288.9c0-17.9-14.5-32.4-32.4-32.4S446 492.3 446 510.2s14.5 32.4 32.4 32.4 32.4-14.5 32.4-32.4z m-113.4 208c0 44.7 36.3 81 81 81s81-36.3 81-81-36.3-81-81-81c-44.8 0-81 36.2-81 81z m207.9-208c0 44.7 36.3 81 81 81s81-36.3 81-81-36.3-81-81-81-81 36.3-81 81z m-415.9 0c0 44.7 36.3 81 81 81s81-36.3 81-81-36.3-81-81-81-81 36.3-81 81z m766.4 379.1c-30-65.3-95.7-108-167.6-108.7-37.7-0.6-74.2 10.6-105.5 31.6-0.2 0.1-0.3 0.2-0.5 0.3-60.3 40.7-130.8 62.3-203.8 62.3-201 0-364.5-163.5-364.5-364.5s163.5-364.5 364.5-364.5 364.5 163.5 364.5 364.5c0 61.7-15.7 122.6-45.3 176.2-6.5 11.7-2.2 26.5 9.5 33s26.5 2.2 33-9.5c33.6-60.8 51.4-129.8 51.4-199.7 0-227.8-185.3-413.1-413.1-413.1S65.3 282.5 65.3 510.3s185.3 413.1 413.1 413.1c82.1 0 161.4-24.1 229.4-69.6 0.2-0.1 0.5-0.2 0.7-0.4 23.4-16.1 50.8-24.1 79.3-24.2 53.1 0.5 101.7 32.1 123.9 80.4 4.1 8.9 12.9 14.2 22.1 14.2 3.4 0 6.8-0.7 10.1-2.2 12.2-5.7 17.5-20.1 11.9-32.3z"
                fill="#898996"
              />
            </svg>
            Media
          </li>
        </ul>
      </div>
      <div className="my-10 font-mono text-[#898996]">
        <h6 className=" text-base font-bold">GENRAL</h6>
        <ul className="mt-5">
          <Link href={`/`}>
            <li className="text-base font-normal my-3 cursor-pointer hover:text-white transition-colors duration-500">
              <svg
                width="20px"
                height="20px"
                className="inline mb-1 mr-2"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#898996"
                strokeWidth="0.00024000000000000003"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.048"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.59938 6.22413C3.362 4.82033 4.68002 3.64638 6.07306 4.02084L7.12777 4.30435C7.96485 4.52937 8.85305 4.19092 9.31887 3.46943L10.3298 1.90368C11.1077 0.698775 12.8923 0.698773 13.6702 1.90368L14.6811 3.46943C15.1469 4.19092 16.0351 4.52937 16.8722 4.30435L17.9269 4.02084C19.32 3.64638 20.638 4.82033 20.4006 6.22413L20.1405 7.76265C20.0068 8.55335 20.3773 9.3442 21.0747 9.75663L22.0388 10.3268C23.3204 11.0847 23.3204 12.9153 22.0388 13.6732L21.0747 14.2434C20.3773 14.6558 20.0068 15.4467 20.1405 16.2374L20.4006 17.7759C20.638 19.1797 19.32 20.3536 17.9269 19.9792L16.8722 19.6957C16.0351 19.4706 15.1469 19.8091 14.6811 20.5306L13.6702 22.0963C12.8923 23.3012 11.1077 23.3012 10.3298 22.0963L9.31887 20.5306C8.85305 19.8091 7.96485 19.4706 7.12777 19.6957L6.07306 19.9792C4.68002 20.3536 3.362 19.1797 3.59938 17.7759L3.85954 16.2374C3.99324 15.4467 3.62271 14.6558 2.92531 14.2434L1.96116 13.6732C0.679612 12.9153 0.679614 11.0847 1.96116 10.3268L2.92531 9.75663C3.62271 9.3442 3.99324 8.55335 3.85954 7.76265L3.59938 6.22413ZM9.03042 6.14621H6.06085V9.0731L3.09127 12L6.06085 14.9269V17.8538H9.03042L12 20.7807L14.9696 17.8538H17.9392V14.9269L20.9087 12L17.9392 9.0731V6.14621H14.9696L12 3.21931L9.03042 6.14621Z"
                    fill="#898996"
                  />
                  <path
                    d="M16.4515 12C16.4515 14.4247 14.4572 16.3903 11.9971 16.3903C9.53706 16.3903 7.54277 14.4247 7.54277 12C7.54277 9.57528 9.53706 7.60965 11.9971 7.60965C14.4572 7.60965 16.4515 9.57528 16.4515 12ZM9.51963 12C9.51963 13.3486 10.6288 14.4419 11.9971 14.4419C13.3654 14.4419 14.4746 13.3486 14.4746 12C14.4746 10.6514 13.3654 9.5581 11.9971 9.5581C10.6288 9.5581 9.51963 10.6514 9.51963 12Z"
                    fill="#898996"
                  />
                </g>
              </svg>
              Settings
            </li>
          </Link>
          <li className="text-base font-bold mt-3 cursor-pointer hover:text-white transition-colors duration-500">
            <svg
              width="20px"
              height="20px"
              className="inline mb-1 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 12H20M20 12L17 9M20 12L17 15"
                  stroke="#898996"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
                  stroke="#898996"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            Log Out
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
