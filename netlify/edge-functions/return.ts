
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

  
export default async (request, context) => {
const url = new URL(request.url);
  // Only run if the `cheese` query parameter is set
  if (!url.searchParams.has("cheese")) {
    return;
  }

 // const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#plate", {
      element: (element) => {
        element.setInnerContent("A cheese was returned for a visitor");
      },
    })
    
  return rewriter.transform(response);
}

