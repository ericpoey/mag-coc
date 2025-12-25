#!/bin/bash

BASE_URL="https://coc-sit.magicality.xyz/v1"

echo "Testing Clan..."
curl -s $BASE_URL/clan/alive

echo -e "\nTesting War..."
curl -s $BASE_URL/war/alive

echo -e "\nTesting Accounts..."
curl -s $BASE_URL/accounts/alive

echo -e "\nTesting League..."
curl -s $BASE_URL/league/alive

echo -e "\nTesting COC..."
curl -s $BASE_URL/coc/alive
