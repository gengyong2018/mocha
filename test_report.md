```shell
$ mocha -t 5000  chai_post.js > test_report.md 2>&1

  Site is up
    ✓ should be there (795ms)

  POSITIVE cases
    ✓ correct form SWIFT (1022ms)
    ✓ correct form LOCAL (602ms)

  PAYMENT METHOD negative cases
    ✓ payment method missing (591ms)
    ✓ payment method wrong (717ms)

  BANK COUNTRY CODE negative cases
    ✓ missing country code (594ms)
    ✓ wrong country code (569ms)

  ACCOUNT NAME negative cases
    ✓ missing account name (680ms)
    ✓ account name length beyond 2-10 (length == 11) (739ms)
    ✓ account name length beyond 2-10 (length == 1) (620ms)

  ACCOUNT NUMBER negative cases
    ✓ missing account number (705ms)
    1) Length of account number 1-17 when country is US
    2) Length of account number 6-9 when country is AU (5 char)
    3) Length of account number 6-9 when country is AU (10 char)
    4) Length of account number 8-20 when country is CN (7 char)
    5) Length of account number 8-20 when country is CN (21 char)

  SWIFT CODE negative cases
    ✓ swift code missing when payment method is SWIFT (717ms)
    ✓ swift code wrong for the given bank country code (818ms)
    6) swift code should be either 8 or 11 characters (10 char)
    ✓ swift code should be either 8 or 11 characters (12 char) (742ms)

  BSB negative cases
    ✓ mandatory when bank country is AU (667ms)
    ✓ 6 characters (5 char) (612ms)
    ✓ 6 characters (7 char) (614ms)

  ABA negative cases
    7) mandatory when bank country is US
    ✓ 9 characters (10 char) (909ms)


  18 passing (18s)
  7 failing

  1) ACCOUNT NUMBER negative cases
       Length of account number 1-17 when country is US:

      Uncaught AssertionError: expected 'Length of account_number should be between 7 and 11 when bank_country_code is \'US\'' to equal 'Length of account_number should be between 1 and 17 when bank_country_code is \'US\''
      + expected - actual

      -Length of account_number should be between 7 and 11 when bank_country_code is 'US'
      +Length of account_number should be between 1 and 17 when bank_country_code is 'US'
      
      at /home/yongg/git-hub/mocha/chai_post.js:241:28
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  2) ACCOUNT NUMBER negative cases
       Length of account number 6-9 when country is AU (5 char):

      Uncaught AssertionError: expected 'Length of account_number should be between 7 and 11 when bank_country_code is \'US\'' to equal 'Length of account_number should be between 6 and 9 when bank_country_code is \'AU\''
      + expected - actual

      -Length of account_number should be between 7 and 11 when bank_country_code is 'US'
      +Length of account_number should be between 6 and 9 when bank_country_code is 'AU'
      
      at /home/yongg/git-hub/mocha/chai_post.js:261:28
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  3) ACCOUNT NUMBER negative cases
       Length of account number 6-9 when country is AU (10 char):

      Uncaught AssertionError: expected 'Length of account_number should be between 7 and 11 when bank_country_code is \'US\'' to equal 'Length of account_number should be between 6 and 9 when bank_country_code is \'AU\''
      + expected - actual

      -Length of account_number should be between 7 and 11 when bank_country_code is 'US'
      +Length of account_number should be between 6 and 9 when bank_country_code is 'AU'
      
      at /home/yongg/git-hub/mocha/chai_post.js:282:28
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  4) ACCOUNT NUMBER negative cases
       Length of account number 8-20 when country is CN (7 char):

      Uncaught AssertionError: expected { Object (domain, _events, ...) } to have status code 400 but got 200
      + expected - actual

      -200
      +400
      
      at /home/yongg/git-hub/mocha/chai_post.js:300:25
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  5) ACCOUNT NUMBER negative cases
       Length of account number 8-20 when country is CN (21 char):

      Uncaught AssertionError: expected 'Length of account_number should be between 7 and 11 when bank_country_code is \'US\'' to equal 'Length of account_number should be between 8 and 20 when bank_country_code is \'CN\''
      + expected - actual

      -Length of account_number should be between 7 and 11 when bank_country_code is 'US'
      +Length of account_number should be between 8 and 20 when bank_country_code is 'CN'
      
      at /home/yongg/git-hub/mocha/chai_post.js:322:28
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  6) SWIFT CODE negative cases
       swift code should be either 8 or 11 characters (10 char):

      Uncaught AssertionError: expected { Object (domain, _events, ...) } to have status code 400 but got 200
      + expected - actual

      -200
      +400
      
      at /home/yongg/git-hub/mocha/chai_post.js:381:25
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

  7) ABA negative cases
       mandatory when bank country is US:

      Uncaught AssertionError: expected { Object (domain, _events, ...) } to have status code 400 but got 200
      + expected - actual

      -200
      +400
      
      at /home/yongg/git-hub/mocha/chai_post.js:484:25
      at Test.Request.callback (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:716:12)
      at parser (/home/yongg/airwallex/test/node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (/home/yongg/airwallex/test/node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1064:12)
      at _combinedTickCallback (internal/process/next_tick.js:138:11)
      at process._tickCallback (internal/process/next_tick.js:180:9)

```
