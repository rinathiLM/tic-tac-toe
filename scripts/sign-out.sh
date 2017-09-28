#!/bin/bash

# ID=xxx TOKEN=xxxxx sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN" \

echo
