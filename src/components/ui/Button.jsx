/**
 * Button Component
 *
 * Props:
 * children - button text/content
 * onClick - click handler
 * type - button type
 * className - additional styles
 */

function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-5
        py-2
        rounded-lg
        font-medium
        transition
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;