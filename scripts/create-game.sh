#!/bin/bash

# TOKEN="BAhJIiU5M2FhNzYwNmEyZmIyMzIzMmZkMGRjMGY3NWRkMzY4MAY6BkVG--ab336a992725da00067365f50f5f731e5ac61987" sh scripts/create-game.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN"

echo
