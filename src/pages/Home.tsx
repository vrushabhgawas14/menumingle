// import { useAuth } from "../context/authContext";

export default function Home() {
  // const { user } = useAuth();
  return (
    <>
      <main>
        {/* <section className="flex flex-col justify-center items-center py-2">
          <header className="text-3xl sm:text-2xl flex flex-wrap text-center">
            Hello {user ? user.email : "Guest"}
          </header>
        </section> */}
        {/* Home Page Section */}
        <section className="bodyBackground px-20 py-5 flex sm:flex-col w-full lg:h-[80vh] justify-between items-center sm:space-y-4">
          {/* Left Side */}
          <section className="p-4 px-6 w-[50vw] sm:w-[90vw] flex flex-col justify-center items-start sm:items-center sm:text-center space-y-4">
            <h2 className="text-6xl sm:text-4xl font-bold">
              A system that helps restaurants grow!
            </h2>
            <div className="text-lg font-semibold">
              Online ordering that makes your job easier and provides a seamless
              experience for customers.
            </div>
            <div className="flex justify-start space-x-4 sm:justify-center font-semibold w-full">
              <a
                href="/product"
                className="bg-secondary text-red-200 px-3 py-1 text-lg sm:text-base rounded-xl border-2 border-black hover:bg-opacity-90 cursor-pointer"
              >
                Get started - it's free!
              </a>
              <a
                href="/services"
                className="bg-secondary text-red-200 px-3 py-1 text-lg sm:text-base rounded-xl border-2 border-black hover:bg-opacity-90 cursor-pointer"
              >
                How it Works
              </a>
            </div>
            <div className="flex space-x-8 sm:space-x-4 sm:justify-center w-full font-semibold underline">
              <p>Easy self setup</p>
              <p>No credit-card required</p>
            </div>
          </section>
          {/* Right Side Image */}
          <section className="sm:w-[90vw] flex justify-center">
            <img
              src={require("../assets/images/foodOrdering.jpg")}
              alt="Food"
              className="w-96 h-80 rounded-xl sm:rounded-3xl"
            />
          </section>
        </section>
      </main>
    </>
  );
}
