/**
 * Toast Component
 *
 * Props:
 * message
 * type
 */

function Toast({
  message,
  type = "success",
}) {
  const styles = {
    success:
      "bg-green-100 text-green-700",
    error:
      "bg-red-100 text-red-700",
    warning:
      "bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      className={`
        fixed
        top-4
        right-4
        px-4
        py-3
        rounded-lg
        shadow-lg
        ${styles[type]}
      `}
    >
      {message}
    </div>
  );
}

export default Toast;