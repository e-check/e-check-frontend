FROM node:6-slim
MAINTAINER Easy Check-in Team <admin@chatops.in>

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
  && apt-get install -y nginx \
	&& rm -rf /var/lib/apt/lists/*

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH /root/.yarn/bin:$PATH

WORKDIR /app

COPY package.json .
RUN yarn install
VOLUME /app/node_modules

COPY . .

RUN perl -pi -e 's#\s+=404;# /index.html;#g' /etc/nginx/sites-enabled/default

CMD ["/app/entrypoint"]