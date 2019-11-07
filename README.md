# OSC-JapaneseVoice

日本語の音声をテキスト化して、OSC送信するアプリです。

OSC受信のデモアプリとして、TouchDesignerのサンプルもあります。

## 利用方法
- 必要環境：node.jsがインストールされている環境が必要です。

まず、

```shell
node server.js
```

で、Webサーバを立ち上げたら、localhost:1337をブラウザ（chrome推奨）で開きます。

「音声認識をスタート」ボタンを押して、おはなしします。

おはなしの切れ目で、自動的にテキストデータがOSC送信されます。
