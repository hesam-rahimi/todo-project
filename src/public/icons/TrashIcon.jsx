function TrashIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 18 18">
      <path
        stroke="#CDCDCD"
        d="M3.874 7.615A1.5 1.5 0 015.37 6h7.26a1.5 1.5 0 011.496 1.615l-.52 6.75a1.5 1.5 0 01-1.495 1.385H5.889a1.5 1.5 0 01-1.496-1.385l-.519-6.75z"
      ></path>
      <path stroke="#CDCDCD" strokeLinecap="round" d="M14.625 3.75H3.375"></path>
      <path stroke="#CDCDCD" d="M7.5 2.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5h-3v-1.5z"></path>
      <path stroke="#CDCDCD" strokeLinecap="round" d="M10.5 9v3.75M7.5 9v3.75"></path>
    </svg>
  );
}

export default TrashIcon;
