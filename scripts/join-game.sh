#!/bin/bash

# ID=1 TOKEN=BAhJIiUyMzI2ODFkNDc5MDllMWFmNWY3MTUxZTc4NzQ0ODgxNgY6BkVG--150025166ad4e4b405eb5072c0b27f9acfbe7dc2 sh scripts/join-game.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \

echo
