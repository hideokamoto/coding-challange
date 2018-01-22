# 京都市営地下鉄烏丸線発車時刻ガイド

指定した駅での京都市営地下鉄烏丸線発車時刻を表示するwebサービスです。
現在位置から最寄駅を検索した上で表示することもできます。

![capture](https://raw.githubusercontent.com/hideokamoto/coding-challange/master/assets/img/screenshot.png)

## できること
- 駅名を指定して発車時刻を表示
- 現在位置から1km圏内にある烏丸線最寄駅を検索
- 現在位置と見つかった烏丸線最寄駅をマップ表示
- 烏丸線最寄駅が見つかった場合、その駅の発車時刻を表示

## アプリURL
https://kyoto-departure-time.netlify.com/

## Uber coding challange

- [Uber's tools team coding challenge](https://github.com/uber/coding-challenge-tools)
- [coding-challenge-tools/coding_challenge.md at master · uber/coding-challenge-tools · GitHub](https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md)

### Project Type: 1.Departure Times

> Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user.
> via [https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md#departure-times](https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md#departure-times)

## Backend

### フロントエンド
https://github.com/hideokamoto/coding-challange/tree/master/frontend

|Service / packages|Description|
|:--|:--|
|React + semantic-ui-react|view構築|
|Redux |データ処理|
|redux-saga + superagent + jquery|API通信|

### API
https://github.com/hideokamoto/coding-challange/tree/master/api

|Service / packages|Description|
|:--|:--|
|Serverless Framework|APIリソース管理|
|aws-sdk|AWSリソースへのアクセス|

### Databse
https://github.com/hideokamoto/coding-challange/tree/master/databases

|Service / packages|Description|
|:--|:--|
|Terraform|APIリソース管理|
|aws-sdk|AWSリソースへのアクセス|
|各種Node.jsライブラリ||

## 作業時間目安
- フロント：7h
- DB: 8h
- API: 5h

## Get Involved

### 1. Clone Repo

```
$ git clone git@github.com:hideokamoto/coding-challange.git
$ cd coding-challange
```

### 2. Create a topic branch

```
$ git checkout -b name/description
```

#### Branch name examples

|Name|Description|
|:--|:--|
|feature/{api / db / front}/***|new feature|
|update/{api / db / front}/***|changes or improvements|
|fix/{api / db / front}/***|correcting an issue|
|hotfix/{api / db / front}/**|resolving a fatal error|

eg.) Fix UI description's typo -> `fix/front/typo-description`

### 3. Running as local

```
$ cd frontend
$ yarn install
$ yarn start
```

## Contributing API database
Read [database document](https://github.com/hideokamoto/coding-challange/blob/master/databases/README.md).

## Contributing API
Read [api document](https://github.com/hideokamoto/coding-challange/blob/master/api/README.md).

## Tasks

- DB
 - データ更新の自動化(AWS StepFunction？)
 - Elasticsearchへの移行の検討
- API
 - インテグレーションテスト
 - 自動デプロイ
 - DAXを利用したパフォーマンス向上
 - API keyの設定によるアクセス制御
- Frontend
 - テストコードの追加
 - 自動デプロイ
 - UIの改善
 - 会員機能作成（最寄り駅登録）
 - React Native or PWAによるアプリ利用化
- そのほか
 - APIを利用してAlexa Skill化
 - UDC応募


## Licenses

### 京都市営地下鉄時刻表データ
この【作品・アプリ・データベース等】は以下の著作物を改変して利用しています。　

- 京都市営地下鉄時刻表，京都市，クリエイティブ・コモンズ・ライセンス表示4.0国際  
（http://creativecommons.org/licenses/by/4.0/deed.ja (link is external)）

### 京都市営地下鉄位置データ
- HeartRails Express API (http://express.heartrails.com/api.html(link is external))
