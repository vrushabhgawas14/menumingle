import { useAuth } from "../context/authContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center py-10">
          <header className="text-3xl sm:text-2xl flex flex-wrap text-center">
            Hello {user ? user.email : "Guest"}
          </header>
          <h2 className="w-[80vw] py-10 text-justify text-xl font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nihil recusandae fuga, repudiandae consectetur magnam? Asperiores
            nobis saepe necessitatibus impedit temporibus consequuntur nulla
            magni! Placeat iste reprehenderit vitae in magnam quae assumenda
            quam qui tempora et? Fugiat quas enim in mollitia, natus libero,
            repudiandae sit officia cum vitae deserunt obcaecati.
          </h2>
          <h2 className="w-[80vw] py-10 text-justify text-xl font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nihil recusandae fuga, repudiandae consectetur magnam? Asperiores
            nobis saepe necessitatibus impedit temporibus consequuntur nulla
            magni! Placeat iste reprehenderit vitae in magnam quae assumenda
            quam qui tempora et? Fugiat quas enim in mollitia, natus libero,
            repudiandae sit officia cum vitae deserunt obcaecati.
          </h2>
        </section>
      </main>
    </>
  );
}
