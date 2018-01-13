# DB Resources
APIなどで利用するデータをここで管理する

## DynamoDB
各列車の発着時間を保存

### deploy

```
$ npm i -g serverless
$ git clone git@github.com:hideokamoto/coding-challange.git
$ cd databases
$ terraform init
$ terraform apply
```

## convert

### download data
https://data.city.kyoto.lg.jp/node/14387

### place csv file

```
$ mv {fileName}.csv ./databases/base/{LINE_NAME}-{DATE_TYPE}-{DIRECTION}.csv

## example
$ mv tn020201_text_0.csv ./databases/base/karasuma-holiday-inbound.csv
```

### run convert script

```
$ node converter.js
```

### check json file
Converted json file are in `./json` directory.

## import
Run import script.(Need AWS CLI Credentials)

```
$ node importer.js
```
