# Stage 1: Build the React app (Updated to Node 22)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
