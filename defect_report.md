
# Defects found
Category     | Scenario     | Expected     | Actual       
------------ | ------------ | ------------ | -------------
Account Number | Length of account number 1-17 when country is US | error: Length of account_number should be between 1 and 17 when bank_country_code is 'US' | error: Length of account_number should be between 7 and 11 when bank_country_code is 'US'
Account Number | Length of account number 6-9 when country is AU (5 char)| error: Length of account_number should be between 6 and 9 when bank_country_code is 'AU' | error: Length of account_number should be between 7 and 11 when bank_country_code is 'US'
