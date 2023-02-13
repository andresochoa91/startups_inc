#!/bin/sh

STARTUPS_INC='
startups_inc () { 
  if [ $1 = "db" ]
  then
    echo "What is your MySQL DB user?"
    read user
    mysql -u $user -p --database=use startups_inc
  elif [ $1 = "dump_db" ]
  then
    echo "What is your MySQL DB user?"
    read user
    mysqldump -u $user -p startups_inc > startups_inc.sql
  fi
}'

if grep "startups_inc () {" ~/.zshrc; then 
  echo "Exists" 
else 
  echo "Does not exist"
  echo -e $STARTUPS_INC >> ~/.zshrc;
fi

source ~/.zshrc;
