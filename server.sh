#!/bin/sh
yarn install

echo "What's your mysql db user id?"
read user

mysqladmin -u $user -p create startups_inc
mysql -u $user startups_inc < startups_inc.sql