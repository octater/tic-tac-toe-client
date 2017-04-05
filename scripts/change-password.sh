#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#$ ID=7 OLDPW="test" NEWPW="newtest" TOKEN="BAhJIiVlZDcxMmU3NjRlN2M5NmVhM2M0YTg5MTJjZTliZTQ4OAY6BkVG--f49b71951f097c42844200af893db41be2066f85" sh scripts/change-password.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
