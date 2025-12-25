#!/bin/bash

echo "Testing Clan..."
curl -s http://localhost:3000/v1/clan/alive

echo -e "\nTesting War..."
curl -s http://localhost:3000/v1/war/alive

echo -e "\nTesting Accounts..."
curl -s http://localhost:3000/v1/accounts/alive

echo -e "\nTesting League..."
curl -s http://localhost:3000/v1/league/alive

echo -e "\nTesting COC..."
curl -s http://localhost:3000/v1/coc/alive
