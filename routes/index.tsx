import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bioocus" },
      { name: "description", content: "Bioocus — advanced cell and gene therapy in China." },
      { property: "og:title", content: "Bioocus" },
      { property: "og:description", content: "Bioocus — advanced cell and gene therapy in China." },
    ],
  }),
  server: {
    handlers: {
      GET: async () => {
        const { servePage } = await import("@/site/serve-page.server");
        return servePage("/");
      },
    },
  },
});
