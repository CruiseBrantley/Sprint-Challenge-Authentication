<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware are functions that you can execute before paths and allow things like authentication.
    Sessions allow you to store authentication on the server for a set period or until server restart.
    bcrypt is a hashing algorithm that includes ways to hash or compare hashes against each other
    JWT are JSON Web Tokens which are stored client-side and allow authentication as long as they're valid and haven't timed out. Similar to cookies.
2.  What does bcrypt do in order to prevent attacks?
    Easier to answer in what it doesn't do which is store any of the original data, it's simply a hash of the original which should be identical to a hash of the object you're comparing against algorithmically.
3.  What are the three parts of the JSON Web Token?
    Header, payload, and signature.
