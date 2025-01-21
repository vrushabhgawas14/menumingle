import { Link } from "react-router-dom";
import {
  CompanyColumn,
  ConnectColumn,
  ExploreColumn,
} from "../constants/FooterDetails";

export default function Footer() {
  return (
    <>
      <footer className="footerComponentColors border-t-2 border-amber-900">
        <section className="flex sm:flex-wrap items-start justify-evenly sm:justify-between sm:w-[80vw] m-10">
          <div>
            <h1 className="text-2xl py-4 pt-8">Company</h1>
            {CompanyColumn.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex flex-col py-2 text-xl underline"
              >
                {item.text}
              </a>
            ))}
          </div>
          {/* Explore */}
          <div>
            <h1 className="text-2xl py-4 pt-8">Explore</h1>
            {ExploreColumn.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex flex-col py-2 text-xl underline"
              >
                {item.text}
              </a>
            ))}
          </div>
          {/* Get In Touch */}
          <div>
            <h1 className="text-2xl py-4 pt-8">Get In Touch</h1>
            {ConnectColumn.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex flex-col py-2 text-xl underline"
              >
                {item.text}
              </a>
            ))}
          </div>
        </section>
        <section className="flex justify-center text-4xl underline">
          <a href="/">MenuMingle</a>
        </section>
        <p className="text-center pt-10 pb-4">
          © 2025 MenuMingle. All rights reserved.
        </p>
      </footer>
    </>
  );
}
