#!/bin/bash

# sh scripts/sign-up.sh
# EMAIL="rinay" PASSWORD="rina" sh scripts/sign-up.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password-confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
