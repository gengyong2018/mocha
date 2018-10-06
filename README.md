# mocha
Testing script using mocha
* **chai_post.js**: the test script
* **defect_report.md**: defect reporting
* **test_report.md**: sample output by running the test

## How to setup ?
```shell
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo npm install -g mocha
$ sudo npm install chai
$ sudo npm install chai-http
```

## How to run ?
```
$ mocha -t 5000 chai_post.js # 5 second timeout
$ mocha -t 5000 -g SWIFT chai_post.js # run SWIFT related cases only

```

## Example output
```shell
  Site is up
    ✓ should be there (744ms)

  POSITIVE cases
    ✓ correct form SWIFT (813ms)
    ✓ correct form LOCAL (713ms)

  PAYMENT METHOD negative cases
    ✓ payment method missing (755ms)
    ✓ payment method wrong (677ms)

  BANK COUNTRY CODE negative cases
    ✓ wrong country code (716ms)
    ✓ missing country code (821ms)
```
