import * as React from "react"

function TickIcon(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      width="20px"
      height="20px"
      {...props}
    >
      <path fill="#66b49d" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm-36.571 367.932L108.606 257.108l38.789-38.789 72.033 72.035L355.463 154.32l38.789 38.789-174.823 174.823z" />
    </svg>
  )
}

export default TickIcon