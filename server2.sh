#!/bin/sh

function startups_inc () {
  echo "What's your MySQL DB user?"
  read user
  if [ $1 = "db" ]
  then 
    mysql -u $user -p --database=use startups_inc
  elif [ $1 = "dump_db" ]
  then
    mysqldump -u $user -p startups_inc > startups_inc.sql
  fi
}
