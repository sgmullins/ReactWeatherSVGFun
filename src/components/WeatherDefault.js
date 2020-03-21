import * as React from 'react';
import { motion } from 'framer-motion';

function SvgComponent(props) {
  return (
    <svg
      width={800}
      height={2048}
      viewBox='0 0 1536 2048'
      fill='none'
      {...props}
    >
      <path fill='#E5E5E5' d='M0 0h1536v2048H0z' />
      <g clipPath='url(#prefix__clip0)' id='prefix__mountain_1'>
        <g id='prefix__Layer_2'>
          <g id='prefix__baclground'>
            <motion.g
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'easeIn', duration: 2 }}
            >
              <path
                id='prefix__Vector'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1536-2.585V2036.08c0 .78-.45 1.42-1 1.42H1c-.55 0-1-.64-1-1.42V-2.585C0-3.366.45-4 1-4h1534c.55 0 1 .634 1 1.415z'
                fill='url(#prefix__paint0_radial)'
              />
            </motion.g>
          </g>
        </g>
        <g id='prefix__Layer_1'>
          <g id='prefix__mountainShape' fillRule='evenodd' clipRule='evenodd'>
            <path
              id='prefix__Vector_2'
              d='M664.83 888.693s94.82-507.598 156.412-507.197c58.74.383 83.904 195.91 106.238 227.555 0 0 9.816 22.907 18.103 5.397 6.133-12.96.72-7.147 13.691-38.592 12.97-31.446 31.483-30.465 43.596 10.72 0 0 7.46 11.035 33.12 140.766 37.05 187.344 116.67 373.078 166.58 451.708 0 0 164.03 317.92 333.43 263.72v287.33l-652.709-508.5L664.83 888.693z'
              fill='url(#prefix__paint1_linear)'
            />
            <path
              id='prefix__Vector_3'
              d='M923.611 838.294s-68.242-85.095-88.342-111.075c-44.23-57.171-47.901-101.979-85.075-12.627 0 0-20.962 68.614-42.049 77.959-21.088 9.346-22.936-59.77-64.698-60.054-41.762-.284-217.457 504.303-214.107 604.203l362.317 34.31 131.954-532.716z'
              fill='url(#prefix__paint2_linear)'
            />
            <path
              id='prefix__Vector_4'
              d='M1535.9 1532.36s-157.78 49.41-322.44-189.49c-16.85-24.46-94.04-110.02-137.24-244.62-5.49-17.1-137.621-362.652-199.962-362.652-94.977 0-169.167 415.902-171.303 426.392-2.137 10.5-28.503 169.87-28.503 175.86 0 36.42 566.388 264.85 566.388 264.85l293.06 127.41v-197.75z'
              fill='url(#prefix__paint3_linear)'
            />
            <path
              id='prefix__Vector_5'
              d='M1535.9 1701.8s-248.7-85.91-410.55-299.24c-47.16-62.15-60.98-135.52-122.96-276.55-59.889-136.268-99.087-262.146-152.676-233.107-53.589 29.039-59.069 131.217-67.871 188.827-8.801 57.61-24.011 182.55-26.294 210.43-1.358 16.58 780.351 567.79 780.351 567.79V1701.8z'
              fill='url(#prefix__paint4_linear)'
            />
            <path
              id='prefix__Vector_6'
              d='M367.71 1247.63s-31.18 46.16-44.15 87.49c0 0-2.57 15.8-45.4 37.12-23.23 11.57-43.87 171.31-44.2 181.46-3.64 110.11-75.39 215.39-75.39 218.75 0 3.35-60.81 84.59-102.07 132.62C15.23 1953.11 0 2048 0 2048h1536l-.1-118.35-823.851-519.43-344.339-162.59z'
              fill='url(#prefix__paint5_linear)'
            />
            <path
              id='prefix__Vector_7'
              d='M510.87 1247.63s-31.18 46.16-44.15 87.49c0 0-2.57 15.8-45.4 37.12-23.23 11.57-43.87 171.31-44.2 181.46-3.64 110.11-75.39 215.39-75.39 218.75 0 3.35-60.81 84.59-102.07 132.62-41.27 48.04-56.5 142.93-56.5 142.93H1536v-188.05l-680.791-449.73-344.339-162.59z'
              fill='url(#prefix__paint6_linear)'
            />
            <path
              id='prefix__Vector_8'
              d='M1423.88 1707.15c-5.04-2.53-46.25-14.77-60.59-21-4.91-2.13-40.4-17.86-53.15-23-14.63-5.89-56.54-31.31-64.85-36-27.61-15.58-134.43-88.15-147.75-98-42.12-31.13-164.718-120.82-183.904-135-14.665-10.84-127.878-79.53-135.886-84.38-17.533-10.6-29.246-33.96-49.077-40.62-19.515-6.55-59.953-.93-151.719-26-14.312-3.91-89.394-34.75-106.174-25.93-7.52 3.95-103.56 14.96-103.56 30.41 0 15.44 69.87 119.68 77.63 125.52 39.67 29.86 89.48 40.06 137.128 55 74.902 23.49 151.156 43.88 220.042 82 22.61 12.51 83.688 53.38 93.545 60 15.872 10.67 102.91 61.38 117.995 68 14.47 6.35 75.88 30.69 91.42 38 10.47 4.93 22.6 9.28 31.89 16 15.95 11.55 46.54 30.03 61.65 60 7.84 15.55-24.93 34.14-29.76 38-34.14 27.25-15.95 55-15.95 55s14.09 23.13 23.39 30c17.12 12.66 97.11 21.89 110.55 24 20.89 3.28 41.27 10.52 61.65 16 18.93 5.09 103.98 38.35 113.75 44 14.81 8.58 29.84 16.66 43.58 27 3.15 2.37 30.12 21 30.12 21s.63-234.12-2.47-242.15c-1.62-4.19-106.09-56.13-109.5-57.85z'
              fill='url(#prefix__paint7_linear)'
            />
          </g>
          <g id='prefix__sun'>
            <motion.g
              animate={{ x: 300 }}
              transition={{ ease: 'easeOut', duration: 2 }}
            >
              <path
                id='prefix__Vector_9'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M429.29 184.141c107.886 0 195.341 88.358 195.341 197.354 0 108.996-87.455 197.355-195.341 197.355-107.88 0-195.33-88.359-195.33-197.355s87.45-197.354 195.33-197.354z'
                fill='url(#prefix__paint8_radial)'
              />
            </motion.g>
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id='prefix__paint1_linear'
          x1={950.493}
          y1={381.494}
          x2={1627.1}
          y2={2325.83}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.068} stopColor='#745B6C' />
          <stop offset={0.722} stopColor='#2F2632' />
        </linearGradient>
        <linearGradient
          id='prefix__paint2_linear'
          x1={492.389}
          y1={1017.49}
          x2={1159.07}
          y2={1429.38}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.068} stopColor='#866F7F' />
          <stop offset={0.722} stopColor='#2C232F' />
        </linearGradient>
        <linearGradient
          id='prefix__paint3_linear'
          x1={80.77}
          y1={795.566}
          x2={1692.23}
          y2={1830.37}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.068} stopColor='#735B6C' />
          <stop offset={0.791} stopColor='#2B262C' />
        </linearGradient>
        <linearGradient
          id='prefix__paint4_linear'
          x1={889.678}
          y1={1770.38}
          x2={1016.79}
          y2={631.959}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.103} stopColor='#2B222E' />
          <stop offset={0.751} stopColor='#745B6C' />
        </linearGradient>
        <linearGradient
          id='prefix__paint5_linear'
          x1={367.707}
          y1={1247.63}
          x2={813.311}
          y2={2203.65}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#BA9191' />
          <stop offset={0.392} stopColor='#875A5A' />
          <stop offset={1} stopColor='#5A2E2E' />
        </linearGradient>
        <linearGradient
          id='prefix__paint6_linear'
          x1={510.867}
          y1={1247.63}
          x2={956.471}
          y2={2203.65}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#BA9191' />
          <stop offset={0.392} stopColor='#875A5A' />
          <stop offset={1} stopColor='#5A2E2E' />
        </linearGradient>
        <linearGradient
          id='prefix__paint7_linear'
          x1={543.504}
          y1={1180.21}
          x2={661.459}
          y2={2009.29}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.068} stopColor='#745B6C' />
          <stop offset={0.722} stopColor='#2C232F' />
        </linearGradient>
        <radialGradient
          id='prefix__paint0_radial'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 556.328 -393.148 0 429.29 381.496)'
        >
          <stop offset={0.153} stopColor='#DCC07E' />
          <stop offset={0.449} stopColor='#E7C9BB' />
        </radialGradient>
        <radialGradient
          id='prefix__paint8_radial'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='rotate(90 3.939 425.355) scale(529.908)'
        >
          <stop offset={0.163} stopColor='#E0B44F' />
          <stop offset={0.783} stopColor='#CFBD93' />
        </radialGradient>
        <clipPath id='prefix__clip0'>
          <path
            transform='rotate(90 1536 0)'
            fill='#fff'
            d='M1536 0h2048v1536H1536z'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
