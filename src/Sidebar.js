import React from "react";
import { links } from "./data";

function Sidebar() {
  // Check if links is an array before mapping
  if (!Array.isArray(links)) {
    console.error("links is not an array:", links);
    return null; // or return some fallback UI
  }

  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
