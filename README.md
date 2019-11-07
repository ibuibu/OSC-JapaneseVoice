# OSC-JapaneseVoice

<br>

## 概要
日本語の音声をテキスト化して、OSC送信するアプリです。

OSC受信のデモアプリとして、TouchDesigner、processingのサンプルデータを置いておきました。

<br>

## 利用方法
### 必要環境
node.jsがインストールされている環境が必要です。

<br>

### 準備

下記コマンドでWebサーバを立ち上げたら、localhost:1337をブラウザ（chrome推奨）で開きます。

```shell
node server.js
```

<br>

### 利用

「音声認識をスタート」ボタンを押して、おはなしします。

おはなしの切れ目で、自動的にテキストデータがOSC送信されます。

<br>

##注意

OSCデータBASE64形式にエンコードされて送信されます。

```
例）
/voice 44GT44KT44Gr44Gh44Gv

```

そのため、受信側でデコードが処理が必要となります。

サンプルファイルのデコード処理（python、java）を参考としてください。

