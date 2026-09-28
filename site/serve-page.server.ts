// Serves the original Bioocus pages exactly as they were captured.
const pages = import.meta.glob("./pages/*.html", { query: "?raw", import: "default" }) as Record<
  string,
  () => Promise<string>
>;

const html = (body: string, status = 200) =>
  new Response(body, { status, headers: { "content-type": "text/html; charset=utf-8" } });

export async function findPage(pathname: string): Promise<Response | null> {
  let key: string;
  try {
    key = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, "").replace(/\//g, "__") || "index";
  } catch {
    return null;
  }
  const loader = pages[`./pages/${key}.html`];
  return loader ? html(await loader()) : null;
}

export async function servePage(pathname: string): Promise<Response> {
  const page = await findPage(pathname);
  if (page) return page;
  const home = pages["./pages/index.html"];
  return html(home ? await home() : "Not found", 404);
}
