import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 1632 1169"
      fill="none"
      {...props}
    >
      <g id="prefix__window-bg">
        <path id="prefix__bg" d="M1632 0H0v1169h1632V0z" fill= {props.bgColor} />
        <path
          id="prefix__window-glass"
          d="M1310.21 64.134H246.064v888.709H1310.21V64.133z"
          fill="#EAE6FC"
        />
        <path
          id="prefix__window-bars"
          d="M1345.65 480.702H843.089a30.689 30.689 0 01-30.69-30.696V62.909a30.689 30.689 0 00-30.689-30.696h-7.146a30.697 30.697 0 00-30.689 30.696v387.097a30.7 30.7 0 01-8.989 21.706 30.686 30.686 0 01-21.7 8.99h-502.56a30.7 30.7 0 00-28.353 18.95 30.683 30.683 0 00-2.336 11.746v7.148a30.7 30.7 0 008.988 21.705 30.687 30.687 0 0021.701 8.991h502.559c8.14 0 15.946 3.234 21.701 8.99a30.704 30.704 0 018.989 21.706V947.38a30.7 30.7 0 008.989 21.706 30.687 30.687 0 0021.7 8.991h7.146a30.687 30.687 0 0021.7-8.991 30.7 30.7 0 008.989-21.706V579.938a30.7 30.7 0 018.989-21.705 30.684 30.684 0 0121.701-8.991h502.561a30.69 30.69 0 0021.7-8.991 30.721 30.721 0 008.99-21.705v-7.147a30.694 30.694 0 00-30.69-30.697z"
          fill={props.bgColor}
        />
        <path
          id="prefix__tree"
          d="M688.392 928.309L624.567 793.76a9.456 9.456 0 01.551-9.101 9.447 9.447 0 017.985-4.4 9.446 9.446 0 009.431-8.879 9.456 9.456 0 00-.895-4.621l-53.307-112.375a9.448 9.448 0 018.536-13.501h18.083a9.447 9.447 0 009.43-8.879 9.435 9.435 0 00-.895-4.622l-56.88-119.908a9.448 9.448 0 018.536-13.501h5.974a9.454 9.454 0 007.986-4.399 9.45 9.45 0 00.55-9.102l-76.151-160.534a9.45 9.45 0 00-8.536-5.399 9.453 9.453 0 00-8.536 5.399l-76.151 160.534a9.444 9.444 0 00.55 9.101 9.446 9.446 0 007.985 4.4h5.975a9.446 9.446 0 019.431 8.879 9.462 9.462 0 01-.895 4.622l-56.88 119.908a9.45 9.45 0 008.535 13.501h18.083a9.446 9.446 0 019.431 8.879 9.462 9.462 0 01-.895 4.622l-53.307 112.375a9.456 9.456 0 00.551 9.101 9.446 9.446 0 007.985 4.399 9.447 9.447 0 019.431 8.88 9.456 9.456 0 01-.895 4.621l-63.825 134.549a9.456 9.456 0 00.55 9.101 9.446 9.446 0 007.986 4.4h126.404a9.443 9.443 0 018.728 5.833 9.454 9.454 0 01.72 3.617v42.341c0 2.506.995 4.91 2.767 6.679a9.416 9.416 0 006.68 2.77h45.303c2.505 0 4.908-.99 6.68-2.77a9.439 9.439 0 002.768-6.679V951.26a9.453 9.453 0 015.832-8.731 9.443 9.443 0 013.615-.719h140.285a9.447 9.447 0 009.431-8.88 9.456 9.456 0 00-.895-4.621z"
          fill={props.bgColor}
        />
        <motion.g 
          animate={{
            //scaleY: [1, 0.1, 1],
            translateY : [0,300],
            opacity : [100, 0]
          }}
          transition={{
            duration: 3,
            loop: Infinity
          }}
        >
        <g id="prefix__snow" fill= {props.bgColor}>
          <path
            id="prefix__Vector"
            d="M412.567 436.671a2.275 2.275 0 002.191-2.268 2.272 2.272 0 00-2.191-2.268 2.269 2.269 0 000 4.536z"
          />
          <path
            id="prefix__Vector_2"
            d="M963.338 144.489c9.206 0 16.669-7.465 16.669-16.672 0-9.208-7.463-16.672-16.669-16.672-9.205 0-16.668 7.464-16.668 16.672 0 9.207 7.463 16.672 16.668 16.672z"
          />
          <path
            id="prefix__Vector_3"
            d="M980.007 259.338c6.137 0 11.112-4.976 11.112-11.114 0-6.138-4.975-11.115-11.112-11.115-6.137 0-11.113 4.977-11.113 11.115s4.976 11.114 11.113 11.114z"
          />
          <path
            id="prefix__Vector_4"
            d="M1178.17 407.532c6.14 0 11.11-4.976 11.11-11.115 0-6.138-4.97-11.114-11.11-11.114-6.13 0-11.11 4.976-11.11 11.114 0 6.139 4.98 11.115 11.11 11.115z"
          />
          <path
            id="prefix__Vector_5"
            d="M857.774 394.565c6.137 0 11.112-4.976 11.112-11.115 0-6.138-4.975-11.114-11.112-11.114-6.137 0-11.112 4.976-11.112 11.114 0 6.139 4.975 11.115 11.112 11.115z"
          />
          <path
            id="prefix__Vector_6"
            d="M391.066 277.863c6.137 0 11.112-4.976 11.112-11.115 0-6.138-4.975-11.114-11.112-11.114-6.137 0-11.112 4.976-11.112 11.114 0 6.139 4.975 11.115 11.112 11.115z"
          />
          <path
            id="prefix__Vector_7"
            d="M355.878 694.657c6.137 0 11.112-4.977 11.112-11.115s-4.975-11.115-11.112-11.115c-6.137 0-11.112 4.977-11.112 11.115s4.975 11.115 11.112 11.115z"
          />
          <path
            id="prefix__Vector_8"
            d="M618.864 335.288c9.205 0 16.668-7.465 16.668-16.672 0-9.208-7.463-16.672-16.668-16.672-9.206 0-16.668 7.464-16.668 16.672 0 9.207 7.462 16.672 16.668 16.672z"
          />
        </g>
        </motion.g>

      </g>
      <g id="prefix__Desk">
        <path
          id="prefix__lower"
          d="M1309.4 1093.37H95.875c-13.76 0-24.914 9.02-24.914 20.15v5.75c0 11.13 11.154 20.15 24.914 20.15H1309.4c13.76 0 24.92-9.02 24.92-20.15v-5.75c0-11.13-11.16-20.15-24.92-20.15z"
          fill="#686867"
        />
        <path
          id="prefix__upper"
          d="M1318.41 1067.54H79.587c-14.132 0-25.587 9.26-25.587 20.69v12.4c0 11.43 11.455 20.69 25.587 20.69H1318.41c14.13 0 25.59-9.26 25.59-20.69v-12.4c0-11.43-11.46-20.69-25.59-20.69z"
          fill="#8C8B89"
        />
      </g>
      <g id="prefix__chest">
        <path
          id="prefix__chest_2"
          d="M1138.83 1069.12H800.977V773.668c0-26.644-24.383-54.732 56.794-48.239h251.509c16.33 0 29.55 11.245 29.55 25.102v318.589z"
          fill="#BE1E2D"
        />
        <path
          id="prefix__Vector_9"
          d="M933.157 832.803h-39.818a5.521 5.521 0 00-5.518 5.523 5.521 5.521 0 005.518 5.523h39.818a5.52 5.52 0 005.518-5.523 5.52 5.52 0 00-5.518-5.523z"
          fill="#DF1D3E"
        />
      </g>
      <g id="prefix__left-ear">
        <path
          id="prefix__Vector_10"
          d="M841.523 545.912c-24.298 0-43.994 19.715-43.994 44.035 0 24.319 19.696 44.034 43.994 44.034h42.999c24.297 0 43.994-19.715 43.994-44.034 0-24.32-19.697-44.035-43.994-44.035h-42.999z"
          fill="#DB9C94"
        />
        <path
          id="prefix__Vector_11"
          d="M799.915 575.418a44.248 44.248 0 00-1.566 11.767 44.062 44.062 0 003.342 16.855 44.006 44.006 0 0023.812 23.834 43.919 43.919 0 0016.84 3.345h42.999a43.935 43.935 0 0024.122-7.28 44.004 44.004 0 0016.169-19.339 44.036 44.036 0 01-15.691 23.286 43.964 43.964 0 01-26.563 9.055H840.28a43.967 43.967 0 01-20.897-5.284 44.01 44.01 0 01-15.882-14.586 44.063 44.063 0 01-3.586-41.678v.025z"
          fill="#D68C87"
        />
        <path
          id="prefix__Vector_12"
          d="M814.53 594.126a3.482 3.482 0 01-3.818-.75 3.514 3.514 0 01-.756-1.141 19.376 19.376 0 01-.006-14.82 19.35 19.35 0 0110.471-10.481 3.462 3.462 0 011.339-.273 3.465 3.465 0 012.478 1.024 3.537 3.537 0 01-1.133 5.743 12.444 12.444 0 00-6.661 16.121 3.515 3.515 0 01-.774 3.821 3.504 3.504 0 01-1.14.756z"
          fill="#E1ADA6"
        />
      </g>
      <g id="prefix__right-ear">
        <path
          id="prefix__Vector_13"
          d="M1034.43 545.912c-24.53 0-44.416 20.168-44.416 45.046s19.886 45.045 44.416 45.045h43.4c24.53 0 44.41-20.167 44.41-45.045s-19.88-45.046-44.41-45.046h-43.4z"
          fill="#DB9C94"
        />
        <path
          id="prefix__Vector_14"
          d="M1118.55 574.009a45.822 45.822 0 011.64 11.935c0 5.917-1.15 11.776-3.38 17.242a45.118 45.118 0 01-9.62 14.618 44.454 44.454 0 01-14.42 9.764 43.84 43.84 0 01-17 3.422h-43.4a43.924 43.924 0 01-24.36-7.391c-7.24-4.82-12.925-11.681-16.365-19.738 2.581 9.502 8.162 17.883 15.885 23.859 7.73 5.976 17.18 9.217 26.9 9.225h43.38a43.91 43.91 0 0021.09-5.406 44.64 44.64 0 0016.03-14.92 45.351 45.351 0 007.12-20.854 45.517 45.517 0 00-3.5-21.782v.026z"
          fill="#D68C87"
        />
        <path
          id="prefix__Vector_15"
          d="M1108.59 593.248c.44.147.91.205 1.37.17.47-.036.92-.164 1.33-.376.42-.213.79-.507 1.09-.864.3-.358.53-.772.68-1.22.79-2.477 1.1-5.088.9-7.684-.2-2.596-.9-5.127-2.07-7.448a19.739 19.739 0 00-4.72-6.078 19.375 19.375 0 00-6.66-3.781 3.491 3.491 0 00-2.7.207 3.582 3.582 0 00-1.76 2.083c-.29.904-.22 1.89.2 2.739.43.85 1.16 1.494 2.06 1.791a12.604 12.604 0 017.19 6.313 12.889 12.889 0 01.76 9.618c-.14.453-.2.93-.16 1.404.04.474.18.935.39 1.357.22.421.52.794.88 1.098.36.304.78.532 1.22.671z"
          fill="#E1ADA6"
        />
      </g>
      <path
        id="prefix__side-hair"
        d="M1095.98 511.428c0-11.48-4.55-22.491-12.66-30.609a43.225 43.225 0 00-30.58-12.679H867.639a43.23 43.23 0 00-30.581 12.679 43.307 43.307 0 00-12.667 30.609 43.072 43.072 0 005.095 20.4v66.524a29.005 29.005 0 0017.891 26.8 28.953 28.953 0 0011.09 2.208h202.873a28.98 28.98 0 0020.49-8.496 29.044 29.044 0 008.49-20.512v-65.553a43.157 43.157 0 005.66-21.371z"
        fill="#72361B"
      />
      <path
        id="prefix__face"
        d="M1081.24 559.443c0-67.078-54.32-121.455-121.338-121.455-67.016 0-121.344 54.377-121.344 121.455v73.639c0 67.078 54.328 121.455 121.344 121.455 67.018 0 121.338-54.377 121.338-121.455v-73.639z"
        fill="#F0BEB4"
      />
      <g id="prefix__collar">
        <path
          id="prefix__Vector_16"
          d="M1016.42 745.904c0-33.539-27.161-60.727-60.669-60.727-33.508 0-60.672 27.188-60.672 60.727s27.164 60.728 60.672 60.728c33.508 0 60.669-27.189 60.669-60.728z"
          fill="#DB9C94"
        />
        <path
          id="prefix__Vector_17"
          d="M1047.64 747.173c0-40.029-36.34-72.47-81.177-72.47h-7.009c-44.739 0-81.177 32.342-81.177 72.47a65.406 65.406 0 001.74 14.927v52.866c0 7.214 9.942 10.822 15.733 5.722l16.628-14.604a87.536 87.536 0 0047.076 13.434h7.059a87.625 87.625 0 0046.627-13.16l16.48 14.33c5.87 4.975 15.88 1.492 15.88-5.722v-51.125a65.137 65.137 0 002.19-16.668h-.05z"
          fill="#7C1826"
        />
        <path
          id="prefix__Vector_18"
          d="M1047.64 740.307c0-40.004-36.34-72.445-81.177-72.445h-7.009c-44.739 0-81.177 32.341-81.177 72.445a65.417 65.417 0 001.74 15.051v52.866c0 7.214 9.942 10.822 15.733 5.722l16.628-14.604a87.528 87.528 0 0047.076 13.434h7.059a87.625 87.625 0 0046.627-13.16l16.48 14.33c5.87 4.975 15.88 1.492 15.88-5.722V757a64.89 64.89 0 002.19-16.693h-.05z"
          fill="#971B1F"
        />
        <path
          id="prefix__Vector_19"
          d="M1022.74 742.073c0-33.539-27.168-60.727-60.676-60.727s-60.672 27.188-60.672 60.727 27.164 60.727 60.672 60.727c33.508 0 60.676-27.188 60.676-60.727z"
          fill="#DB9C94"
        />
        <path
          id="prefix__Vector_20"
          d="M962.586 766.13c39.234 0 71.034-28.536 71.034-63.738 0-35.201-31.8-63.737-71.034-63.737-39.232 0-71.036 28.536-71.036 63.737 0 35.202 31.804 63.738 71.036 63.738z"
          fill="#D68C87"
        />
        <path
          id="prefix__Vector_21"
          d="M976.281 804.542h-27.987v99.512h27.987v-99.512z"
          fill="#971B1F"
        />
      </g>
      {/* Eyebrows Animtion */}
      <motion.g 
            animate={{
              //scaleY: [1, 0.1, 1],
              translateY : [1,props.eyesBrows_translateY,1]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              repeatDelay: 1
            }}
          >
      <g id="prefix__left-eyebrow">
        <path
          id="prefix__Vector_22"
          d="M923.812 541.282h-40.639a11.179 11.179 0 01-6.774-2.311 11.2 11.2 0 01-3.988-5.949c-.269.965-.411 1.96-.422 2.961 0 2.969 1.178 5.817 3.276 7.916a11.175 11.175 0 007.908 3.279h40.639a11.18 11.18 0 007.909-3.279 11.202 11.202 0 003.276-7.916 11.54 11.54 0 00-.423-2.961 11.218 11.218 0 01-10.762 8.26z"
          fill="#DDA69C"
        />
        <path
          id="prefix__Vector_23"
          d="M923.837 522.399h-40.664c-6.177 0-11.184 5.013-11.184 11.196v.024c0 6.183 5.007 11.196 11.184 11.196h40.664c6.177 0 11.184-5.013 11.184-11.196v-.024c0-6.183-5.007-11.196-11.184-11.196z"
          fill="#72361B"
        />
        <path
          id="prefix__Vector_24"
          d="M923.812 538.645h-40.638a11.18 11.18 0 01-6.775-2.311 11.2 11.2 0 01-3.988-5.949c-.267.965-.409 1.96-.422 2.961a11.165 11.165 0 0011.185 11.195h40.638a11.147 11.147 0 007.916-3.272 11.17 11.17 0 003.269-7.923 11.628 11.628 0 00-.423-2.961 11.218 11.218 0 01-10.762 8.26z"
          fill="#5F220E"
        />
        <path
          id="prefix__Vector_25"
          d="M915.436 526.081h-23.861a2.661 2.661 0 00-2.66 2.662v.025a2.661 2.661 0 002.66 2.662h23.861a2.661 2.661 0 002.659-2.662v-.025a2.661 2.661 0 00-2.659-2.662z"
          fill="#885238"
        />
      </g>
      <g id="prefix__right-eyebrow">
        <path
          id="prefix__Vector_26"
          d="M1043.32 541.381h-40.64a11.163 11.163 0 01-10.765-8.259 11.474 11.474 0 00-.547 3.035 11.231 11.231 0 003.292 7.918 11.205 11.205 0 007.92 3.277h40.74c2.96 0 5.81-1.179 7.9-3.279a11.193 11.193 0 003.28-7.916c-.01-1.003-.16-2-.45-2.96a11.107 11.107 0 01-3.99 5.906 11.121 11.121 0 01-6.74 2.278z"
          fill="#DDA69C"
        />
        <path
          id="prefix__Vector_27"
          d="M1043.34 522.499h-40.66c-6.18 0-11.188 5.012-11.188 11.195v.025c0 6.183 5.008 11.195 11.188 11.195h40.66c6.18 0 11.19-5.012 11.19-11.195v-.025c0-6.183-5.01-11.195-11.19-11.195z"
          fill="#72361B"
        />
        <path
          id="prefix__Vector_28"
          d="M1043.32 538.645h-40.64a11.164 11.164 0 01-10.765-8.26 11.504 11.504 0 00-.447 2.961 11.223 11.223 0 003.292 7.918 11.208 11.208 0 007.92 3.277h40.64c2.96 0 5.81-1.179 7.9-3.279a11.193 11.193 0 003.28-7.916c-.01-1.003-.16-2-.45-2.961a11.13 11.13 0 01-10.73 8.26z"
          fill="#5F220E"
        />
        <path
          id="prefix__Vector_29"
          d="M1034.91 526.181h-23.86a2.66 2.66 0 00-2.66 2.662v.025a2.66 2.66 0 002.66 2.662h23.86a2.66 2.66 0 002.66-2.662v-.025a2.66 2.66 0 00-2.66-2.662z"
          fill="#885238"
        />
      </g>
      </motion.g>

      <g id="prefix__nose">
        <path
          id="prefix__Vector_30"
          d="M962.064 606.96a18.607 18.607 0 00-12.4 4.741 18.64 18.64 0 00-6.092 11.803 1.854 1.854 0 00.46 1.467 1.867 1.867 0 001.404.623h33.281a1.867 1.867 0 001.839-2.09 18.637 18.637 0 00-6.093-11.803 18.603 18.603 0 00-12.399-4.741z"
          fill="#ECB8B0"
        />
        <path
          id="prefix__Vector_31"
          d="M943.547 623.852a1.88 1.88 0 00.509 1.385 1.87 1.87 0 001.355.581h33.182a1.87 1.87 0 001.752-1.221c.087-.238.125-.491.112-.745h-36.91z"
          fill="#DDA69C"
        />
        <path
          id="prefix__Vector_32"
          d="M972.603 617.832H951.55a1.989 1.989 0 00-1.988 1.99c0 1.099.89 1.99 1.988 1.99h21.053a1.989 1.989 0 001.988-1.99c0-1.099-.89-1.99-1.988-1.99z"
          fill="#EFC5BD"
        />
      </g>
      <g id="prefix__Beard">
        <path
          id="prefix__Vector_33"
          d="M844.3 629.127a5.712 5.712 0 00-4.041 1.649 5.724 5.724 0 00-1.701 4.023 121.511 121.511 0 0035.541 85.881 121.286 121.286 0 0085.803 35.573 121.266 121.266 0 0085.798-35.573 121.493 121.493 0 0035.54-85.881 5.693 5.693 0 00-1.7-4.023 5.686 5.686 0 00-4.04-1.649H844.3z"
          fill="#72361B"
        />
        <path
          id="prefix__Vector_34"
          d="M1080.85 633.182a121.523 121.523 0 01-38.19 80.551 121.305 121.305 0 01-82.858 32.743 121.28 121.28 0 01-82.792-32.777 121.5 121.5 0 01-38.153-80.517 5.669 5.669 0 00-.299 1.741 121.515 121.515 0 0035.541 85.882 121.286 121.286 0 0085.803 35.573 121.266 121.266 0 0085.798-35.573 121.497 121.497 0 0035.54-85.882 5.769 5.769 0 00-.39-1.741z"
          fill="#5F220E"
        />
        <path
          id="prefix__Vector_35"
          d="M927.242 711.771h-23.861a2.661 2.661 0 00-2.66 2.662v.025a2.661 2.661 0 002.66 2.662h23.861a2.66 2.66 0 002.659-2.662v-.025a2.66 2.66 0 00-2.659-2.662z"
          fill="#885238"
        />
        <path
          id="prefix__Vector_36"
          d="M880.017 638.207h-23.861a2.661 2.661 0 00-2.66 2.662v.025a2.661 2.661 0 002.66 2.662h23.861a2.66 2.66 0 002.659-2.662v-.025a2.66 2.66 0 00-2.659-2.662z"
          fill="#885238"
        />
      </g>
      {/*Mouth Animation  */}
      <motion.g 
        animate={{
          scaleY: [1, props.mouth_scaleY, 1]
        }}
        transition={{
          duration: 0.5,
          loop: props.mouth_duration,
          repeatDelay: 0.1
        }}
      >
      <g id="prefix__mouth">
        <path
          id="prefix__Vector_37"
          d="M924.259 642.685c-3.451.006-6.842.91-9.838 2.625a19.898 19.898 0 00-10.012 16.964 19.926 19.926 0 002.452 9.892 66.721 66.721 0 0024.436 24.692 66.643 66.643 0 0067.052 0 66.78 66.78 0 0024.441-24.692 19.977 19.977 0 002.45-9.892 20.03 20.03 0 00-2.76-9.809 19.972 19.972 0 00-7.25-7.155c-3-1.715-6.39-2.619-9.84-2.625h-81.131z"
          fill="#790410"
        />
        <path
          id="prefix__Vector_38"
          d="M1022.71 666.667a66.65 66.65 0 01-24.436 24.693 66.643 66.643 0 01-67.052 0 66.716 66.716 0 01-24.436-24.693 19.188 19.188 0 01-2.336-6.891 19.018 19.018 0 002.336 12.439 66.724 66.724 0 0024.436 24.693 66.646 66.646 0 0067.052 0 66.657 66.657 0 0024.436-24.693 19.02 19.02 0 002.34-12.439 18.75 18.75 0 01-2.34 6.891z"
          fill="#5F0613"
        />
        <path
          id="prefix__Vector_39"
          d="M996.563 693.61a24.89 24.89 0 00-7.28-17.591 24.841 24.841 0 00-17.575-7.287h-66.513a21.16 21.16 0 001.516 3.359 66.643 66.643 0 0039.491 31.138 66.576 66.576 0 0049.988-5.34c.247-1.413.371-2.844.373-4.279z"
          fill="#C55159"
        />
        <path
          id="prefix__Teeth"
          d="M906.065 653.557v.473c0 2.91 3.182 5.274 7.084 5.274h104.191a7.026 7.026 0 006.81-3.881 20.086 20.086 0 00-7.39-9.259 20.08 20.08 0 00-11.32-3.479h-81.529a20.027 20.027 0 00-17.846 10.872z"
          fill="#fff"
        />
        <path
          id="prefix__Vector_40"
          d="M996.165 693.461a68.121 68.121 0 01-49.902 5.521 68.187 68.187 0 01-40.148-30.175h-.92a21.2 21.2 0 001.516 3.359 66.65 66.65 0 0039.491 31.138 66.58 66.58 0 0049.988-5.34 25.13 25.13 0 00.398-4.354v-2.263c-.249.696-.249 1.542-.423 2.114z"
          fill="#B34C56"
        />
      </g>
      </motion.g>
       {/*Eyes Animation*/}
      
      <motion.g 
        animate={{
          scaleY: [1, 0, 1],
          translateY : [1,0,1]
        }}
        transition={{
          duration: 1,
          loop: Infinity,
          repeatDelay: 1
        }}
      >
      <g id="prefix__eyes" fill="#231F20">
        <path
          id="prefix__left-eye"
          d="M915.311 569.867c0-5.4-4.373-9.777-9.768-9.777-5.395 0-9.768 4.377-9.768 9.777v13.658c0 5.4 4.373 9.777 9.768 9.777 5.395 0 9.768-4.377 9.768-9.777v-13.658z"
        />
        <path
          id="prefix__right-eye"
          d="M1027.51 569.867c0-5.4-4.38-9.777-9.77-9.777-5.4 0-9.77 4.377-9.77 9.777v13.658c0 5.4 4.37 9.777 9.77 9.777 5.39 0 9.77-4.377 9.77-9.777v-13.658z"
        />
      </g>
      </motion.g>


      <g id="prefix__glasses">
        <path
          id="prefix__Vector_41"
          d="M987.665 550.661H868.956a6.361 6.361 0 00-4.499 1.865 6.376 6.376 0 00-1.864 4.504v30.849c0 20.499 20.034 37.317 44.74 37.317 24.706 0 44.739-16.693 44.739-37.317v-24.157h21.898v24.157c0 20.499 20.033 37.317 44.74 37.317 24.71 0 44.74-16.693 44.74-37.317V557.03c0-1.689-.67-3.309-1.87-4.504a6.347 6.347 0 00-4.49-1.865h-69.425zm-51.426 37.317c0 13.31-12.999 24.132-28.981 24.132-15.982 0-28.981-10.822-28.981-24.132v-24.156h57.962v24.156zm111.401 0c0 13.31-13 24.132-28.98 24.132s-28.982-10.822-28.982-24.132v-24.156h57.962v24.156z"
          fill="#971B1F"
        />
        <path
          id="prefix__Vector_42"
          d="M933.505 553.174h-24.134a2.735 2.735 0 00-2.734 2.736 2.735 2.735 0 002.734 2.737h24.134a2.735 2.735 0 002.734-2.737 2.735 2.735 0 00-2.734-2.736z"
          fill="#B24048"
        />
        <path
          id="prefix__Vector_43"
          d="M1049.6 554.617h-24.13a2.732 2.732 0 00-2.73 2.736 2.732 2.732 0 002.73 2.737h24.13a2.74 2.74 0 002.74-2.737 2.74 2.74 0 00-2.74-2.736z"
          fill="#B24048"
        />
        <path
          id="prefix__Vector_44"
          d="M869.727 566.956a1.887 1.887 0 01-1.889-1.891 10.45 10.45 0 013.049-7.379 10.43 10.43 0 017.365-3.069 1.89 1.89 0 011.889 1.89 1.914 1.914 0 01-1.889 1.916 6.638 6.638 0 00-6.636 6.642 1.89 1.89 0 01-1.889 1.891z"
          fill="#B24048"
        />
        <path
          id="prefix__Vector_45"
          d="M982.346 566.26a1.891 1.891 0 01-1.889-1.891 10.439 10.439 0 0110.414-10.424 1.887 1.887 0 011.889 1.891 1.89 1.89 0 01-1.889 1.89 6.66 6.66 0 00-6.636 6.643 1.893 1.893 0 01-1.889 1.891z"
          fill="#B24048"
        />
        <path
          id="prefix__Vector_46"
          d="M932.138 607.98a1.916 1.916 0 002.088 1.692 10.465 10.465 0 007.005-3.832 10.482 10.482 0 002.266-7.662 1.892 1.892 0 00-2.067-1.596 1.887 1.887 0 00-1.686 1.994 6.67 6.67 0 01-5.916 7.314 1.92 1.92 0 00-1.69 2.09z"
          fill="#B24048"
        />
        <path
          id="prefix__Vector_47"
          d="M1041.95 607.98c.05.498.29.955.68 1.273.39.317.88.467 1.38.419a10.44 10.44 0 007.02-3.825 10.517 10.517 0 002.28-7.669 1.908 1.908 0 00-2.09-1.692c-.5.053-.96.303-1.28.695-.31.392-.46.894-.41 1.395a6.627 6.627 0 01-1.49 4.855 6.641 6.641 0 01-4.48 2.385c-.25.033-.48.116-.7.243a1.892 1.892 0 00-.88 1.174 1.88 1.88 0 00-.03.747z"
          fill="#B24048"
        />
        <g id="prefix__left-glass-shade" opacity={0.3} fill="#fff">
          <path
            id="prefix__Vector_48"
            opacity={0.3}
            d="M901.467 563.822l-23.19 23.236v.92a22.004 22.004 0 007.73 16.37l40.464-40.526h-25.004z"
          />
          <path
            id="prefix__Vector_49"
            opacity={0.3}
            d="M914.714 550.76l-.099-.099-.099.099h.198z"
          />
        </g>
        <g id="prefix__right-glass-shade" opacity={0.3} fill="#fff">
          <path
            id="prefix__Vector_50"
            opacity={0.3}
            d="M1012.87 563.822l-23.192 23.236v.92a22.066 22.066 0 007.73 16.37l40.462-40.526h-25z"
          />
          <path
            id="prefix__Vector_51"
            opacity={0.3}
            d="M1026.14 550.76l-.1-.099-.12.099h.22z"
          />
        </g>
      </g>
      <g id="prefix__right-arm" fill="#BE1E2D">
        <path
          id="prefix__Vector_52"
          d="M1105.35 727.328l-23.91 6.008c-16.18 4.064-26 20.485-21.94 36.676l66.72 266.058c4.06 16.19 20.46 26.02 36.64 21.95l23.92-6c16.17-4.07 25.99-20.49 21.93-36.68L1142 749.287c-4.06-16.191-20.47-26.023-36.65-21.959z"
        />
        <path
          id="prefix__Vector_53"
          d="M972.926 1030.51v8.38c0 16.7 13.52 30.23 30.194 30.23h177.72c16.68 0 30.2-13.53 30.2-30.23v-8.38c0-16.69-13.52-30.23-30.2-30.23h-177.72c-16.674 0-30.194 13.54-30.194 30.23z"
        />
      </g>
      <g id="prefix__left-arm">
        <path
          id="prefix__Vector_54"
          d="M725.144 1013.14h-37.531c-15.073 0-27.291 12.23-27.291 27.32s12.218 27.32 27.291 27.32h37.531c15.072 0 27.291-12.23 27.291-27.32s-12.219-27.32-27.291-27.32z"
          fill="#ECB9A6"
        />
        <path
          id="prefix__Vector_55"
          d="M726.842 1047.99l15.591 10.22c13.95 9.15 32.669 5.25 41.812-8.71l51.759-79.046c9.142-13.963 5.245-32.699-8.705-41.85l-15.591-10.228c-13.95-9.15-32.669-5.25-41.812 8.713l-51.759 79.051c-9.142 13.96-5.245 32.7 8.705 41.85z"
          fill="#BE1E2D"
        />
        <path
          id="prefix__Vector_56"
          d="M781.525 982.283l28.982 4.818c16.453 2.735 32.007-8.397 34.739-24.866l32.481-195.746c2.733-16.468-8.39-32.035-24.843-34.771l-28.982-4.818c-16.453-2.735-32.006 8.398-34.739 24.866l-32.481 195.747c-2.732 16.468 8.39 32.035 24.843 34.77z"
          fill="#BE1E2D"
        />
        <path
          id="prefix__Vector_57"
          d="M857.622 737.023h-39.818a5.52 5.52 0 00-5.518 5.523 5.521 5.521 0 005.518 5.523h39.818a5.52 5.52 0 005.518-5.523 5.52 5.52 0 00-5.518-5.523z"
          fill="#DF1D3E"
        />
        <path
          id="prefix__Vector_58"
          d="M752.281 972.216l-23.444 32.214a5.532 5.532 0 001.212 7.72 5.518 5.518 0 007.709-1.22l23.443-32.21a5.526 5.526 0 00-1.211-7.716 5.515 5.515 0 00-7.709 1.212z"
          fill="#DF1D3E"
        />
      </g>
      <g id="prefix__left-hand">
        <path
          id="prefix__Vector_59"
          d="M703.722 1026.71l-36.328-36.364c-4.358-4.363-11.424-4.363-15.782 0l-.018.017c-4.358 4.362-4.358 11.437 0 15.797l36.328 36.36c4.358 4.36 11.424 4.36 15.783 0l.017-.02c4.359-4.36 4.359-11.43 0-15.79z"
          fill="#ECB9A6"
        />
        <path
          id="prefix__finger-4"
          d="M609.078 1008.01l-17.61 17.63c-3.572 3.57-3.572 9.37 0 12.94a9.132 9.132 0 0012.935 0l17.611-17.62c3.572-3.58 3.572-9.38 0-12.95a9.133 9.133 0 00-12.936 0z"
          fill="#E0A0A1"
        />
        <path
          id="prefix__mouse"
          d="M708.789 1068.67c2.418.01 4.8-.58 6.937-1.72a14.761 14.761 0 005.318-4.77 14.847 14.847 0 002.453-6.72c.255-2.41-.084-4.84-.988-7.09a64.113 64.113 0 00-23.554-29.38 64.015 64.015 0 00-35.974-11.06 64.015 64.015 0 00-35.974 11.06 64.113 64.113 0 00-23.554 29.38 14.934 14.934 0 001.567 13.75c1.351 2 3.164 3.63 5.285 4.77a14.706 14.706 0 006.893 1.78h91.591z"
          fill="#353635"
        />
        <path
          id="prefix__finger-3"
          d="M630.776 997.588l-27.927 27.952c-4.359 4.36-4.359 11.44 0 15.8l.017.02c4.358 4.36 11.425 4.36 15.783 0l27.927-27.96c4.358-4.36 4.358-11.43 0-15.794l-.018-.018c-4.358-4.362-11.424-4.362-15.782 0z"
          fill="#E5A6A3"
        />
        <path
          id="prefix__finger-2"
          d="M651.296 990.335l-36.328 36.365c-4.358 4.36-4.358 11.43 0 15.79l.017.02c4.359 4.36 11.425 4.36 15.783 0l36.328-36.36c4.358-4.36 4.358-11.435 0-15.797l-.017-.018c-4.359-4.362-11.425-4.362-15.783 0z"
          fill="#ECB8B0"
        />
        {/* Clicking Finger Animation */}
        <motion.g
          style = {{
              originX : "690px",
              originY : "1010px"
          }}
          animate={{
            rotate: [0, props.fingerclickY, 0]
          }}
          transition={{
            loop: Infinity,
            duration : 2
          }}
        >
        <path
          id="prefix__click-finger"
          d="M700.287 1000.11l-44.906-46.545c-4.758-4.932-12.606-5.074-17.529-.316s-5.056 12.613-.298 17.545l44.906 46.546c4.758 4.93 12.606 5.08 17.528.32 4.923-4.76 5.057-12.61.299-17.55z"
          fill="#F0BEB4"
        />
        </motion.g>
        <path
          id="prefix__finger-1"
          d="M743.039 1042.1l-40.629-40.66c-5.502-5.51-13.885-6.048-18.723-1.2-4.839 4.84-4.301 13.23 1.201 18.74l40.628 40.66c5.502 5.51 13.885 6.05 18.724 1.2 4.838-4.84 4.301-13.23-1.201-18.74z"
          fill="#F0BEB4"
        />
        <path
          id="prefix__thumb"
          d="M732.625 1044.62h-50.58c-6.85 0-12.403 5.55-12.403 12.4 0 6.85 5.553 12.4 12.403 12.4h50.58c6.85 0 12.403-5.55 12.403-12.4 0-6.85-5.553-12.4-12.403-12.4z"
          fill="#F0BEB4"
        />
      </g>
      <g id="prefix__laptop">
        <path
          id="prefix__Vector_60"
          d="M1114.08 866.389H848.451c-31.216 0-56.521 25.328-56.521 56.572v90.759c0 31.24 25.305 56.57 56.521 56.57h265.629c31.21 0 56.52-25.33 56.52-56.57v-90.759c0-31.244-25.31-56.572-56.52-56.572z"
          fill="#48484A"
        />
        <path
          id="prefix__Vector_61"
          d="M1107.07 847.83H855.46c-35.087 0-63.53 28.469-63.53 63.588v76.724c0 35.118 28.443 63.588 63.53 63.588h251.61c35.09 0 63.53-28.47 63.53-63.588v-76.724c0-35.119-28.44-63.588-63.53-63.588z"
          fill="#58595B"
        />
        <path
          id="prefix__Vector_62"
          d="M981.128 977.096c16.445 0 29.772-13.344 29.772-29.804s-13.327-29.804-29.772-29.804-29.777 13.344-29.777 29.804 13.332 29.804 29.777 29.804z"
          fill="#77171E"
        />
        <path
          id="prefix__Vector_63"
          d="M981.277 972.469c13.81 0 25.003-11.205 25.003-25.028 0-13.822-11.193-25.027-25.003-25.027-13.809 0-25.004 11.205-25.004 25.027 0 13.823 11.195 25.028 25.004 25.028z"
          fill="#971B1F"
        />
        <path
          id="prefix__Vector_64"
          d="M995.792 947.441a14.552 14.552 0 01-8.981 13.449 14.541 14.541 0 01-8.405.824 14.543 14.543 0 01-11.418-11.449 14.561 14.561 0 016.204-14.937 14.53 14.53 0 018.085-2.44 14.75 14.75 0 015.642 1.144 14.555 14.555 0 018.873 13.409z"
          fill="#fff"
        />
      </g>
      <g id="prefix__Hair">
        <path
          id="prefix__Vector_65"
          d="M955.974 424.387a42.688 42.688 0 00-17.248 3.855c-5.374 2.464-10.094 6.014-13.821 10.394-3.796-4.375-8.573-7.919-13.992-10.381a43.577 43.577 0 00-17.375-3.868c-24.358 0-44.118 21.501-44.118 47.999 0 26.499 19.76 48.023 44.118 48.023 6.84-.138 13.541-1.834 19.522-4.94 5.982-3.107 11.063-7.531 14.803-12.888 3.662 3.513 8.032 6.313 12.856 8.24a42.142 42.142 0 0015.255 2.987h69.996c23.48 0 42.55-20.014 42.55-44.699v-44.722H955.974z"
          fill="#DDA69C"
        />
        <path
          id="prefix__Vector_66"
          d="M955.154 417.413a50.512 50.512 0 00-19.05 3.718c-6.009 2.452-11.412 6.037-15.871 10.531-4.529-4.486-9.987-8.064-16.043-10.513a51.491 51.491 0 00-19.177-3.736c-27.341 0-49.586 21.501-49.586 48s22.195 48.023 49.586 48.023c7.454-.025 14.803-1.645 21.485-4.735 6.682-3.09 12.519-7.569 17.065-13.093 8.703 7.237 19.945 11.233 31.591 11.227h78.646c12.67 0 24.83-4.71 33.79-13.092 8.97-8.383 14-19.752 14-31.607v-44.723H955.154z"
          fill="#5F220E"
        />
        <path
          id="prefix__Vector_67"
          d="M955.154 407.093a50.463 50.463 0 00-19.036 3.663c-6.008 2.431-11.416 5.996-15.885 10.47-4.53-4.484-9.989-8.058-16.045-10.503A51.453 51.453 0 00885.013 407c-27.341 0-49.586 21.478-49.586 48 0 26.521 22.195 47.999 49.586 47.999 7.454-.023 14.804-1.642 21.486-4.732 6.682-3.091 12.519-7.57 17.064-13.096 8.709 7.228 19.947 11.222 31.591 11.227h78.646c12.67 0 24.83-4.71 33.79-13.092 8.97-8.383 14-19.752 14-31.607v-44.606H955.154z"
          fill="#72361B"
        />
        <path
          id="prefix__Vector_68"
          d="M1020.35 417.785h-57.466c-6.177 0-11.185 4.683-11.185 10.46v.024c0 5.776 5.008 10.46 11.185 10.46h57.466c6.18 0 11.18-4.684 11.18-10.46v-.024c0-5.777-5-10.46-11.18-10.46z"
          fill="#885238"
        />
        <path
          id="prefix__Vector_69"
          d="M859.636 461.578c-1.451 0-2.841-.539-3.867-1.498-1.025-.959-1.602-2.26-1.602-3.616-.013-7.476 3.147-14.651 8.786-19.951 5.638-5.299 13.295-8.29 21.289-8.314 1.45 0 2.841.539 3.867 1.498 1.025.959 1.601 2.259 1.601 3.616 0 1.356-.576 2.657-1.601 3.616-1.026.959-2.417 1.497-3.867 1.497-5.091.007-9.972 1.902-13.569 5.271-3.598 3.369-5.619 7.936-5.619 12.697.013 1.359-.549 2.667-1.565 3.638-1.015.972-2.401 1.527-3.853 1.546z"
          fill="#885238"
        />
      </g>
      <g id="prefix__cat">
        <path
          id="prefix__body-cat"
          d="M383.452 1068.44H107c0-24 9.535-47.03 26.508-64.01a90.509 90.509 0 0163.997-26.511c50.372-15.704 116.079-10.665 185.947 0v90.521z"
          fill="#DC5A66"
        />
        <path
          id="prefix__back-arm-cat"
          d="M343.959 1048.69h129.999c1.08 0 2.15.22 3.148.63a8.221 8.221 0 012.67 1.78c.764.77 1.37 1.68 1.783 2.67.414 1 .626 2.07.626 3.15 0 2.19-.866 4.28-2.409 5.82a8.2 8.2 0 01-5.818 2.41H343.959v-16.46z"
          fill="#3F3D56"
        />
        <path
          id="prefix__rightear-cat"
          d="M366.474 900.442l34.845-42.248a9.144 9.144 0 0114.071-3.1 9.152 9.152 0 012.978 4.562l13.741 48.525-65.635-7.739z"
          fill="#3F3D56"
        />
        <path
          id="prefix__leftear-cat"
          d="M324.213 921.958l13.164-53.161a9.152 9.152 0 015.912-8.558 9.149 9.149 0 0110.093 2.505l33.362 37.817-62.531 21.397z"
          fill="#DC5A66"
        />
        {/* Cat Tail Animation */}
        <motion.g
          style = {{
            originX : "128px",
            originY : "1062px"
          }}
          animate={{
            rotate: [0, 100, 0]
          }}
          transition={{
            duration: 3,
            loop: Infinity,
            repeatDelay: 2
          }}
        >
        <g id="prefix__tail">
          <path
            id="prefix__tail-cat"
            d="M107 1068.44h26.329v55.97a26.356 26.356 0 01-7.712 18.62 26.527 26.527 0 01-8.541 5.71c-3.195 1.32-6.618 2-10.076 2v-82.3z"
            fill="#DC5A66"
          />
          <path
            id="prefix__Vector_70"
            d="M121 1091.88v31.63c0 2.42 1.576 4.38 3.52 4.38 1.943 0 3.519-1.96 3.519-4.38v-31.62c0-2.42-1.576-4.39-3.519-4.39-1.944 0-3.52 1.96-3.52 4.38z"
            fill="#E97883"
          />
        </g>
        </motion.g>

        <path
          id="prefix__front-arm-cat"
          d="M339.023 1051.99h129.998c1.081 0 2.151.21 3.149.62a8.256 8.256 0 014.453 4.46c.413.99.626 2.06.626 3.14 0 1.09-.213 2.16-.626 3.15a8.256 8.256 0 01-4.453 4.46c-.998.41-2.068.62-3.149.62H339.023v-16.45z"
          fill="#DC5A66"
        />
        <path
          id="prefix__face-cat"
          d="M383.452 1068.44c49.076 0 88.86-39.79 88.86-88.875 0-49.086-39.784-88.879-88.86-88.879-49.075 0-88.859 39.793-88.859 88.879 0 49.085 39.784 88.875 88.859 88.875z"
          fill="#DC5A66"
        />
        <path
          id="prefix__Vector_71"
          d="M340.468 957.379c-1.45 0-2.841-.539-3.866-1.498-1.026-.959-1.602-2.26-1.602-3.616-.013-7.476 3.146-14.651 8.785-19.951 5.639-5.299 13.296-8.289 21.29-8.314 1.45 0 2.841.539 3.866 1.498 1.026.959 1.602 2.26 1.602 3.616 0 1.356-.576 2.657-1.602 3.616-1.025.959-2.416 1.498-3.866 1.498-5.091.006-9.972 1.901-13.57 5.27-3.598 3.369-5.618 7.936-5.618 12.697.013 1.359-.55 2.667-1.565 3.638-1.016.972-2.401 1.528-3.854 1.546z"
          fill="#E97883"
        />
        <path
          id="prefix__nose-cat"
          d="M469.021 1009.19c5.453 0 9.873-10.315 9.873-23.041s-4.42-23.043-9.873-23.043c-5.453 0-9.873 10.317-9.873 23.043 0 12.726 4.42 23.041 9.873 23.041z"
          fill="#3F3D56"
        />
        <path
          id="prefix__left-eye-cat"
          d="M445.161 968.044c1.363 0 2.468-2.58 2.468-5.761 0-3.182-1.105-5.761-2.468-5.761-1.364 0-2.469 2.579-2.469 5.761 0 3.181 1.105 5.761 2.469 5.761z"
          fill="#3F3D56"
        />
        <path
          id="prefix__right-eye-cat"
          d="M463.262 956.522c1.363 0 2.468-2.579 2.468-5.76 0-3.182-1.105-5.761-2.468-5.761-1.364 0-2.469 2.579-2.469 5.761 0 3.181 1.105 5.76 2.469 5.76z"
          fill="#3F3D56"
        />
        <path
          id="prefix__hair2"
          d="M375.997 889.697s-4.939-8.593-4.939-13.836l4.939 13.836z"
          fill="#3F3D56"
        />
        <path
          id="prefix__hair"
          d="M378.17 884.139s2.691-9.54 6.439-13.204l-6.439 13.204z"
          fill="#3F3D56"
        />
      </g>
    </svg>
  );
}

SvgComponent.propTypes = {
  width : PropTypes.number,
  height : PropTypes.number,
  bgColor : PropTypes.string,
  eyes_scaleY: PropTypes.number,
  eyes_translateY: PropTypes.number,
  mouth_scaleY: PropTypes.number,
  mouth_duration: PropTypes.number,
  eyesBrows_translateY: PropTypes.number,
  fingerclickY: PropTypes.number,
};

SvgComponent.defaultProps = {
  width: 972, 
  height: 662,
  bgColor : "#D0CDE1",
  eyes_scaleY: 0.5,
  eyes_translateY: 17,
  mouth_scaleY: 0,
  mouth_duration: 1,
  eyesBrows_translateY: 17,
  fingerclickY: 1,
}

export default SvgComponent;