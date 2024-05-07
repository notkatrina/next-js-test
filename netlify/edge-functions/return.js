
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  const url = new URL(request.url);
  // Only run if the `cheese` query parameter is set
  if (!url.searchParams.has("cheese")) {
    return context.next();
  }

 const location = context?.geo?.city;

  const response = await context.next();
  //change cheese id text
  const rewriter = new HTMLRewriter()
   .on("#cheese", {
      element: (element) => {
        element.setInnerContent(`Cheese for a visitor in ${location}`);
      },
    })
   //change cheese header background color
    .on("h5[cheese]", {
      element: (element) => {
        element.setAttribute("style", "background-color: red !important;");
           console.log(`ran return context for ${url} `);
      },
    })
    
  return rewriter.transform(response);

}

