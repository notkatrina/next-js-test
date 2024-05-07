
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  const url = new URL(request.url);
  // Only run if the `catify` query parameter is set
  if (!url.searchParams.has("cheese")) {
    return context.next();
  }

 // const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#cheese", {
      element: (element) => {
        element.setAttribute("style", "background-color: red !important;");
      },
    })
    
  return rewriter.transform(response);
}

