# ChatGPT API を利用したチャットアプリ

ChatGPT API を活用して構築されたシンプルなチャットアプリです。ユーザーがメッセージを入力すると、ChatGPT API を通じて AI からの応答を得ることができます。

## プロジェクトの目的

- **学習目的**: ChatGPT API を利用してアプリケーションを構築する方法を学ぶ。
- **実用性**: AI を使ったインタラクティブなチャット体験を提供。
- **拡張性**: 基本機能をベースに、履歴保存や UI 改善などの機能追加を可能に。

## 主な機能

1. **リアルタイムチャット**: ユーザーが入力したメッセージに応じて AI からの応答を表示。
2. **OpenAI の ChatGPT モデルを利用**: モデルとして `gpt-3.5-turbo` または `gpt-4` を利用。

---

## 環境構築

### Devcontainer の利用

このプロジェクトは、[VSCode Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) を利用して、開発環境を簡単にセットアップできます。

#### 必要な前提条件

1. Docker がインストールされていること。
2. VSCode に Devcontainer 拡張機能がインストールされていること。

#### Devcontainer の起動手順

1. プロジェクトディレクトリを VSCode で開く。
2. コマンドパレット（`Ctrl+Shift+P` または `Cmd+Shift+P`）を開き、`Remote-Containers: Reopen in Container` を選択。
3. 自動的に必要な依存関係がインストールされ、環境が起動します。

---

### フロントエンドの立ち上げ方

React を使用したフロントエンドアプリケーションを立ち上げます。

#### 手順

1. Devcontainer 内でターミナルを開く。
2. 以下のコマンドを実行して、`frontend` ディレクトリへ移動します。
   ```bash
   cd frontend
   ```
3. 依存関係をインストールします。
   ```bash
   npm install
   ```
4. 開発サーバーを起動します。
   ```bash
   npm start
   ```
5. ブラウザで http://localhost:3000 にアクセスして、アプリケーションが動作していることを確認します。

---

### サーバーサイドの立ち上げ方

Flask を使用したバックエンド API サーバーを立ち上げます。

#### 手順

1. Devcontainer 内でターミナルを開く。
2. 以下のコマンドを実行して、`backend` ディレクトリへ移動します。
   ```bash
   cd frontend
   ```
3. Flask サーバーを起動します。
   ```bash
   python3 app.py
   ```
4. サーバーが http://127.0.0.1:5000 で起動します。

---

### 注意点

- CORS エラーを防ぐため、フロントエンドではバックエンドへのリクエスト URL を http://127.0.0.1:5000 に設定してください。
- localhost を使用するとエラーになる場合があります。
