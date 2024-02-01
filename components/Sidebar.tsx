import Image from "next/image";
import Link from "next/link";
import defaultPfp from "@/assets/default-profile-picture.jpeg";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Planning",
    path: "/planning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    name: "Discussions",
    path: "/discussions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

const SidebarProfile = () => {
  return (
    <article className="p-4 cursor-pointer rounded transition duration-200 hover:bg-gray-200/10">
      <figure className="flex items-center gap-4">
        <Image
          alt={"profil de 80Z Aleks"}
          src={defaultPfp}
          height={40}
          width={40}
          quality={100}
          className="rounded-full object-cover"
        />
        <figcaption>
          <p className="font-medium">80Z Aleks</p>
          <p className="text-sm">Joueur — 80ZETREI</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default function Sidebar() {
  return (
    <aside className="h-dvh flex flex-col justify-between bg-gray-950 text-white w-64 space-y-6 px-2 py-6 md:py-9">
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.name}>
              <Link
                href={route.path}
                className="flex items-center gap-2 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200/10"
              >
                <span>{route.icon}</span> {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <SidebarProfile />
    </aside>
  );
}
