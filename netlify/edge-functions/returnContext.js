import { Config, Context } from "@netlify/edge-functions";
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";



//export default async (request, context) => 
export default async function handler(request: Request, context: Context){
  const url = new URL(request.url);
  // Only run if the `sponge` query parameter is set
  if (!url.searchParams.has("sponge")) {
    return context.next();
  }

 // const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#platter", {
      element: (element) => {
        element.setInnerContent(`bam`);
      },
    })
    
  return rewriter.transform(response);
}

