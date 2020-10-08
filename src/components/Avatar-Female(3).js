import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function SvgComponent(props) {
  return (
    <svg
    width={props.width}
    height={props.height}
      viewBox="0 0 1403 1005"
      fill="none"
      {...props}
    >
      <path fill="#E5E5E5" d="M0 0h1403v1005H0z" />
      <g id="prefix__window-bg">
        <path id="prefix__bg" d="M1403 0H0v1004.97h1403V0z" fill={props.bgColor} />
        <path
          id="prefix__window-glass"
          d="M1126.36 55.135H211.537v764.007h914.823V55.134z"
          fill="#EAE6FC"
        />
        <path
          id="prefix__window-bars"
          d="M1156.83 413.251H724.788a26.381 26.381 0 01-26.383-26.389V54.082c0-6.999-2.78-13.711-7.728-18.66a26.38 26.38 0 00-18.655-7.73h-6.143a26.38 26.38 0 00-18.656 7.73 26.39 26.39 0 00-7.727 18.66v332.78c0 6.999-2.78 13.711-7.728 18.66a26.38 26.38 0 01-18.656 7.729H181.071a26.385 26.385 0 00-26.383 26.389v6.144c0 6.999 2.78 13.711 7.728 18.66a26.377 26.377 0 0018.655 7.729h432.041a26.381 26.381 0 0126.383 26.389v315.883c0 6.999 2.78 13.711 7.728 18.66a26.379 26.379 0 0018.655 7.729h6.143a26.38 26.38 0 0018.656-7.729 26.392 26.392 0 007.728-18.66V498.562a26.39 26.39 0 017.727-18.66 26.38 26.38 0 0118.656-7.729h432.042c7 0 13.71-2.78 18.65-7.729a26.385 26.385 0 007.73-18.66v-6.144c0-6.999-2.78-13.711-7.73-18.66a26.348 26.348 0 00-18.65-7.729z"
          fill={props.bgColor}
        />
        <path
          id="prefix__tree"
          d="M591.798 798.05l-54.869-115.669a8.127 8.127 0 01.473-7.825 8.12 8.12 0 016.865-3.781 8.121 8.121 0 008.107-7.634 8.126 8.126 0 00-.769-3.973l-45.827-96.607a8.126 8.126 0 017.338-11.606h15.546a8.121 8.121 0 008.107-7.633 8.126 8.126 0 00-.769-3.973l-48.899-103.083a8.13 8.13 0 01.473-7.825 8.123 8.123 0 016.865-3.782h5.136a8.128 8.128 0 006.865-3.782 8.118 8.118 0 00.473-7.824l-65.466-138.008a8.126 8.126 0 00-7.338-4.641 8.125 8.125 0 00-7.338 4.641l-65.466 138.008a8.126 8.126 0 007.338 11.606h5.136a8.122 8.122 0 017.338 11.607l-48.899 103.083a8.126 8.126 0 007.338 11.606h15.546a8.121 8.121 0 018.107 7.633 8.126 8.126 0 01-.769 3.973l-45.827 96.607a8.126 8.126 0 007.338 11.607 8.121 8.121 0 017.338 11.606L276.42 798.05a8.126 8.126 0 007.338 11.606h108.667a8.112 8.112 0 015.744 2.38 8.123 8.123 0 012.379 5.744v36.4a8.123 8.123 0 008.122 8.124h38.945a8.122 8.122 0 008.122-8.124v-36.4a8.123 8.123 0 018.123-8.124h120.6a8.121 8.121 0 008.107-7.633 8.126 8.126 0 00-.769-3.973z"
          fill={props.bgColor}
        />
        <motion.g
          animate={{
            //scaleY: [1, 0.1, 1],
            translateY: [0, 300],
            opacity: [100, 0]
          }}
          transition={{
            duration: 3,
            loop: Infinity
          }}
        >
        <g id="prefix__snow" fill={props.bgColor}>
          <path
            id="prefix__Vector"
            d="M354.676 375.397a1.946 1.946 0 001.883-1.949 1.953 1.953 0 00-1.883-1.95 1.953 1.953 0 000 3.899z"
          />
          <path
            id="prefix__Vector_2"
            d="M828.164 124.214c7.914 0 14.329-6.417 14.329-14.332 0-7.916-6.415-14.333-14.329-14.333-7.914 0-14.329 6.417-14.329 14.333 0 7.915 6.415 14.332 14.329 14.332z"
          />
          <path
            id="prefix__Vector_3"
            d="M842.493 222.948c5.276 0 9.553-4.278 9.553-9.555s-4.277-9.554-9.553-9.554c-5.275 0-9.552 4.277-9.552 9.554s4.277 9.555 9.552 9.555z"
          />
          <path
            id="prefix__Vector_4"
            d="M1012.85 350.348c5.28 0 9.56-4.278 9.56-9.555s-4.28-9.555-9.56-9.555c-5.27 0-9.55 4.278-9.55 9.555s4.28 9.555 9.55 9.555z"
          />
          <path
            id="prefix__Vector_5"
            d="M737.412 339.2c5.276 0 9.553-4.278 9.553-9.555s-4.277-9.555-9.553-9.555c-5.276 0-9.553 4.278-9.553 9.555s4.277 9.555 9.553 9.555z"
          />
          <path
            id="prefix__Vector_6"
            d="M336.192 238.873c5.276 0 9.553-4.278 9.553-9.555s-4.277-9.555-9.553-9.555c-5.276 0-9.553 4.278-9.553 9.555s4.277 9.555 9.553 9.555z"
          />
          <path
            id="prefix__Vector_7"
            d="M305.942 597.183c5.276 0 9.552-4.278 9.552-9.555s-4.276-9.555-9.552-9.555-9.553 4.278-9.553 9.555 4.277 9.555 9.553 9.555z"
          />
          <path
            id="prefix__Vector_8"
            d="M532.026 288.24c7.914 0 14.329-6.416 14.329-14.332s-6.415-14.332-14.329-14.332c-7.914 0-14.329 6.416-14.329 14.332s6.415 14.332 14.329 14.332z"
          />
        </g>
        </motion.g>
      </g>
      <g id="prefix__Desk">
        <path
          id="prefix__lower"
          d="M1314.56 925.927H106.68c-13.695 0-24.798 7.916-24.798 17.682v5.052c0 9.765 11.103 17.681 24.798 17.681h1207.88c13.7 0 24.8-7.916 24.8-17.681v-5.052c0-9.766-11.1-17.682-24.8-17.682z"
          fill="#686867"
        />
        <path
          id="prefix__upper"
          d="M1323.53 903.261H90.467c-14.065 0-25.467 8.131-25.467 18.16v10.878c0 10.029 11.402 18.159 25.468 18.159H1323.53c14.07 0 25.47-8.13 25.47-18.159v-10.878c0-10.029-11.4-18.16-25.47-18.16z"
          fill="#8C8B89"
        />
      </g>
      <g id="prefix__cat">
        <path
          id="prefix__body-cat"
          d="M354.101 904.056H111.509a79.444 79.444 0 0123.261-56.17 79.41 79.41 0 0156.159-23.267c44.202-13.781 101.861-9.359 163.172 0v79.437z"
          fill="#B58CD9"
        />
        <path
          id="prefix__back-arm-cat"
          d="M319.445 886.725h114.076a7.217 7.217 0 017.22 7.221 7.224 7.224 0 01-7.22 7.222H319.445v-14.443z"
          fill="#3F3D56"
        />
        <path
          id="prefix__rightear-cat"
          d="M339.202 756.631l30.577-37.073a8.028 8.028 0 0112.348-2.721 8.037 8.037 0 012.613 4.003l12.058 42.583-57.596-6.792z"
          fill="#3F3D56"
        />
        <path
          id="prefix__leftear-cat"
          d="M302.117 775.512l11.552-46.65a8.028 8.028 0 0114.045-5.312l29.275 33.186-54.872 18.776z"
          fill="#B58CD9"
        />
        {/* Cat Tail Animation */}
        <motion.g
          style={{
            originX: "130px",
            originY: "900px"
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
            d="M111.509 904.056h23.104v49.107a23.118 23.118 0 01-6.767 16.341 23.105 23.105 0 01-16.337 6.768v-72.216z"
            fill="#B58CD9"
          />
          <path
            id="prefix__Vector_9"
            d="M125.549 916.414v34.962c0 2.676.99 4.846 2.211 4.847 1.221.001 2.211-2.167 2.211-4.843v-34.962c0-2.676-.99-4.846-2.211-4.847-1.221-.001-2.211 2.167-2.211 4.843z"
            fill="#DAB6FA"
          />
        </g>
        </motion.g>
        <path
          id="prefix__front-arm-cat"
          d="M315.113 889.613h114.076a7.218 7.218 0 017.22 7.222 7.236 7.236 0 01-2.114 5.106 7.225 7.225 0 01-5.106 2.115H315.113v-14.443z"
          fill="#B58CD9"
        />
        <path
          id="prefix__face-cat"
          d="M354.101 904.056c43.065 0 77.976-34.918 77.976-77.993 0-43.074-34.911-77.993-77.976-77.993s-77.976 34.919-77.976 77.993c0 43.075 34.911 77.993 77.976 77.993z"
          fill="#B58CD9"
        />
        <path
          id="prefix__Vector_10"
          d="M316.381 806.595c-1.272 0-2.493-.473-3.393-1.315-.899-.841-1.405-1.983-1.405-3.173-.012-6.56 2.761-12.857 7.709-17.507 4.948-4.65 11.667-7.275 18.682-7.296 1.273 0 2.493.473 3.393 1.314.9.842 1.406 1.983 1.406 3.173s-.506 2.332-1.406 3.173a4.97 4.97 0 01-3.393 1.315c-4.468.005-8.75 1.669-11.907 4.625-3.158 2.956-4.931 6.964-4.931 11.142.012 1.192-.482 2.34-1.373 3.192-.891.853-2.107 1.34-3.382 1.357z"
          fill="#DAB6FA"
        />
        <path
          id="prefix__nose-cat"
          d="M429.189 852.061c4.785 0 8.664-9.053 8.664-20.22 0-11.168-3.879-20.221-8.664-20.221s-8.664 9.053-8.664 20.221c0 11.167 3.879 20.22 8.664 20.22z"
          fill="#3F3D56"
        />
        <path
          id="prefix__left-eye-cat"
          d="M408.251 815.953c1.196 0 2.166-2.263 2.166-5.055s-.97-5.055-2.166-5.055-2.166 2.263-2.166 5.055.97 5.055 2.166 5.055z"
          fill="#3F3D56"
        />
        <path
          id="prefix__right-eye-cat"
          d="M424.135 805.843c1.196 0 2.166-2.263 2.166-5.055s-.97-5.055-2.166-5.055-2.166 2.263-2.166 5.055.97 5.055 2.166 5.055z"
          fill="#3F3D56"
        />
        <path
          id="prefix__hair2"
          d="M347.559 747.202s-4.334-7.541-4.334-12.141z"
          fill="#3F3D56"
        />
        <path
          id="prefix__hair"
          d="M349.465 742.325s2.362-8.371 5.651-11.587z"
          fill="#3F3D56"
        />
      </g>
      <g id="prefix__female-3_1" clipPath="url(#prefix__clip0)">
        <path
          id="prefix__backhair"
          d="M857.582 297.15h59.483a93.337 93.337 0 0165.981 27.316 93.226 93.226 0 0127.334 65.948v218.469a44.002 44.002 0 01-12.906 31.134 44.063 44.063 0 01-31.151 12.896H808.324a44.063 44.063 0 01-31.151-12.896 44.019 44.019 0 01-12.902-31.134V390.414a93.243 93.243 0 0127.33-65.948 93.337 93.337 0 0165.981-27.316z"
          fill="#072132"
        />
        <path
          id="prefix__Vector_11"
          d="M765.85 557.179h248.2v317.87c0 6.527-2.59 12.787-7.21 17.403a24.631 24.631 0 01-17.41 7.208H790.474a24.632 24.632 0 01-17.412-7.208 24.606 24.606 0 01-7.212-17.403v-317.87z"
          fill="#7C51A1"
        />
        <g id="prefix__ears">
          <g id="prefix__right-ear">
            <path
              id="prefix__Vector_12"
              d="M983.841 469.232c11.958 0 21.649-9.689 21.649-21.641 0-11.952-9.691-21.642-21.649-21.642-11.959 0-21.653 9.69-21.653 21.642s9.694 21.641 21.653 21.641z"
              fill="#EFBDB4"
            />
            <path
              id="prefix__Vector_13"
              d="M983.456 459.253c6.444 0 11.668-5.222 11.668-11.662 0-6.441-5.224-11.662-11.668-11.662-6.444 0-11.668 5.221-11.668 11.662 0 6.44 5.224 11.662 11.668 11.662z"
              fill="#DDA79C"
            />
          </g>
          <g id="prefix__left-ear">
            <path
              id="prefix__Vector_14"
              d="M796.074 469.232c11.958 0 21.653-9.689 21.653-21.641 0-11.952-9.695-21.642-21.653-21.642-11.958 0-21.653 9.69-21.653 21.642s9.695 21.641 21.653 21.641z"
              fill="#EFBDB4"
            />
            <path
              id="prefix__Vector_15"
              d="M795.69 459.253c6.444 0 11.668-5.222 11.668-11.662 0-6.441-5.224-11.662-11.668-11.662-6.444 0-11.668 5.221-11.668 11.662 0 6.44 5.224 11.662 11.668 11.662z"
              fill="#DDA79C"
            />
          </g>
        </g>
        <g id="prefix__ear-rings" fill="#EAE4E4">
          <path
            id="prefix__Vector_16"
            d="M792.853 475.369a6.128 6.128 0 006.13-6.127 6.128 6.128 0 00-6.13-6.126 6.129 6.129 0 00-6.13 6.126 6.129 6.129 0 006.13 6.127z"
          />
          <path
            id="prefix__Vector_17"
            d="M986.75 474.341a6.129 6.129 0 006.13-6.127 6.129 6.129 0 00-6.13-6.126 6.128 6.128 0 00-6.13 6.126 6.128 6.128 0 006.13 6.127z"
          />
        </g>
        <g id="prefix__collar">
          <path
            id="prefix__Vector_20"
            d="M889.937 507.914c-36.095.925-64.626 31.258-63.691 67.78.935 36.523 30.994 65.36 67.088 64.436 36.095-.924 64.625-31.257 63.69-67.79-.935-36.533-30.982-65.35-67.087-64.426z"
            fill="#D3A09B"
          />
        </g>
        <path
          id="prefix__face"
          d="M983.841 421.723c0-44.861-42.028-81.217-93.884-81.217s-93.841 36.356-93.841 81.217v49.191c0 44.851 41.861 109.038 93.717 109.038s94.049-64.176 94.049-109.038l-.041-49.191z"
          fill="#EFBDB4"
        />
        <g id="prefix__nose">
          <path
            id="prefix__Vector_30"
            d="M889.771 478.64a10.253 10.253 0 00-6.806 2.576 10.38 10.38 0 00-3.356 6.469c-.01.152.012.304.063.447a.826.826 0 00.218.384c.094.105.202.196.322.27.139.068.291.107.447.114h18.317c.154-.013.305-.052.447-.114a.81.81 0 00.322-.27.835.835 0 00.218-.384c.052-.154.07-.317.052-.478a10.076 10.076 0 00-3.356-6.469 10.395 10.395 0 00-6.888-2.545z"
            fill="#EBB8B0"
          />
          <path
            id="prefix__Vector_31"
            d="M879.557 487.914a.882.882 0 00.052.384c.062.104.114.27.229.322.092.092.202.166.322.218a.94.94 0 00.384.114h18.224c.136 0 .27-.04.384-.114a.926.926 0 00.333-.218c.092-.093.166-.202.218-.322.041-.124.059-.254.052-.384h-20.198z"
            fill="#DDA79C"
          />
          <path
            id="prefix__Vector_32"
            d="M895.537 484.539h-11.585c-.292 0-.572.116-.779.322a1.105 1.105 0 000 1.557c.207.206.487.322.779.322h11.585a1.1 1.1 0 100-2.201z"
            fill="#F0C6BE"
          />
        </g>
        <g id="prefix__right_arm" fill="#7C51A1">
          <path
            id="prefix__Vector_52"
            d="M1011.12 558.082l-20.401 6.117c-13.84 4.153-22.203 20.893-18.702 37.384l56.953 271.223c3.51 16.511 17.51 26.501 31.27 22.42l20.4-6.117c13.84-4.153 22.21-20.893 18.71-37.384l-56.88-271.212c-3.5-16.512-17.51-26.502-31.35-22.431z"
          />
          <path
            id="prefix__Vector_53"
            d="M897.303 871.653v8.536c0 17.02 11.522 30.78 25.788 30.78h151.759c14.26 0 25.79-13.76 25.79-30.78v-8.567c0-17.02-11.53-30.78-25.79-30.78H923.091c-14.266.031-25.788 13.791-25.788 30.811z"
          />
        </g>
        <g id="prefix__left_arm">
          <path
            id="prefix__Vector_54"
            d="M702.295 849.036h-32.708c-13.164 0-23.813 12.565-23.813 28.131 0 15.567 10.649 28.132 23.813 28.132h32.708c13.174 0 23.813-12.576 23.813-28.132 0-15.556-10.639-28.131-23.813-28.131z"
            fill="#7C51A1"
          />
          <path
            id="prefix__Vector_55"
            d="M678.928 887.707l13.611 10.51c12.208 9.481 28.52 5.462 36.458-8.962l45.186-81.415c7.937-14.424 4.53-33.698-7.596-43.075l-13.6-10.509c-12.218-9.346-28.531-5.462-36.469 8.962l-45.175 81.518c-7.938 14.217-4.54 33.49 7.585 42.971z"
            fill="#7C51A1"
          />
          <path
            id="prefix__Vector_56"
            d="M726.638 819.897l25.3 4.953c14.39 2.783 27.907-8.661 30.266-25.66l28.343-201.678c2.359-17.01-7.325-32.981-21.632-35.868l-25.289-4.943c-14.39-2.783-27.917 8.65-30.265 25.66l-28.355 201.678c-2.348 16.999 7.336 32.971 21.632 35.858z"
            fill="#7C51A1"
          />
          <path
            id="prefix__Vector_57"
            d="M792.999 571.343h-34.692c-2.619 0-4.8 2.575-4.8 5.67 0 3.095 2.181 5.67 4.8 5.67h34.692c2.618 0 4.8-2.575 4.8-5.67 0-3.095-2.078-5.67-4.8-5.67z"
            fill="#72439A"
          />
          <path
            id="prefix__Vector_58"
            d="M701.173 813.728l-20.385 33.231a6.299 6.299 0 001.039 7.933 4.31 4.31 0 003.664 1.03 4.315 4.315 0 003.058-2.265l20.406-33.231a6.315 6.315 0 00-1.039-7.934 4.373 4.373 0 00-3.671-1.01 4.363 4.363 0 00-3.072 2.246z"
            fill="#72439A"
          />
        </g>
        <g id="prefix__laptop">
          <path
            id="prefix__Vector_60"
            d="M1045.32 699.042H769.455a58.748 58.748 0 00-22.476 4.482 58.693 58.693 0 00-31.761 31.801 58.654 58.654 0 00-4.445 22.472v94.26a58.726 58.726 0 0017.178 41.513 58.79 58.79 0 0041.504 17.243h275.865a58.696 58.696 0 0022.47-4.483 58.662 58.662 0 0031.76-31.801 58.546 58.546 0 004.45-22.472v-94.26c.01-7.71-1.5-15.346-4.45-22.472a58.6 58.6 0 00-12.71-19.059 58.694 58.694 0 00-19.05-12.742 58.714 58.714 0 00-22.47-4.482z"
            fill="#49494B"
          />
          <path
            id="prefix__Vector_61"
            d="M1038.04 679.768H776.728a66.038 66.038 0 00-46.659 19.36 65.957 65.957 0 00-19.296 46.665v79.628a65.929 65.929 0 005.005 25.249 65.969 65.969 0 0035.695 35.728 66.048 66.048 0 0025.255 5.038h261.312a66.08 66.08 0 0025.26-5.038 65.899 65.899 0 0021.4-14.315 66.055 66.055 0 0014.3-21.413 65.886 65.886 0 005-25.249v-79.67c0-17.49-6.94-34.265-19.31-46.638a66.041 66.041 0 00-46.65-19.345z"
            fill="#595A5C"
          />
          <path
            id="prefix__Vector_62"
            d="M907.184 813.957a30.968 30.968 0 0017.196-5.214 30.934 30.934 0 0013.161-31.757 30.937 30.937 0 00-24.319-24.306 30.96 30.96 0 00-31.773 13.154 30.928 30.928 0 00-5.217 17.187 30.954 30.954 0 009.072 21.869 30.984 30.984 0 0021.88 9.067z"
            fill="#72439A"
          />
          <path
            id="prefix__Vector_63"
            d="M907.392 809.18a25.986 25.986 0 0014.43-4.375 25.965 25.965 0 009.567-11.652 25.939 25.939 0 001.478-14.999 25.961 25.961 0 00-20.408-20.398 25.982 25.982 0 00-26.665 11.039 25.955 25.955 0 003.231 32.781 25.98 25.98 0 0018.367 7.604z"
            fill="#7C51A1"
          />
          <path
            id="prefix__Vector_64"
            d="M922.447 783.125a15.159 15.159 0 01-2.598 8.411 15.402 15.402 0 01-6.753 5.608 14.78 14.78 0 01-8.717.831 15.23 15.23 0 01-11.845-11.942 14.876 14.876 0 016.442-15.473 15.152 15.152 0 018.416-2.482c1.99.008 3.96.392 5.808 1.132a15.406 15.406 0 016.753 5.607 14.972 14.972 0 012.494 8.308z"
            fill="#fff"
          />
        </g>
        <g id="prefix__Group" opacity={0.5} fill="#EA9D9B">
          <path
            id="prefix__Vector_18"
            opacity={0.5}
            d="M843.12 512.411c9.691 0 17.548-7.853 17.548-17.54 0-9.686-7.857-17.539-17.548-17.539-9.692 0-17.549 7.853-17.549 17.539 0 9.687 7.857 17.54 17.549 17.54z"
          />
          <path
            id="prefix__Vector_19"
            opacity={0.5}
            d="M934.738 512.411c9.692 0 17.548-7.853 17.548-17.54 0-9.686-7.856-17.539-17.548-17.539-9.692 0-17.549 7.853-17.549 17.539 0 9.687 7.857 17.54 17.549 17.54z"
          />
        </g>
                {/* Eyebrows Animtion */}
                <motion.g
          animate={{
            //scaleY: [1, 0.1, 1],
            translateY: [1, props.eyesBrows_translateY, 1]
          }}
          transition={{
            duration: 5,
            loop: Infinity,
            repeatDelay: 1
          }}
        >
        <g id="prefix__eyebrows">
          <g id="prefix__left_eyebrow">
            <path
              id="prefix__Vector_22"
              d="M857.665 432.159h-23.657a5.974 5.974 0 01-3.959-1.588 8.542 8.542 0 01-2.327-4.092 8.3 8.3 0 00-.239 2.077 8.48 8.48 0 001.922 5.473 6.055 6.055 0 002.044 1.662c.796.396 1.67.612 2.559.633h23.657a6.045 6.045 0 004.603-2.295 8.48 8.48 0 001.922-5.473 11.793 11.793 0 00-.239-2.077 7.205 7.205 0 01-2.327 4.092 5.85 5.85 0 01-3.959 1.588z"
              fill="#DDA79C"
            />
            <path
              id="prefix__Vector_23"
              d="M857.666 419.116h-23.71c-3.616 0-6.536 3.458-6.536 7.758 0 4.299 2.92 7.767 6.536 7.767h23.71c3.615 0 6.524-3.468 6.524-7.767 0-4.351-2.909-7.758-6.524-7.758z"
              fill="#072132"
            />
            <path
              id="prefix__Vector_25"
              d="M852.772 421.629h-13.923a1.737 1.737 0 00-1.579 1.87 1.734 1.734 0 001.579 1.869h13.923a1.735 1.735 0 001.569-1.869 1.734 1.734 0 00-1.569-1.87z"
              fill="#143748"
            />
          </g>
          <g id="prefix__right_eyebrow">
            <path
              id="prefix__Vector_26"
              d="M946.011 431.287h-23.575a5.83 5.83 0 01-3.948-1.589 8.533 8.533 0 01-2.327-4.154 9 9 0 00-.291 2.077 8.5 8.5 0 001.922 5.483 5.984 5.984 0 004.582 2.285h23.637a6.002 6.002 0 004.592-2.285 8.552 8.552 0 001.912-5.483 13.056 13.056 0 00-.228-2.077 7.815 7.815 0 01-2.328 4.092 5.566 5.566 0 01-3.948 1.651z"
              fill="#DDA79C"
            />
            <path
              id="prefix__Vector_27"
              d="M946.011 418.192h-23.637c-3.595 0-6.504 3.458-6.504 7.757 0 4.3 2.909 7.768 6.504 7.768h23.637c3.605 0 6.504-3.468 6.504-7.768 0-4.299-2.899-7.757-6.504-7.757z"
              fill="#072132"
            />
            <path
              id="prefix__Vector_28"
              d="M946.011 429.345h-23.575a5.83 5.83 0 01-3.948-1.589 8.02 8.02 0 01-2.327-4.154 8.912 8.912 0 00-.229 2.077 8.533 8.533 0 001.912 5.483 6.002 6.002 0 004.592 2.285h23.575a6.01 6.01 0 004.592-2.285 8.533 8.533 0 001.912-5.483 13.069 13.069 0 00-.228-2.077 7.689 7.689 0 01-2.328 4.154 5.806 5.806 0 01-3.948 1.589z"
              fill="#0B161E"
            />
            <path
              id="prefix__Vector_29"
              d="M941.138 420.747h-13.881a1.746 1.746 0 00-1.569 1.879 1.734 1.734 0 001.569 1.87h13.881a1.74 1.74 0 001.169-.613 1.73 1.73 0 00.4-1.257 1.746 1.746 0 00-1.569-1.879z"
              fill="#143748"
            />
          </g>
        </g>
        </motion.g>

                {/*Eyes Animation*/}

                <motion.g
          animate={{
            scaleY: [1, 0, 1],
            translateY: [1, 0, 1]
          }}
          transition={{
            duration: 1,
            loop: Infinity,
            repeatDelay: 1
          }}
        >
        <g id="prefix__eyes" fill="#231F20">
          <path
            id="prefix__left_eye"
            d="M852.148 448.193a7.72 7.72 0 00-15.439 0v10.79a7.722 7.722 0 0013.178 5.455 7.711 7.711 0 002.261-5.455v-10.79z"
          />
          <path
            id="prefix__right_eye"
            d="M940.535 448.193a7.72 7.72 0 00-15.439 0v10.79a7.722 7.722 0 0013.178 5.455 7.711 7.711 0 002.261-5.455v-10.79z"
          />
          <path
            id="prefix__Vector_20"
            d="M944.723 444.276l-5.264 3.73a6.808 6.808 0 01-9.487-1.614l-1.292-1.821 5.263-3.731a6.807 6.807 0 019.488 1.615l1.292 1.821z"
          />
          <path
            id="prefix__Vector_21"
            d="M844.537 440.876l5.264 3.731-1.293 1.821a6.802 6.802 0 01-7.063 2.697 6.787 6.787 0 01-2.424-1.083l-5.264-3.73 1.292-1.821a6.807 6.807 0 019.488-1.615z"
          />
        </g>
        </motion.g>
        <g id="prefix__lips" fill="#BC3451">
          <path
            id="prefix__Vector_22"
            d="M897.729 507.478a11.844 11.844 0 00-10.943 7.299 11.832 11.832 0 00-.901 4.529h23.678a11.817 11.817 0 00-3.466-8.363 11.832 11.832 0 00-8.368-3.465z"
          />
          <path
            id="prefix__Vector_23"
            d="M889.957 538.943a19.635 19.635 0 0019.627-19.626h-39.253a19.634 19.634 0 0019.626 19.626z"
          />
          <path
            id="prefix__Vector_24"
            d="M882.186 507.52a11.848 11.848 0 00-8.369 3.471 11.834 11.834 0 00-3.465 8.367h23.678c0-3.14-1.248-6.151-3.469-8.371a11.847 11.847 0 00-8.375-3.467z"
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
        <path
          id="prefix__mouth"
          d="M899.256 515.391h-18.598c-1.163 0-2.078 1.392-2.078 3.116 0 1.734.935 3.115 2.078 3.115h18.598c1.164 0 2.078-1.392 2.078-3.115.021-1.724-.914-3.116-2.078-3.116z"
          fill="#A12A4A"
        />
        </motion.g>
        <g id="prefix__front-hair">
          <path
            id="prefix__Vector_25"
            d="M884.264 414.734H819.68a26.833 26.833 0 01-18.949-7.864 26.805 26.805 0 01-7.847-18.949v-27.934a81.126 81.126 0 0123.779-57.378 81.208 81.208 0 0157.408-23.767h49.913a6.236 6.236 0 016.234 6.231v83.803a45.879 45.879 0 01-13.447 32.449 45.926 45.926 0 01-32.466 13.44l-.041-.031z"
            fill="#DDA79C"
          />
          <path
            id="prefix__Vector_26"
            d="M884.264 407.371h-91.587a26.834 26.834 0 01-18.935-7.849 26.807 26.807 0 01-7.861-18.922v-24.414a81.126 81.126 0 0123.779-57.378 81.212 81.212 0 0157.408-23.766h76.916a6.228 6.228 0 016.234 6.23v80.2a45.885 45.885 0 01-28.369 42.417 45.913 45.913 0 01-17.585 3.482z"
            fill="#072132"
          />
          <path
            id="prefix__Vector_27"
            d="M878.736 369.437H804.76a5.776 5.776 0 00-5.777 5.774v1.287a5.776 5.776 0 005.777 5.774h73.976a5.775 5.775 0 005.777-5.774v-1.287a5.775 5.775 0 00-5.777-5.774z"
            fill="#143748"
          />
          <path
            id="prefix__Vector_28"
            d="M841.374 312.727h-36.385a6.004 6.004 0 00-6.006 6.002v1.34a6.004 6.004 0 006.006 6.002h36.385a6.003 6.003 0 006.005-6.002v-1.34a6.003 6.003 0 00-6.005-6.002z"
            fill="#143748"
          />
        </g>
        <g id="prefix__collar_2" fill="#72439A">
          <path
            id="prefix__Vector_29"
            d="M824.771 644.429l-20.697-91.622 23.575-4.621 20.697 91.622-23.575 4.621z"
          />
          <path
            id="prefix__Vector_30"
            d="M909.012 678.148l-83.441-34.518 9.819-21.922 83.441 34.518-9.819 21.922z"
          />
          <path
            id="prefix__Vector_31"
            d="M883.859 617.627l-43.846-8.796-6.587 32.774 84.002 16.854-33.569-40.832z"
          />
          <path
            id="prefix__Vector_32"
            d="M958.261 644.429l20.78-92.027-23.575-4.621-20.78 92.027 23.575 4.621z"
          />
          <path
            id="prefix__Vector_33"
            d="M874.019 678.148l83.442-34.518-9.819-21.922-83.441 34.518 9.818 21.922z"
          />
          <path
            id="prefix__Vector_34"
            d="M899.173 617.627l43.846-8.796 6.576 32.774-83.992 16.854 33.57-40.832z"
          />
        </g>
        <g id="prefix__left_hand">
          <path
            id="prefix__Vector_59"
            d="M669.005 869.96l-30.016-30.115a9.172 9.172 0 00-10.07-2.022 9.172 9.172 0 00-2.99 2.022 9.173 9.173 0 00-2.017 10.063 9.173 9.173 0 002.017 2.991l30.006 30.115a9.193 9.193 0 006.535 2.725 9.196 9.196 0 006.535-2.725 9.179 9.179 0 002.722-6.527 9.184 9.184 0 00-2.722-6.527z"
            fill="#ECB9A6"
          />
          <path
            id="prefix__finger_4"
            d="M590.79 854.508l-14.546 14.539a7.525 7.525 0 00-2.317 5.363 7.524 7.524 0 002.211 5.408 7.54 7.54 0 0010.777-.117l14.546-14.455a7.587 7.587 0 001.654-8.284 7.59 7.59 0 00-1.654-2.464 7.49 7.49 0 00-8.229-1.643 7.49 7.49 0 00-2.442 1.653z"
            fill="#E0A1A2"
          />
          <path
            id="prefix__mouse"
            d="M673.224 904.665a12.32 12.32 0 005.704-1.401 11.807 11.807 0 004.374-3.967 12.145 12.145 0 002.078-5.535 12.012 12.012 0 00-.821-5.868 52.946 52.946 0 00-13.296-19.4 53.004 53.004 0 00-65.761-4.92 53.225 53.225 0 00-19.512 24.3 11.963 11.963 0 00-.748 5.867 12.26 12.26 0 002.078 5.535 13.512 13.512 0 004.384 3.967 11.435 11.435 0 005.704 1.485h75.847v-.083l-.031.02z"
            fill="#363736"
          />
          <path
            id="prefix__finger_3"
            d="M608.723 845.92l-23.066 23.147a9.188 9.188 0 00-2.725 6.527 9.19 9.19 0 002.725 6.527 9.197 9.197 0 0010.076 2.016 9.187 9.187 0 002.995-2.016l23.066-23.137a9.186 9.186 0 000-13.064 9.196 9.196 0 00-13.071 0z"
            fill="#E6A7A3"
          />
          <path
            id="prefix__finger_2"
            d="M625.721 839.887l-30.016 30.115a9.194 9.194 0 00-2.727 6.532 9.19 9.19 0 002.727 6.532 9.19 9.19 0 0013.06 0l30.016-30.115a9.183 9.183 0 002.017-10.063 9.173 9.173 0 00-2.017-2.991 9.355 9.355 0 00-13.06-.01z"
            fill="#EBB8B0"
          />
          {/* Clicking Finger Animation */}
          <motion.g
            style={{
              originX: "645px",
              originY: "855px"
            }}
            animate={{
              rotate: [0, -80, 0]
            }}
            transition={{
              loop: Infinity,
              duration: 2
            }}
          >
          <path
            id="prefix__click_finger"
            d="M652.319 836.751l-35.824-35.692a10.12 10.12 0 00-13.964-.228 9.224 9.224 0 00-.239 13.427l35.824 35.691a10.12 10.12 0 0013.964.229 9.278 9.278 0 00.239-13.427z"
            fill="#EFBDB4"
          />
          </motion.g>
          <path
            id="prefix__finger_1"
            d="M686.305 869.992l-33.57-33.636c-4.541-4.548-11.491-4.953-15.46-.986-3.969 3.967-3.554 10.903 1.039 15.452l33.569 33.625c4.541 4.548 11.492 4.964 15.461 1.038 3.969-3.925 3.511-10.945-1.039-15.493z"
            fill="#EFBDB4"
          />
          <path
            id="prefix__finger-1"
            d="M700.456 884.135l-33.57-33.635c-4.551-4.549-11.491-4.964-15.46-1.039-3.969 3.926-3.554 10.914 1.039 15.452l33.518 33.677c4.55 4.549 11.491 4.964 15.46 1.039 3.969-3.925 3.563-10.956-.987-15.494z"
            fill="#EFBDB4"
          />
          <path
            id="prefix__thumb"
            d="M692.892 884.758h-41.83a10.262 10.262 0 00-9.769 6.247 10.245 10.245 0 005.746 13.558c1.281.495 2.65.728 4.023.684h41.83a10.254 10.254 0 009.769-14.242 10.262 10.262 0 00-9.769-6.247z"
            fill="#EFBDB4"
          />
        </g>
      </g>
      <g id="prefix__hot-cup">
        <g id="prefix__cup">
          <path
            id="prefix__Vector_35"
            d="M1264.84 834.744c-3.85 0-7.61 1.142-10.81 3.28a19.51 19.51 0 00-7.17 8.733 19.484 19.484 0 00-1.1 11.242c.75 3.775 2.6 7.242 5.32 9.964a19.456 19.456 0 009.97 5.325c3.77.751 7.68.365 11.24-1.107a19.493 19.493 0 008.73-7.167 19.454 19.454 0 00-2.42-24.57c-3.65-3.649-8.6-5.7-13.76-5.7zm0 31.434c-2.37 0-4.68-.703-6.65-2.018a11.93 11.93 0 01-4.41-5.374 11.88 11.88 0 01-.68-6.919c.46-2.323 1.6-4.457 3.27-6.131a11.99 11.99 0 0113.05-2.596 12 12 0 015.38 4.41 12.026 12.026 0 012.02 6.653 11.98 11.98 0 01-11.98 11.975z"
            fill="#B58CD9"
          />
          <path
            id="prefix__Vector_36"
            opacity={0.1}
            d="M1264.44 835a19.434 19.434 0 00-17.97 12.012 19.408 19.408 0 00-1.11 11.243 19.45 19.45 0 005.32 9.963 19.462 19.462 0 0021.21 4.218 19.44 19.44 0 008.73-7.167A19.458 19.458 0 001264.44 835zm0 31.433c-2.37 0-4.68-.702-6.65-2.018a11.994 11.994 0 01-4.41-5.374 11.96 11.96 0 01-.68-6.918c.46-2.323 1.6-4.457 3.28-6.132a11.978 11.978 0 0113.05-2.595c2.18.906 4.05 2.441 5.37 4.41a11.942 11.942 0 012.02 6.653 11.98 11.98 0 01-11.98 11.974z"
            fill="#DC5A66"
          />
          <path
            id="prefix__Vector_37"
            d="M1190 819.776h74.84v74.072a9.783 9.783 0 01-2.85 6.895 9.76 9.76 0 01-6.9 2.855h-55.34a9.72 9.72 0 01-6.89-2.855 9.75 9.75 0 01-2.86-6.895v-74.072z"
            fill="#B58CD9"
          />
          <path
            id="prefix__Vector_38"
            opacity={0.1}
            d="M1251.37 819.776v69.228a14.62 14.62 0 01-4.27 10.32 14.6 14.6 0 01-10.32 4.274h7.48a14.6 14.6 0 0010.32-4.274 14.577 14.577 0 004.27-10.32v-69.228h-7.48z"
            fill="#000"
          />
        </g>
        <path
          id="prefix__cup_smoke"
          d="M1204.6 743.66c-1.27.299-2.71.773-3.33 2.329-.99 2.471.8 5.257 2.44 6.955 3.02 3.137 6.21 6.218 8.26 10.596 2.06 4.378 2.7 10.488.46 14.683-2.94 5.479-9.93 6.658-10.61 13.401-.44 4.329 2.28 8.022 5.03 10.195 6.8 5.361 15.56 6.791 20.48 15.181 2.04-5.767 6.59-9.101 11.13-10.524 4.54-1.424 9.26-1.318 13.86-2.283 1.49-.312 3.16-.937 3.83-2.794 1.28-3.597-2.38-7.91-1.12-11.521.97-2.748 3.8-2.535 5.86-3.635 3.37-1.792 4.75-7.757 3.8-12.548-.96-4.792-3.65-8.537-6.49-11.607-7.65-8.274-16.84-13.14-26.14-16.64-4.32-1.628-9.4-4.18-13.89-4.427-4.33-.238-9.28 1.627-13.57 2.639z"
          fill="#EEE"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(574 275)"
            d="M0 0h530v636H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

SvgComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  bgColor: PropTypes.string,
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
  bgColor: "#D0CDE1",
  eyes_scaleY: 0.5,
  eyes_translateY: 17,
  mouth_scaleY: 0,
  mouth_duration: 1,
  eyesBrows_translateY: 17,
  fingerclickY: 1,
}


export default SvgComponent;
