import Image from "next/image";
import Link from "next/link";
import defaultPfp from "@/assets/default-profile-picture.jpeg";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Planning",
    path: "/planning",
  },
  {
    name: "Discussion",
    path: "/discussion",
  },
];

const SidebarProfile = () => {
  return (
    <article className="px-4">
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
    <aside className="h-dvh flex flex-col justify-between bg-gray-800 text-white w-64 space-y-6 px-2 py-6 md:py-9">
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.name}>
              <Link
                href={route.path}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <SidebarProfile />
    </aside>
  );
}
