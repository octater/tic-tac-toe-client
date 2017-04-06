#!/bin/bash

# TOKEN=BAhJIiVhY2QzN2M0YzFmYjcyNmY1YTA4NTNmOTk3OGI2MzEwOAY6BkVG--5a5ab236b823de16c033f012f41d617d181e20b2 sh scripts/index-games-over.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games?over=true"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
