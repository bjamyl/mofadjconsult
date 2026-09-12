import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mofad-J Consult",
    short_name: "Mofad-J",
    description: "Project management consulting in Accra, Ghana.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A3D42",
    theme_color: "#0D6970",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
