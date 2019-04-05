FROM nodesource/nsolid:dubnium-latest

MAINTAINER Snyk Ltd

ENV NODE_ENV production

RUN mkdir -p /srv/app
WORKDIR /srv/app

RUN useradd --home-dir /srv/app -s /bin/bash snyk
RUN chown -R snyk:snyk /srv/app
USER snyk

COPY --chown=snyk:snyk package.json package-lock.json ./

RUN npm ci

COPY --chown=snyk:snyk . .

EXPOSE 3000
CMD ["bin/start"]
