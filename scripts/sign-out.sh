#!/bin/bash

# ID=7 TOKEN="BAhJIiUyNTQxZGYwYTlkZTQxODQ5ODkxZGNlYTA1MTIzZDkxMgY6BkVG--8bdc797d26b4dc53adf69b993981a388eb54a147" sh scripts/sign-out.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"

echo
