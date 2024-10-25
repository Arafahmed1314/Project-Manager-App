/* eslint-disable react/prop-types */
export default function PopUp({ acknowledge }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4">
        <div className="flex min-h-screen items-center justify-center p-4 text-white">
          <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold text-center text-green-400">
                ARE YOU SURE?
              </h2>
              <div className="flex gap-4 justify-between">
                <button
                  onClick={() => acknowledge("yes")}
                  className="px-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-200"
                >
                  Yes
                </button>
                <button
                  onClick={() => acknowledge("no")}
                  className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-200"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
