curl --include --request POST --header "Content-Type: application/json" -d '{
  "credentials": {
    "email": "me@rachel.com",
    "password": "12345",
    "password_confirmation": "12345"
  }
}' http://ttt.wdibos.com/users


curl --request POST --header "Content-Type: application/json" -d '{
  "credentials": {
    "email": "me@rachel.com",
    "password": "12345"
  }
}' http://httpbin.org/post

curl --request POST --header "Content-Type: application/json" -d '{
  "credentials": {
    "email": "me@rachel.com",
    "password": "12345"
  }
}' http://ttt.wdibos.com/login


//check the list of games in curl
curl --header "Authorization: Token token=c017d611187e3350baffc52d35a4df69" http://ttt.wdibos.com/games



