#!/bin/bash

# ID=1 TOKEN=BAhJIiU5M2FhNzYwNmEyZmIyMzIzMmZkMGRjMGY3NWRkMzY4MAY6BkVG--ab336a992725da00067365f50f5f731e5ac61987 INDEX=1 VALUE=X OVER=false sh scripts/update-game.sh

API="${API_ORIGIN:-http://localhost:4741}"
    URL_PATH="/games/$ID"
    curl "${API}${URL_PATH}" \
      --include \
      --request PATCH \
      --header "Authorization: Token token=$TOKEN" \
      --header "Content-Type: application/json" \
      --data '{
        "game": {
          "cell": {
            "index": "'"${INDEX}"'",
            "value": "'"${VALUE}"'"
          },
          "over": "'"${OVER}"'"
        }
      }'
# data output from curl doesn't have a trailing newline
echo
