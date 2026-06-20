/**
 * Loader Component
 */

function Loader() {
  return (
    <div className="flex justify-center my-6">

      <div
        className="
          animate-spin
          rounded-full
          h-10
          w-10
          border-4
          border-blue-600
          border-t-transparent
        "
      />

    </div>
  );
}

export default Loader;