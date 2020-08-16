import * as React from "react";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent<{
  width?: number;
  height?: number;
}> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 38"
    >
      <path
        fill="#0C3C3D"
        fillRule="evenodd"
        d="M10.721 35.611c-.679 0-1.103-.515-1.103-1.358 0-3.985 7.906-13.036 15.793-20.708-1.333 8.616-10.145 22.066-14.69 22.066M39.024.003c-1.085.026-3.312.11-5.265.138-.687.01-.961.319-.873.762.103.522.447.909.965.922.667.018 1.56-.093 2.705-.15-2.603 2.003-5.752 4.635-9.001 7.564-.382-2.947-1.748-5.303-4.435-5.303-3.907 0-7.813 5.945-9.511 9.256-.17-2.717-1.359-5.265-3.907-5.265C4.406 7.927 0 19.98 0 21.784c0 .616.705 1.09 1.13 1.09.51 0 .675-.255.845-.85 2.208-7.218 5.52-12.228 7.727-12.228 1.104 0 1.954 1.273 1.954 4.246 0 2.186-.373 3.514-.373 4.032 0 .81.712 1.233 1.137 1.233.51 0 .68-.255.934-.85 2.548-6.284 6.709-12.568 9.68-12.568 1.464 0 2.46 1.87 2.542 5.16-8.91 8.267-17.889 18.23-17.889 23.13 0 2.04 1.125 3.216 2.95 3.216 6.551 0 16.804-16.283 17.028-26.006 3.645-3.43 7.122-6.426 9.624-8.332-.386.956-.774 1.886-.971 2.58-.145.507-.057 1.065.567 1.308.395.153.746-.07.9-.51.941-2.683 1.425-3.783 2-5.318.377-1.004.336-1.14-.76-1.114"
      />
    </svg>
  );
};

Logo.defaultProps = {
  width: 40,
  height: 38,
};
