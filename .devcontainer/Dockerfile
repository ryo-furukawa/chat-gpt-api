# ベースイメージ（Node.js 22）
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Pythonをインストール
RUN apt-get update && apt-get install -y \
    python3 python3-pip python3-venv

# Pythonとpipのバージョン確認
RUN python3 --version && pip3 --version

# Flaskと追加パッケージをインストール
RUN pip3 install flask flask-cors openai