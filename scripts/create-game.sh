#!/bin/bash

# TOKEN="BAhJIiVhMGY5NzJkMTNjMjc2Yjc2YjQyZGE3YmU0M2ExZTEzNwY6BkVG--cc9b8b6c46f6a6423f4cde70cdb36c68f80c4e66" sh scripts/create-game.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN"

echo
