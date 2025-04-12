export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle - Symbolizing Unity or Teamwork */}
      <circle cx="32" cy="32" r="30" stroke="#4F46E5" strokeWidth="4" fill="none" />

      {/* Three interconnected nodes representing team members */}
      <circle cx="16" cy="24" r="6" fill="#4F46E5" />
      <circle cx="48" cy="24" r="6" fill="#4F46E5" />
      <circle cx="32" cy="44" r="6" fill="#4F46E5" />

      {/* Connecting lines to signify collaboration */}
      <line x1="20" y1="27" x2="44" y2="27" stroke="#4F46E5" strokeWidth="3" />
      <line x1="16" y1="30" x2="30" y2="42" stroke="#4F46E5" strokeWidth="3" />
      <line x1="48" y1="30" x2="34" y2="42" stroke="#4F46E5" strokeWidth="3" />

     
    </svg>
  );
}
