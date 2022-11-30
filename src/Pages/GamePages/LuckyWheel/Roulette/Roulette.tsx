import { memo } from "react";
import { rouletteBgColors } from "../../../../constants/const";

import styles from "./roulette.module.scss";

interface Props {
  segmentCount: number;
  isActive: boolean;
  rotateCount: number;
  apiResponse: any;
}

const Roulette: React.FC<Props> = ({
  segmentCount,
  isActive,
  rotateCount,
  apiResponse
}) => {
  const deg: number = 360 / segmentCount;
  const c = segmentCount === 8 ? 50 : segmentCount === 16 ? 29.3 : 21.2;
  const deviation = segmentCount === 8 ? 1.5 : segmentCount === 16 ? 2.5 : 3.5;
  const randomDeg = rotateCount ? Math.floor(Math.random() * deg - deg / 2) : 0;

  const arrOfSegments = Array(segmentCount)
    .fill("")
    .map((_, i) => (
      <div
        key={i}
        style={{
          transform: `rotate(${i * deg + deviation * deg}deg)`,
          clipPath: `polygon(0 0%, 0 ${c}%, 50% 50%)`,
        }}
        className={`${styles.segment}`}
      >
        <div
          className={styles.fill}
          style={{ color: rouletteBgColors[i] }}
        ></div>
      </div>
    ));

  const arrCoefficientsItem = Array(segmentCount)
    .fill("")
    .map((_, i) => (
      <div
        className={`${styles.coefficientsItem} ${
          apiResponse[0] === i ? styles.winBorder : ""
        }`}
        style={{ background: rouletteBgColors[i] }}
        key={i}
      >
        500
      </div>
    ));

  const rouletteDevitionFrom0Deg = (segmentCount - apiResponse[0]) * deg;
  let rotateDeg = rotateCount * 720 + rouletteDevitionFrom0Deg + randomDeg;  

  return (
    <div className={styles.rouletteWrapper}>
      <div className={styles.gameBox}>
        <div className={styles.rouletteBox}>
          <svg
            width="82"
            viewBox="0 0 82 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.caretIcon}
          >
            <g filter="url(#filter0_ddi_1_483)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.1902 49.0158L41.0217 85L54.8532 49.0158C56.2184 46.6589 57 43.9208 57 41C57 32.1634 49.8463 25 41.0217 25C32.1972 25 25.0435 32.1634 25.0435 41C25.0435 43.9208 25.8251 46.6589 27.1902 49.0158ZM41.0217 68.2967L49.4319 46.4168L49.6701 46.0055C50.5198 44.5385 51.0081 42.8355 51.0081 41C51.0081 35.4772 46.5371 31 41.0217 31C35.5064 31 31.0353 35.4772 31.0353 41C31.0353 42.8355 31.5237 44.5385 32.3734 46.0055L32.6116 46.4168L41.0217 68.2967Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.1902 49.0158L41.0217 85L54.8532 49.0158C56.2184 46.6589 57 43.9208 57 41C57 32.1634 49.8463 25 41.0217 25C32.1972 25 25.0435 32.1634 25.0435 41C25.0435 43.9208 25.8251 46.6589 27.1902 49.0158ZM41.0217 68.2967L49.4319 46.4168L49.6701 46.0055C50.5198 44.5385 51.0081 42.8355 51.0081 41C51.0081 35.4772 46.5371 31 41.0217 31C35.5064 31 31.0353 35.4772 31.0353 41C31.0353 42.8355 31.5237 44.5385 32.3734 46.0055L32.6116 46.4168L41.0217 68.2967Z"
                fill="url(#paint0_linear_1_483)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_ddi_1_483"
                x="0.299845"
                y="0.256388"
                width="81.4438"
                height="109.487"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="12.3718"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.372549 0 0 0 0 0.878431 0 0 0 0 1 0 0 0 0.3 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_483"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="6.07194"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.3725 0 0 0 0 0.877561 0 0 0 0 1 0 0 0 1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_483"
                  result="effect2_dropShadow_1_483"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_483"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="2.35064"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.372549 0 0 0 0 0.878431 0 0 0 0 1 0 0 0 1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect3_innerShadow_1_483"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_1_483"
                x1="41.0217"
                y1="85"
                x2="41.0217"
                y2="25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div
            className={`${styles.roulette} `}
            style={{
              transform: `${isActive && `rotate(${rotateDeg}deg)`}`,
            }}
          >
            {arrOfSegments}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="237"
            height="237"
            fill="none"
            className={styles.wheelCenterIcon}
          >
            <path
              fill="#fff"
              fillOpacity=".05"
              d="M118.5 236.246c65.029 0 117.746-52.717 117.746-117.746C236.246 53.47 183.529.754 118.5.754 53.47.754.754 53.47.754 118.5S53.47 236.246 118.5 236.246Z"
            ></path>
            <circle
              cx="118.5"
              cy="118.5"
              r="96.994"
              fill="#fff"
              fillOpacity=".05"
            ></circle>
            <g filter="url(#a)">
              <circle
                cx="118.969"
                cy="118.501"
                r="81.817"
                fill="url(#b)"
              ></circle>
              <circle
                cx="118.969"
                cy="118.501"
                r="80.86"
                stroke="url(#c)"
                strokeWidth="1.913"
              ></circle>
            </g>
            <g filter="url(#d)">
              <circle
                cx="118.968"
                cy="118.502"
                r="60.778"
                fill="url(#e)"
              ></circle>
            </g>
            <circle
              cx="118.968"
              cy="118.502"
              r="60.14"
              stroke="url(#f)"
              strokeWidth="1.275"
            ></circle>
            <g fill="#81A8B0" filter="url(#g)">
              <path d="M150.667 145.66c-2.998-3.579-5.99-7.163-8.978-10.751-.221-.265-.404-.406-.775-.273-3.498 1.237-7.101 1.937-10.749 2.305-2.861.291-5.735.474-8.607.58a96.748 96.748 0 0 1-13.206-.438c-4.285-.432-8.523-1.152-12.643-2.554-.371-.128-.58-.027-.826.27a4381.623 4381.623 0 0 1-9.3 11.187c-.94 1.13-.728 2.508.531 3.172.93.497 1.883.935 2.859 1.311 4.474 1.694 9.107 2.619 13.798 3.137 3.658.407 7.337.573 11.008.848.336.025.671.059 1.006.089h7.523c.086-.028.175-.049.264-.062 3.271-.213 6.547-.366 9.812-.649a61.744 61.744 0 0 0 12.488-2.357c1.95-.587 3.869-1.286 5.652-2.363.594-.36.949-.88.973-1.661.024-.78-.396-1.274-.83-1.791ZM92.253 127.81c.464.264.943.503 1.435.718 2.49 1.071 5.118 1.705 7.787 2.209 3.155.581 6.348.954 9.557 1.116 2.5.135 5.004.192 7.506.284 3.838-.055 7.665-.2 11.481-.603 3.15-.331 6.269-.806 9.311-1.679 1.732-.496 3.436-1.066 4.957-2.033 1.073-.677 1.223-1.691.407-2.636l-3.158-3.645-7.642-8.824c-.19-.221-.354-.297-.662-.221-.911.225-1.829.425-2.751.606-3.244.637-6.524 1.079-9.832 1.149-2.499.051-5.006-.073-7.503-.226-3.351-.208-6.643-.814-9.903-1.574-.251-.058-.406-.023-.586.187a1472.881 1472.881 0 0 1-6.593 7.64c-1.434 1.66-2.875 3.315-4.296 4.984-.766.9-.557 1.963.485 2.548ZM100.895 107.277c1.183.332 2.372.653 3.572.929 4.58 1.061 9.223 1.645 13.941 1.652 3.37.038 6.736-.261 10.04-.892 2.429-.471 4.829-1.083 7.225-1.708 1.387-.361 1.754-1.604.885-2.708-.056-.072-.115-.144-.172-.215h.018l-9.257-11.425L118.312 82l-8.834 10.91-2.729 3.37c-2.265 2.759-4.529 5.518-6.791 8.277-.9 1.098-.48 2.326.937 2.72Z"></path>
            </g>
            <defs>
              <linearGradient
                id="b"
                x1="118.969"
                x2="118.969"
                y1="36.685"
                y2="200.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F5F5F5"></stop>
                <stop offset="1" stopColor="#AADFDF"></stop>
              </linearGradient>
              <linearGradient
                id="c"
                x1="118.969"
                x2="118.969"
                y1="36.685"
                y2="200.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity=".3"></stop>
              </linearGradient>
              <linearGradient
                id="e"
                x1="118.968"
                x2="118.968"
                y1="57.724"
                y2="179.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BDE1E3"></stop>
                <stop offset="1" stopColor="#93B5C4"></stop>
              </linearGradient>
              <linearGradient
                id="f"
                x1="118.968"
                x2="118.968"
                y1="57.724"
                y2="179.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#5963C4"></stop>
              </linearGradient>
              <filter
                id="a"
                width="176.387"
                height="176.387"
                x="30.775"
                y="33.496"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="3.188"></feOffset>
                <feGaussianBlur stdDeviation="3.188"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_502_6"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_502_6"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="d"
                width="121.556"
                height="121.556"
                x="58.19"
                y="57.724"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="9.565"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 0.192699 0 0 0 0 0.338243 0 0 0 0 0.7125 0 0 0 1 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect1_innerShadow_502_6"
                ></feBlend>
              </filter>
              <filter
                id="g"
                width="66.498"
                height="75.094"
                x="85"
                y="82"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="3.188"></feOffset>
                <feGaussianBlur stdDeviation="1.275"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 0.0551847 0 0 0 0 0.0710218 0 0 0 0 0.154167 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect1_innerShadow_502_6"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.coefficients}>{arrCoefficientsItem}</div>
    </div>
  );
};

export default memo(Roulette);
