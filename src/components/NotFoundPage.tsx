import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const reuestedURL = useLocation();
  return (
    <>
      <main className="flex justify-center items-center h-[70vh]">
        <section className="space-y-4 py-2 px-8">
          <h2 className="text-4xl sm:text-3xl font-bold text-center">Oops!</h2>
          <div className="text-3xl sm:text-xl font-semibold">
            Requested page "{reuestedURL.pathname}" doesn't exist!
          </div>
          <div className="text-2xl sm:text-xl font-semibold">
            Please check the URL or return to the{" "}
            <Link to="/" className="underline">
              homepage
            </Link>
            .
          </div>
        </section>
      </main>
    </>
  );
}
