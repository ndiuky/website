FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/

RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

FROM base AS release
RUN adduser --system --uid 1001 nextjs

COPY --from=prerelease /usr/src/app/public ./public

RUN mkdir .next
RUN chown nextjs:bun .next

COPY --from=prerelease --chown=nextjs:bun /usr/src/app/.next/standalone ./
COPY --from=prerelease --chown=nextjs:bun /usr/src/app/.next/static ./.next/static

USER nextjs

EXPOSE 3000/tcp

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["bun", "server.js"]