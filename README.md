
# api-url-switch #

Angular - Switch API_URL 

This npm module helps to switch API_URL in compiled source. After prod build this module help to switch api_url an 

## Installation

$ npm install -g api-url-switch 

## Run

### Process 1 - terminal 
    $ api-url-switch url1 url2

### Process 2 - via JSON file

 1. Create new file named as 'api_url_config.json'
 2. api_url_config.json - file name
 
   Type 1 - Multiple environemnt 
   ```
     {
     "dev": {
         "src_api": "url1",
         "desc_api": "desc-url1"
     },
     "qa": {
        "src_api": "url2",
        "desc_api": "desc-url2"
     } 
    }
    
   ```
    dev : api-url-switch dev 
    qa: api-url-switch qa 
    
   Type 2 - Single environment 
   ```
     {
       "src_api": "url",
       "desc_api": "desc-url"
     }
   
    
    api-url-switch 
  
     

