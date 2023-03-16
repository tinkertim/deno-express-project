FROM denoland/deno:latest as base

WORKDIR /app

COPY . ./

RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]