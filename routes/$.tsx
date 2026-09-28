import { createFileRoute } from "@tanstack/react-router";

// Every original Bioocus page (e.g. /about-us/, /news/<slug>/) is served as its original HTML.
export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Bioocus" },
      { name: "description", content: "Bioocus — cell and gene therapy." },
      { property: "og:title", content: "Bioocus" },
      { property: "og:description", content: "Bioocus — cell and gene therapy." },
    ],
  }),
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { servePage } = await import("@/site/serve-page.server");
        return servePage(new URL(request.url).pathname);
      },
    },
  },
});
