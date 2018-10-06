
# Defects found
Category     | Scenario     | Expected     | Actual
------------ | ------------ | ------------ | -------------
Account Number | Length of account number 1-17 when country is US | error: "Length of account_number should be between 1 and 17 when bank_country_code is 'US'" | error: "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
Account Number | Length of account number 6-9 when country is AU (5 char) | error: "Length of account_number should be between 6 and 9 when bank_country_code is 'AU'" | error: "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
Account Number | Length of account number 6-9 when country is AU (10 char) | error: "Length of account_number should be between 6 and 9 when bank_country_code is 'AU'" | error: "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
Account Number | Length of account number 8-20 when country is CN (7 char) | status: 400 | status: 200
Account Number | Length of account number 8-20 when country is CN (21 char) | error: "Length of account_number should be between 8 and 20 when bank_country_code is 'CN'" | error: "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
SWIFT CODE     | swift code should be either 8 or 11 characters (10 char) | status: 400 | status: 200
ABA            | mandatory when bank country is US | status: 400 | status: 200
