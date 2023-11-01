Deno.serve((_: Request) => {
  return Response.redirect("https://docs.denohub.com", 301);
});
