#!/bin/bash

# TOKEN=BAhJIiUzMThmOWNkNjliYTliMDFhMzliZmI0OWVjN2FhY2VhZQY6BkVG--2773087861107c33cfc2a0521cf155e770c13788 sh scripts/index-games-over.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games?over=true"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
