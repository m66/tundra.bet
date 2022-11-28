import styles from "./rpsCard.module.scss";

interface Props {
  cardType: string;
}

const RpsCard: React.FC<Props> = ({ cardType }) => {
  let card;

  switch (cardType) {
    case "default":
      card = (
        <svg
          width="72"
          height="80"
          viewBox="0 0 72 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1_717)">
            <path
              d="M71.1 69.8991C67.8542 65.9918 64.6141 62.0794 61.3797 58.1618C61.1404 57.8722 60.9423 57.718 60.5401 57.8633C56.7533 59.2146 52.8519 59.9778 48.9022 60.3806C45.8042 60.6978 42.6922 60.8975 39.5831 61.0129C34.8123 61.1826 30.0365 61.0229 25.2837 60.5348C20.6442 60.0633 16.056 59.2778 11.5956 57.7469C11.1934 57.6071 10.9681 57.7169 10.7007 58.042C7.34894 62.1201 3.99219 66.1912 0.630415 70.2552C-0.387167 71.4889 -0.156904 72.9932 1.20658 73.7176C2.21216 74.2609 3.24557 74.7391 4.30156 75.1498C9.14613 76.9992 14.1627 78.0087 19.2415 78.5745C23.2022 79.0183 27.1851 79.2002 31.1599 79.4997C31.5239 79.5275 31.8869 79.5641 32.2499 79.5974H40.3946C40.4883 79.5663 40.5841 79.5436 40.6811 79.5297C44.2226 79.2967 47.769 79.1303 51.3044 78.8208C55.8751 78.4369 60.4024 77.5754 64.8256 76.2481C66.9372 75.6069 69.0146 74.8436 70.9452 73.6677C71.5887 73.275 71.9728 72.707 71.9989 71.8549C72.0251 71.0029 71.5696 70.4638 71.1 69.8991Z"
              fill="#15354B"
            ></path>
            <path
              d="M7.85398 50.4135C8.35666 50.7014 8.87526 50.963 9.4075 51.1969C12.1033 52.3664 14.9489 53.0592 17.8388 53.6092C21.2547 54.2435 24.7122 54.6507 28.1865 54.8279C30.8934 54.9745 33.6042 55.0373 36.3131 55.1376C40.4689 55.0778 44.6126 54.9186 48.7443 54.4795C52.155 54.1177 55.5325 53.5986 58.8256 52.6462C60.7009 52.104 62.546 51.4826 64.1931 50.427C65.3544 49.6869 65.5173 48.5801 64.6335 47.5487C63.4939 46.221 62.3543 44.8945 61.2147 43.5694C58.4556 40.3563 55.6975 37.1448 52.9403 33.9349C52.7342 33.6937 52.5572 33.6107 52.2234 33.6937C51.237 33.9397 50.2435 34.1578 49.2451 34.3556C45.7328 35.0513 42.1813 35.5337 38.5997 35.6099C35.8938 35.6659 33.1789 35.5308 30.4751 35.3629C26.8472 35.1362 23.2826 34.4743 19.7533 33.6454C19.4818 33.5817 19.3139 33.6194 19.1188 33.849C16.7484 36.6376 14.3687 39.4181 11.9796 42.1906C10.4271 44.0027 8.86754 45.8089 7.3291 47.6316C6.49955 48.6139 6.72579 49.7747 7.85398 50.4135Z"
              fill="#15354B"
            ></path>
            <path
              d="M17.2077 27.9949C18.4887 28.3577 19.7758 28.7079 21.0749 29.01C26.0341 30.1678 31.0617 30.8056 36.1697 30.8134C39.8189 30.855 43.4624 30.5284 47.0404 29.8388C49.6708 29.3255 52.2691 28.6568 54.8633 27.9746C56.3645 27.58 56.7617 26.2233 55.8215 25.0182C55.7602 24.939 55.6969 24.8609 55.6355 24.7827H55.6546L45.6316 12.3095L36.0662 0.398743L26.5007 12.3104L23.5465 15.9886C21.0937 19.0011 18.6426 22.0135 16.1931 25.0259C15.2188 26.2243 15.6733 27.5655 17.2077 27.9949Z"
              fill="#15354B"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_i_1_717"
              x="6.10352e-05"
              y="0.398743"
              width="71.9999"
              height="82.7986"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="3.6"></feOffset>
              <feGaussianBlur stdDeviation="3.6"></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_717"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );
      break;

    case "rock":
      card = (
        <svg
          width="57"
          height="61"
          viewBox="0 0 57 61"
          fill="var(--TSboxBorderColor)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.4076 27.3309C54.9432 26.3039 54.3716 25.3293 53.7023 24.4237C53.7131 24.2809 53.7174 24.138 53.7174 23.9908V7.42857C53.7174 5.89856 53.2054 4.41304 52.2638 3.21105C51.3222 2.00906 50.0058 1.1605 48.5264 0.801894C47.0469 0.443291 45.4905 0.595504 44.1076 1.23404C42.7246 1.87258 41.5956 2.96031 40.9021 4.32221C40.1907 3.15573 39.1865 2.19811 37.9902 1.54562C36.794 0.893143 35.448 0.568806 34.0876 0.605227C32.7271 0.641648 31.4002 1.03754 30.2402 1.7531C29.0802 2.46866 28.1281 3.47867 27.4795 4.68155C26.655 3.15454 25.3474 1.94765 23.7638 1.25194C22.1802 0.556233 20.411 0.411449 18.7363 0.840511C17.0616 1.26957 15.5771 2.24797 14.5178 3.62081C13.4585 4.99365 12.8849 6.6825 12.8879 8.42001V11.2558C11.901 10.1902 10.6178 9.44805 9.20546 9.12601C7.79312 8.80396 6.31706 8.91694 4.96949 9.45023C3.62192 9.98352 2.46529 10.9124 1.65022 12.1159C0.83516 13.3194 0.399431 14.7418 0.39978 16.1978V24.335C0.39978 24.4714 0.39978 24.6056 0.410546 24.7376C0.404644 24.7771 0.40105 24.8168 0.39978 24.8567V34.3814C0.39978 43.2805 3.19883 50.1838 8.70866 54.8986C12.3948 58.0504 17.5364 59.9055 23.5975 60.2692C24.2951 60.3103 24.9991 60.332 25.7054 60.332C30.9198 60.3179 36.0787 59.2551 40.8784 57.2061C46.5217 54.7773 51.7624 48.7443 54.555 41.4622C56.6693 35.9292 56.9837 30.7772 55.4076 27.3309ZM46.9351 2.56013C48.2192 2.56128 49.4504 3.0745 50.3586 3.9872C51.2669 4.8999 51.7779 6.13753 51.7796 7.42857V22.3175C48.3669 19.3193 44.6743 19.3042 44.4741 19.302H42.0927V7.42857C42.0944 6.13791 42.6052 4.9006 43.5129 3.98796C44.4207 3.07533 45.6513 2.56185 46.9351 2.56013V2.56013ZM34.2963 2.56013C35.8414 2.56242 37.3226 3.18054 38.4151 4.27898C39.5077 5.37742 40.1225 6.86658 40.1248 8.42001V19.302H28.4657V8.42001C28.4679 6.8662 29.083 5.37672 30.1761 4.27822C31.2691 3.17971 32.7508 2.56185 34.2963 2.56013ZM20.6628 2.56013C22.208 2.56185 23.6895 3.17978 24.7822 4.27835C25.8749 5.37692 26.4895 6.8664 26.4912 8.42001V19.302H16.0034C15.5991 19.301 15.1987 19.3812 14.8257 19.538V8.42001C14.8279 6.86508 15.4439 5.37462 16.5383 4.27592C17.6328 3.17723 19.1162 2.56013 20.6628 2.56013V2.56013ZM2.33759 16.1978C2.37682 14.8175 2.94979 13.5069 3.93479 12.5445C4.91979 11.5821 6.2392 11.0437 7.61272 11.0437C8.98624 11.0437 10.3056 11.5821 11.2906 12.5445C12.2756 13.5069 12.8486 14.8175 12.8879 16.1978V24.335C12.908 25.0442 12.7865 25.7503 12.5304 26.4115C12.2744 27.0726 11.8891 27.6754 11.3972 28.1843C10.9054 28.6931 10.3171 29.0975 9.66702 29.3737C9.01697 29.6499 8.31843 29.7922 7.61272 29.7922C6.90701 29.7922 6.20847 29.6499 5.55842 29.3737C4.90838 29.0975 4.32003 28.6931 3.8282 28.1843C3.33636 27.6754 2.95103 27.0726 2.695 26.4115C2.43896 25.7503 2.31743 25.0442 2.33759 24.335V16.1978ZM52.7399 40.7608C50.1303 47.571 45.2901 53.1863 40.1076 55.4159C29.3936 60.0268 16.7161 59.1847 9.96392 53.4136C4.9041 49.0885 2.33759 42.6831 2.33759 34.3814V29.2705C3.06763 30.0619 3.96446 30.6791 4.96242 31.077C5.96038 31.4749 7.03421 31.6434 8.1053 31.5701C9.17639 31.4969 10.2176 31.1837 11.1528 30.6536C12.088 30.1235 12.8934 29.3899 13.5101 28.5064C14.3326 30.7425 16.0357 32.4765 18.557 33.6064C20.2698 34.3506 22.1003 34.783 23.9635 34.8836H31.3788C30.0049 35.675 28.8062 36.7401 27.8563 38.0138C24.4673 42.5597 25.3178 48.3178 25.3566 48.5603C25.401 48.8111 25.5414 49.0345 25.7477 49.1825C25.954 49.3305 26.2097 49.3914 26.4601 49.352C26.7105 49.3127 26.9356 49.1762 27.0871 48.972C27.2387 48.7677 27.3046 48.5119 27.2707 48.2594C27.2707 48.2074 26.5149 43.0511 29.4238 39.1676C31.1893 36.8037 33.9647 35.3599 37.6724 34.875C37.9293 34.8583 38.1692 34.7397 38.3392 34.5453C38.5092 34.3508 38.5954 34.0964 38.5788 33.8381C38.5623 33.5797 38.4443 33.3386 38.2509 33.1676C38.0575 32.9967 37.8045 32.9101 37.5475 32.9267H24.0022C23.4898 32.9094 14.8838 32.5154 14.8838 25.1338V22.3759C14.8838 22.0774 15.0018 21.7911 15.2117 21.58C15.4217 21.3689 15.7065 21.2503 16.0034 21.2503H44.4762C44.7238 21.2503 50.5329 21.3282 53.6485 28.1449C54.9856 31.0737 54.6583 35.7885 52.7399 40.7608Z"
            fill="var(--TSboxBorderColor)"
          ></path>
        </svg>
      );
      break;

    case "paper":
      card = (
        <svg
          width="85"
          height="80"
          viewBox="0 0 85 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.5798 44.5578C81.5699 42.5535 78.8455 41.4277 76.005 41.4277C73.1646 41.4277 70.4402 42.5535 68.4303 44.5578L66.3483 46.6344V12.5317C66.3451 11.1822 65.9479 9.86301 65.2052 8.73561C64.4626 7.60822 63.4068 6.72157 62.1673 6.18428C60.9277 5.64699 59.5581 5.48237 58.2262 5.71059C56.8944 5.93881 55.6581 6.54996 54.6688 7.46919V6.91871C54.6689 5.42439 54.1846 3.97019 53.2882 2.77368C52.3917 1.57717 51.1314 0.702681 49.6958 0.281064C48.2602 -0.140552 46.7265 -0.0866316 45.3241 0.434758C43.9218 0.956149 42.7262 1.91698 41.9162 3.17348C41.1063 1.91698 39.9107 0.956149 38.5083 0.434758C37.1059 -0.0866316 35.5722 -0.140552 34.1366 0.281064C32.701 0.702681 31.4407 1.57717 30.5443 2.77368C29.6478 3.97019 29.1635 5.42439 29.1637 6.91871V11.7526C28.2652 10.9905 27.1668 10.5014 25.9986 10.3432C24.8305 10.185 23.6413 10.3643 22.572 10.8599C21.5027 11.3556 20.598 12.1468 19.965 13.1399C19.3319 14.133 18.9971 15.2864 19 16.4637V58.1577C19.0078 63.9482 21.3148 69.4994 25.415 73.5939C29.5153 77.6884 35.0742 79.9922 40.8728 80H43.6216C47.8225 79.9966 51.9763 79.1162 55.8163 77.4153C59.6564 75.7144 63.098 73.2306 65.9201 70.1233L83.7225 50.4853C84.466 49.6683 84.866 48.5967 84.8394 47.4931C84.8129 46.3894 84.3618 45.3383 83.5798 44.5578ZM82.086 49.001L64.2812 68.6389C61.6666 71.5174 58.4784 73.8183 54.921 75.3939C51.3636 76.9695 47.5157 77.785 43.6241 77.7882H40.8728C35.6616 77.7804 30.666 75.7097 26.9812 72.0299C23.2963 68.3502 21.2227 63.3616 21.2149 58.1577V16.4637C21.2017 15.9359 21.2944 15.4109 21.4875 14.9195C21.6807 14.4281 21.9703 13.9803 22.3394 13.6024C22.7085 13.2245 23.1496 12.9242 23.6367 12.7192C24.1238 12.5141 24.6471 12.4085 25.1757 12.4085C25.7043 12.4085 26.2276 12.5141 26.7147 12.7192C27.2018 12.9242 27.6429 13.2245 28.012 13.6024C28.3812 13.9803 28.6708 14.4281 28.8639 14.9195C29.0571 15.4109 29.1498 15.9359 29.1366 16.4637V35.9738C29.1366 36.2671 29.2533 36.5484 29.461 36.7557C29.6686 36.9631 29.9503 37.0797 30.244 37.0797C30.5377 37.0797 30.8194 36.9631 31.0271 36.7557C31.2348 36.5484 31.3514 36.2671 31.3514 35.9738V30.1028C31.3703 30.0223 31.3794 29.9398 31.3785 29.8571V6.91871C31.3785 5.66992 31.8753 4.47228 32.7595 3.58925C33.6438 2.70622 34.8431 2.21014 36.0937 2.21014C37.3442 2.21014 38.5435 2.70622 39.4278 3.58925C40.312 4.47228 40.8088 5.66992 40.8088 6.91871V35.8411C40.8088 36.1344 40.9255 36.4157 41.1332 36.623C41.3408 36.8304 41.6225 36.947 41.9162 36.947C42.2099 36.947 42.4916 36.8304 42.6993 36.623C42.907 36.4157 43.0236 36.1344 43.0236 35.8411V6.91871C43.0236 5.66992 43.5204 4.47228 44.4047 3.58925C45.2889 2.70622 46.4882 2.21014 47.7388 2.21014C48.9893 2.21014 50.1886 2.70622 51.0729 3.58925C51.9572 4.47228 52.4539 5.66992 52.4539 6.91871V12.4309C52.4539 12.4653 52.4539 12.4997 52.4539 12.5341V13.6154C52.4528 13.6244 52.4528 13.6335 52.4539 13.6424V35.8435C52.4539 36.1368 52.5706 36.4181 52.7783 36.6255C52.986 36.8329 53.2676 36.9494 53.5613 36.9494C53.855 36.9494 54.1367 36.8329 54.3444 36.6255C54.5521 36.4181 54.6688 36.1368 54.6688 35.8435V12.4825C54.6753 11.2291 55.1801 10.0297 56.0722 9.14807C56.9643 8.26642 58.1706 7.77478 59.4257 7.7813C60.6808 7.78781 61.882 8.29196 62.7648 9.18282C63.6477 10.0737 64.14 11.2783 64.1335 12.5317V48.1507H64.0375H52.7443C51.0411 48.1459 49.3539 48.4786 47.7804 49.1295C46.2068 49.7803 44.7782 50.7365 43.5773 51.9426L42.2583 53.2599C42.1495 53.3611 42.0622 53.4832 42.0017 53.6188C41.9412 53.7545 41.9086 53.9009 41.906 54.0494C41.9034 54.1979 41.9307 54.3454 41.9864 54.4831C42.0421 54.6208 42.125 54.7459 42.2302 54.8509C42.3353 54.9559 42.4606 55.0387 42.5985 55.0943C42.7364 55.1499 42.8841 55.1773 43.0328 55.1746C43.1815 55.172 43.3281 55.1395 43.4639 55.0791C43.5998 55.0186 43.7221 54.9315 43.8234 54.8228L45.1425 53.5081C46.1396 52.5105 47.3248 51.7202 48.6296 51.1828C49.9344 50.6454 51.3329 50.3716 52.7443 50.3772H64.0351C64.5754 50.3791 65.1108 50.2739 65.6101 50.0676C66.1095 49.8613 66.5628 49.5581 66.9439 49.1755L69.993 46.1306C71.5883 44.5417 73.7494 43.6494 76.0026 43.6494C78.2557 43.6494 80.4169 44.5417 82.0122 46.1306C82.3896 46.509 82.6075 47.0173 82.6212 47.5512C82.635 48.085 82.4434 48.6038 82.086 49.001Z"
            fill="var(--TSboxBorderColor)"
          ></path>
        </svg>
      );
      break;

    case "scissors":
      card = (
        <svg
          width="63"
          height="95"
          viewBox="0 0 63 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.4386 48.3114C56.439 48.0259 56.4595 47.7408 56.4999 47.4581L62.116 9.35594C62.2691 8.31724 62.2153 7.25868 61.9577 6.24069C61.7001 5.22271 61.2437 4.26523 60.6146 3.42294C59.9855 2.58065 59.196 1.87003 58.2912 1.33166C57.3864 0.793284 56.3841 0.437704 55.3413 0.285218C54.2986 0.132732 53.2359 0.186325 52.2139 0.442938C51.192 0.699552 50.2308 1.15416 49.3852 1.7808C48.5396 2.40745 47.8262 3.19386 47.2858 4.09514C46.7453 4.99642 46.3883 5.99491 46.2353 7.03361L42.2238 34.1846L38.2123 7.03361C37.821 5.01302 36.6623 3.22068 34.9775 2.02981C33.2927 0.838947 31.2116 0.341349 29.1678 0.640639C27.1239 0.93993 25.2746 2.01304 24.0052 3.6365C22.7357 5.25997 22.1438 7.30865 22.3528 9.35594L26.0858 34.596C24.7899 33.9259 23.3477 33.5853 21.8877 33.6045C20.4277 33.6238 18.9951 34.0022 17.7174 34.7062C16.4397 35.4101 15.3565 36.4178 14.5641 37.6395C13.7718 38.8612 13.2949 40.2591 13.176 41.7087C12.1746 40.6514 10.8773 39.9182 9.45251 39.6044C8.02768 39.2906 6.54105 39.4105 5.18551 39.9487C3.82997 40.4869 2.66809 41.4185 1.85062 42.6226C1.03316 43.8266 0.597839 45.2477 0.601154 46.7012V68.2016C0.601154 77.3687 3.39267 84.4861 8.89548 89.3423C12.586 92.6002 17.7396 94.5135 23.7969 94.8943C24.4954 94.9366 25.1978 94.9577 25.9041 94.9577C31.1272 94.9394 36.2896 93.8421 41.0652 91.7352C46.1999 89.4528 50.8626 84.3122 53.8571 77.632C56.0162 72.8204 56.9105 67.9595 56.4339 64.1587C56.4339 64.1399 56.4339 64.1234 56.4339 64.1046L56.4386 48.3114ZM29.4366 2.36779C30.2036 2.25527 30.9854 2.29446 31.7372 2.48311C32.489 2.67176 33.1961 3.00617 33.818 3.46723C34.44 3.92829 34.9646 4.50694 35.3619 5.17011C35.7592 5.83328 36.0214 6.56796 36.1334 7.33212L41.1879 41.5841C41.2275 41.8348 41.3556 42.0631 41.5492 42.228C41.7428 42.3929 41.9891 42.4835 42.2438 42.4835C42.4986 42.4835 42.7449 42.3929 42.9385 42.228C43.1321 42.0631 43.2602 41.8348 43.2998 41.5841L48.3354 7.33212C48.4479 6.5683 48.7103 5.83403 49.1077 5.17123C49.505 4.50843 50.0295 3.93009 50.6513 3.46922C51.273 3.00835 51.9798 2.67397 52.7313 2.48519C53.4828 2.29641 54.2642 2.25692 55.031 2.36897C55.7978 2.48102 56.5349 2.74242 57.2003 3.13824C57.8657 3.53406 58.4463 4.05655 58.909 4.67589C59.3716 5.29522 59.7073 5.99927 59.8968 6.74782C60.0863 7.49638 60.126 8.27479 60.0135 9.03861L54.4022 47.1502C54.3455 47.5347 54.3171 47.9228 54.3172 48.3114V58.5879C50.5063 52.681 44.8619 52.6481 44.6024 52.6481H30.8595V42.4327C30.8644 40.2068 30.021 38.0621 28.4998 36.4318L24.4529 9.03861C24.34 8.27458 24.3793 7.49585 24.5687 6.74697C24.7581 5.99809 25.0938 5.29374 25.5567 4.6742C26.0195 4.05465 26.6004 3.53206 27.2662 3.13631C27.9319 2.74056 28.6695 2.47941 29.4366 2.36779ZM21.9965 35.7195C23.7833 35.7214 25.4964 36.4293 26.7598 37.6878C28.0233 38.9464 28.7339 40.6528 28.7358 42.4327V52.6481H16.2294C15.8955 52.6488 15.564 52.7036 15.2478 52.8103V42.4327C15.2496 40.6512 15.9616 38.9433 17.2271 37.6845C18.4926 36.4257 20.2081 35.7189 21.9965 35.7195ZM2.72488 46.7012C2.72488 45.3379 3.26859 44.0303 4.2364 43.0663C5.20421 42.1022 6.51684 41.5606 7.88553 41.5606C9.25422 41.5606 10.5668 42.1022 11.5347 43.0663C12.5025 44.0303 13.0462 45.3379 13.0462 46.7012V59.333C13.0462 60.6964 12.5025 62.0039 11.5347 62.968C10.5668 63.932 9.25422 64.4736 7.88553 64.4736C6.51684 64.4736 5.20421 63.932 4.2364 62.968C3.26859 62.0039 2.72488 60.6964 2.72488 59.333V46.7012ZM40.1992 89.803C29.5805 94.5253 16.9963 93.6673 10.3042 87.7604C5.27571 83.3226 2.72488 76.7411 2.72488 68.2016V64.4407C3.50006 65.2188 4.4424 65.8115 5.48091 66.1742C6.51942 66.5369 7.62701 66.6601 8.72025 66.5345C9.81348 66.4089 10.8638 66.0378 11.7922 65.4491C12.7206 64.8605 13.5027 64.0696 14.0797 63.1362C15.0024 64.9861 16.5621 66.4504 18.7307 67.4518C20.4422 68.2234 22.2823 68.6729 24.158 68.7775H31.3291C30.0753 69.552 28.9781 70.5533 28.0939 71.7298C24.5426 76.4496 25.4157 82.5422 25.4534 82.789C25.4954 83.0664 25.6462 83.3159 25.8728 83.4825C26.0994 83.6491 26.3831 83.7193 26.6616 83.6775C26.9401 83.6358 27.1905 83.4855 27.3578 83.2598C27.5251 83.0341 27.5955 82.7515 27.5536 82.4741C27.5536 82.42 26.7701 77.0185 29.7929 72.999C31.5391 70.6767 34.2433 69.2523 37.83 68.7681C38.1117 68.7491 38.3742 68.6194 38.5598 68.4076C38.7454 68.1958 38.839 67.9192 38.8199 67.6386C38.8008 67.3581 38.6707 67.0966 38.458 66.9117C38.2454 66.7268 37.9677 66.6336 37.6861 66.6526H24.2099C23.686 66.6502 15.2313 66.2389 15.2313 58.7172V55.866C15.2197 55.5856 15.3203 55.312 15.511 55.1054C15.7016 54.8987 15.9668 54.7758 16.2483 54.7636H29.5334C29.6225 54.7887 29.7145 54.8021 29.8071 54.8035C29.8997 54.8025 29.9918 54.789 30.0808 54.7636H44.6094C44.7274 54.7636 50.5559 54.8294 53.6447 61.8152C56.8586 69.0736 50.2066 85.3558 40.1992 89.803Z"
            fill="var(--TSboxBorderColor)"
          ></path>
        </svg>
      );
      break;
  }

  return (
    <div className={`${styles.rpsCardBox} ${cardType === 'default' && styles.default}`}>
      <div className={styles.rpsCard}>
        <div className={styles.svg}>{card}</div>
        <span>{cardType === 'default' ? null : cardType.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default RpsCard;
