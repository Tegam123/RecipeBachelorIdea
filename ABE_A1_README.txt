ABE Assignment1: Victor, David og Lasse

Swagger link: https://aqueous-spire-50292.herokuapp.com/docs

Vi har implementeret vores eget system RECIPE.



Brugere af systemet:

- En Admin	- kan promote users til managers.
- En Manager	- kan oprette kategorier af madretter.
- En User	- kan tilføje retter til de forskellige madkategorier.


For at bruge nogle af endpoints skal der logges ind, dette gøres øverst højre hjørne i Swagger
med en jwt-token, som man får når man logger ind eller registrerer sig.

NOTE:
Hvis en bruger skal promotes fra user til manager, gøres dette vha. en users id, dette id
kan fåes ved getAll endpoint.

Bemærk også at når kaldene køres på heroku skal der bruges den rigtige server 
som kan konfigureres inde på swagger siden 

Bruger du kan logge ind med: 

{
  "username": "Poul",
  "password": "Poul"
}

Du kan også blot bare registrere med en ny bruger 