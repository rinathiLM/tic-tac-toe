#!/bin/bash

# ID=1004 OLD_PASSWORD=rina NEW_PASSWORD=rinay
# TOKEN=BAhJIiUwMzFjNjJiNWQ2M2E3ZjVjOGQzMzVhMjQwNWE5YmE1NQY6BkVG--56a9908feb957ce1e5c4805b0d15ed24951bb19a
# sh scripts/change-password.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data  '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
