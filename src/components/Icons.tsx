import { SVGProps } from "react";

export function ReactjsFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.448 16.24a22 22 0 0 1-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884c.863-.498.982-2.225.413-4.484c-.853.19-1.779.334-2.757.424m-1.31.087a28 28 0 0 1-2.275 0c.376.492.758.948 1.137 1.363q.571-.623 1.138-1.364m5.04-7.894c2.665.764 4.406 2.034 4.406 3.567s-1.74 2.803-4.405 3.567c.67 2.69.44 4.832-.887 5.598c-1.327.767-3.297-.105-5.292-2.031c-1.994 1.925-3.964 2.798-5.291 2.031s-1.557-2.908-.887-5.598C3.157 14.803 1.417 13.533 1.417 12s1.74-2.803 4.405-3.567c-.67-2.69-.44-4.832.887-5.599c1.327-.766 3.297.106 5.291 2.032c1.995-1.926 3.965-2.798 5.292-2.032c1.327.767 1.557 2.909.887 5.599m-.973-.248c.57-2.26.45-3.986-.413-4.485c-.863-.498-2.418.262-4.09 1.885a22 22 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425m-10.41 7.63c-.569 2.26-.45 3.986.414 4.484c.863.498 2.418-.261 4.09-1.884a22 22 0 0 1-1.746-2.176a22 22 0 0 1-2.757-.425m4.068-8.142a28 28 0 0 1 2.275 0A21 21 0 0 0 12 6.31q-.57.625-1.137 1.364m-1.31.087a22 22 0 0 1 1.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485c.853-.19 1.779-.334 2.757-.425m4.34 7.52A25.4 25.4 0 0 0 15.788 12a25.4 25.4 0 0 0-1.893-3.28a25.4 25.4 0 0 0-3.787 0A25.4 25.4 0 0 0 8.213 12a25.4 25.4 0 0 0 1.894 3.28a25.4 25.4 0 0 0 3.787 0m1.285-.132q.924-.12 1.75-.303a21 21 0 0 0-.612-1.667a28 28 0 0 1-1.137 1.97M8.823 8.851q-.924.121-1.75.304q.255.806.613 1.667a28 28 0 0 1 1.137-1.97m-1.75 5.994q.826.182 1.75.303a28 28 0 0 1-1.137-1.97a21 21 0 0 0-.613 1.667m-.978-.245c.262-.834.6-1.708 1.01-2.6a22 22 0 0 1-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6M16.93 9.155q-.827-.183-1.75-.304a28 28 0 0 1 1.137 1.97q.357-.86.613-1.666m.977.245c-.26.834-.6 1.708-1.01 2.6c.41.892.75 1.766 1.01 2.6c2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6M12 13.879a1.88 1.88 0 1 1 0-3.758a1.88 1.88 0 0 1 0 3.758"
      ></path>
    </svg>
  )
}

export function BaselineCoffee(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29c3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z"
      ></path>
    </svg>
  )
}

export function Cat(props: SVGProps<SVGSVGElement>) {
    const color = props.color || "currentColor";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth="4"
          d="M42 26C42 34.8366 33.9411 42 24 42C14.0589 42 6 34.8366 6 26M15 12.1405C17.6476 10.7792 20.7214 10 24 10C27.2786 10 30.3524 10.7792 33 12.1405"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M6 26V8.48814C6 6.757 8.05005 5.84346 9.33729 7.00098L15 12.093"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M42 26V8.48814C42 6.757 39.9499 5.84346 38.6627 7.00098L33 12.093"
        ></path>
        <circle cx="30" cy="22" r="2" fill={color}></circle>
        <circle cx="18" cy="22" r="2" fill={color}></circle>
        <circle cx="24" cy="28" r="2" fill={color}></circle>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M16 30L4 31"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M19 35L7 41"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M32 30L44 31"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M29 35L41 41"
        ></path>
      </g>
    </svg>
  )
}

export function Materialui(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8zM48 41l47.9-27.6v55.3L64 87l-16-9.2l32-18.4V41L48 59.4z"
      ></path>
      <path
        fill="currentColor"
        d="M48 77.8v18.4l32 18.4V96.2zm32 36.8L127.8 87V50.2l-16 9.2v18.4L80 96.2zM111.9 41V22.6l16-9.2v18.4z"
      ></path>
    </svg>
  )
}
