
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  const url = new URL(request.url);
  // Only run if the `sponge` query parameter is set
  if (!url.searchParams.has("sponge")) {

    return context.next();
  }

 const location = context?.geo?.city;
  const response = await context.next();
  const rewriter = new HTMLRewriter()
  //change sponge id text
   .on("#sponge", {
      element: (element) => {
        element.setInnerContent(`Sponge for a visitor in ${location}`);
      },
    })
   //change sponge header background color
    .on("#h5[sponge]", {
      element: (element) => {
         element.setAttribute("style", "background-color: red;");
      },
         console.log(`ran return context`);
    })
    
  return rewriter.transform(response);
}

