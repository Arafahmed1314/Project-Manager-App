import Form from "./Form";

export default function FromModal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50  backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4  ">
        <div className="flex min-h-screen items-center justify-center  p-4 text-white">
          <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
