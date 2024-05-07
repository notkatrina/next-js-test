
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  const url = new URL(request.url);
  // Only run if the `catify` query parameter is set
  if (!url.searchParams.has("sponge")) {
    return context.next();
  }

 // const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#platter", {
      element: (element) => {
        element.setInnerContent("A sponge was requested for context");
      },
    })
    
  return rewriter.transform(response);
}

export const config = {
    path: "/*",
    excludedPath: ["/robots.txt", "/__webpack_hmr", "/manifest.webmanifest", "/*.js", "/*.css", "/page-data/*"],
    onError: "bypass",
};
