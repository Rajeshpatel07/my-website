import type React from "react";

export const MediasoupIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      {/* Outer blue circle */}
      <circle cx="50" cy="50" r="50" fill="#1FAADB" />

      {/* Middle purple circle, centered */}
      <circle cx="50" cy="50" r="35" fill="#8C52D9" />

      {/* Inner white circle, offset downwards and to the right */}
      <circle cx="62" cy="60" r="19" fill="#FFFFFF" />
    </svg>
  );
};
