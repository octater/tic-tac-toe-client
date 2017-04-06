#!/bin/bash

# ID=1 TOKEN=BAhJIiUyODdlZDE0ZjQ0ZDc5NTk4MGU3ZTM0OWM4NzUwNGUxOQY6BkVG--113e10d489fc41194e6497ce43d9d2c4f5c1b2db sh scripts/show-games.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
