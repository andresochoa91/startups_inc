#!/bin/sh
yarn install
mkdir dist

echo "What's your MySQL DB user?"
read user

mysqladmin -u $user -p create startups_inc
mysql -u $user startups_inc < startups_inc.sql