import React from "react";

export const Search = () => {
  return (
    <svg viewBox="0 0 56.966 56.966">
      <path
        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
        s-17-7.626-17-17S14.61,6,23.984,6z"
      />
    </svg>
  );
};

export const ChevronDown = (props) => {
  return (
    <svg {...props} viewBox="0 0 256 256">
      <g>
        <g>
          <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
        </g>
      </g>
    </svg>
  );
};

export const ChevronLeft: React.FC<{
  stroke?: string;
  strokeWidth?: number;
  [property: string]: any;
}> = ({ stroke, strokeWidth, ...props }) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <g fill="none">
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
        />
      </g>
    </svg>
  );
};

export const ChevronRight = (props) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
      </g>
    </svg>
  );
};

export const ChevronTop = (props) => {
  return (
    <svg stroke="black" fill="black" {...props} viewBox="0 0 284.929 284.929">
      <g>
        <path
          d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
		C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
		c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
		c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
		C284.929,199.378,283.984,197.188,282.082,195.285z"
        />
      </g>
    </svg>
  );
};

export const Globe = (props) => {
  return (
    <svg {...props} viewBox="0 0 16 16">
      <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
    </svg>
  );
};

export const MagnifyGlass = (props) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <g fill="none">
        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
      </g>
    </svg>
  );
};

export const Lock = (props) => {
  return (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M10.25 4a2.25 2.25 0 0 0-4.495-.154L5.75 4v2h-1.5V4a3.75 3.75 0 0 1 7.495-.2l.005.2v2H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.25V4z"></path>
    </svg>
  );
};

export const Saved = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"></path>
    </svg>
  );
};

export const Login = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10.5"></circle>
      <path d="M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4"></path>
    </svg>
  );
};

export const Pause: React.FC<{ fill?: string; [property: string]: any }> = ({
  fill = "white",
  ...props
}) => {
  return (
    <svg {...props} style={{ display: "block" }}>
      <path fill={fill} d="M13 1v14H9V1zM7 1v14H3V1z" />
    </svg>
  );
};

export const Play: React.FC<{
  fill?: string;
  [property: string]: any;
}> = ({ fill = "white", ...props }) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"
      ></path>
    </svg>
  );
};
