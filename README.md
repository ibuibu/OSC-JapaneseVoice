# OSC-JapaneseVoice

日本語の音声をテキスト化して、OSC送信するアプリです。

OSC受信のデモアプリとして、TouchDesignerのサンプルもあります。

## 利用方法
node.jsがインストールされている環境が必要です。

```shell
node server.js
```

で、Webサーバを立ち上げたら、localhost:1337をブラウザで開きます。

「音声認識をスタート」ボタンを押して、おはなしします。

おはなしの切れ目で、自動でテキストデータがOSC送信されます。