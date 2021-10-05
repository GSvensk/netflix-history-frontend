# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm ci

# No idea why package- 
RUN npm install -g @angular/cli@7.0.6
# Generate the build of the application
RUN ng build --prod
# Prune dev dependencies
RUN npm prune --production
#
#
## Stage 2: Serve app with nginx server
#
## Use official nginx image as the base image
FROM nginx:latest
#
## Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/netflix-activity /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "sed -i 's/listen  .*/listen 443;/g' /etc/nginx/conf.d/default.conf && envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]