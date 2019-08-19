# API Test 

### Steps To test this API on your local machine

*  Clone this repo 

* navigate to the directory on your local machine and run `npm install` command to install all dependencies.


* run `npm start` command

* To use the /validate endpoint (Endpont expects atleast 5 attributes firstNme,lastName,country,Age,email)
  - using curl
    -  `curl -X POST --header "Content-Type:application/Json" -d '{"firstName":"Sam","lastName":"Oluwatomi","email":"sam@gmail.com","country":"Nigeria"}' https://nattertest.herokuapp.com/validation`

    -  Notice the Age attribute is missing here so the response returns invalid with a list of missing expected attribute
    
* To use the /delete endpoint (if email attribute is present,it will be removed else an 'attribute not found' response is returned)
  - using curl
    `curl -X POST --header "Content-Type:application/Json" -d '{"firstName":"Sam","lastName":"Oluwatomi","email":"sam@gmail.com","country":"Nigeria"}' https://nattertest.herokuapp.com/delete`   

### API DOCumentation
can be found in [https://documenter.getpostman.com/view/1711361/SVfGzCRV](https://documenter.getpostman.com/view/1711361/SVfGzCRV) 
