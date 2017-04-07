#!/bin/bash

# TOKEN=BAhJIiUyMzZhNDQ1NGQ2ODdjZmYzNDgyNzFhNzEzZjIxN2FhNgY6BkVG--afb800d25a8382bb4488dd3cc1bf43c28378e8ab sh scripts/index-games.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
