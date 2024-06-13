# Security

## Authentication vs Authorization

### Authentication

Authentication is the process of verifying who a particular user is. \
Usually, we will authenticate with username and password, but there can be more, such as: additional security questions, facial recognition, fingerprints..., just being able to know **WHO** somebody is.

### Authorization

Authorization is verifying what a specific user has access to. \
Generally, we authorize after a user has been **authenticated**. Something like: "Now we know who you are, here is what you are allowed to do and **NOT ALLOWED TO DO**.

## Salting passwords

- Salting helps add randomness to passwords.

- Prevent reverse lookup tables (hackers create reverse lookup tables by identifying the hashing function that one uses, then use that to output tons of common passwords (i.e., encrypted passwords)). \
  Now, the hacker has something like a massive encyclopedia, and it might take a while to look up for your original password.

## Tokens
