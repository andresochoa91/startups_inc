#!/bin/sh

function startups_inc () { 
  if [ $1 = "db" ]
  then
    echo "What's your MySQL DB user?"
    read user
    mysql -u $user -p --database=use startups_inc
  elif [ $1 = "dump_db" ]
  then
    echo "What's your MySQL DB user?"
    read user
    mysqldump -u $user -p startups_inc > startups_inc.sql
  fi
}
