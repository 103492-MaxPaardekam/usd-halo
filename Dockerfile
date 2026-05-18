FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM deps AS build
WORKDIR /app
COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV API_PORT=8787
ENV API_HOST=0.0.0.0
ENV API_SERVE_STATIC=true
ENV WAITLIST_STORAGE_PATH=/app/data/waitlist.json

COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server

EXPOSE 8787
CMD ["node", "server/index.js"]
