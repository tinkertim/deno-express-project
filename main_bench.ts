const stagingUrl = Deno.env.get("STAGING_URL") || "http://localhost:3000/";

Deno.bench(function requestUser() {
    new URL(`${stagingUrl}/users/2`);
});

Deno.bench(function requestAllUsers() {
    new URL(`${stagingUrl}/users`);
});