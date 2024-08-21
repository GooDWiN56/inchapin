import localFont from "next/font/local";

export const ProximaNova = localFont({
  src: [
    {
      path: "./ProximaNova-Bold.woff2",
      weight: "700",
    },
    {
      path: "./ProximaNova-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./ProximaNova-Regular.woff2",
      weight: "400",
    },
    {
      path: "./ProximaNova-Light.woff2",
      weight: "300",
    },
  ],
});
