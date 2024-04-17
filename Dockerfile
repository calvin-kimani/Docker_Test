# Stage 1 - Build react app
FROM node:14 AS build
WORKDIR /app
COPY react/package*.json ./
RUN npm install
COPY react/ ./
RUN npm run build

# Stage 2 - Install PHP and Laravel dependencies
FROM php:7.4-fpm AS php
WORKDIR /var/www/html
RUN apt-get update && \
    apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo_mysql zip
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY backend/. .
RUN composer install --no-interaction --no-dev --prefer-dist
RUN php artisan key:generate

# Stage 3 - Serve react app and Laravel backend with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=php /var/www/html /var/www/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
