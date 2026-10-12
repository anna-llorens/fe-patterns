FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock ./
COPY backend/package.json backend/
COPY backend/prisma backend/prisma
COPY frontend/package.json frontend/
COPY packages/api-contracts/package.json packages/api-contracts/

RUN yarn install --frozen-lockfile

FROM deps AS build

COPY packages/api-contracts packages/api-contracts
COPY backend backend

RUN yarn workspace @fe-patterns/api-contracts build \
  && yarn workspace backend exec prisma generate \
  && yarn workspace backend build

FROM node:20-alpine AS runner
RUN apk add --no-cache openssl
WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ./
COPY backend/package.json backend/
COPY packages/api-contracts/package.json packages/api-contracts/
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/packages/api-contracts/dist ./packages/api-contracts/dist
COPY --from=build /app/backend/dist ./backend/dist
COPY --from=build /app/backend/prisma ./backend/prisma

COPY backend/docker-entrypoint.sh backend/docker-entrypoint.sh
RUN chmod +x backend/docker-entrypoint.sh

WORKDIR /app/backend
EXPOSE 3001

ENTRYPOINT ["./docker-entrypoint.sh"]
