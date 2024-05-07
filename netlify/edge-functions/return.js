
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

  const url = new URL(request.url);
export default async (request, context) => {

  // Only run if the `cheese` query parameter is set
  if (!url.searchParams.has("cheese")) {
    return;
  }

 // const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#platter", {
      element: (element) => {
        element.setInnerContent("A cheese was returned for a visitor");
      },
    })
    
  return rewriter.transform(response);
}

