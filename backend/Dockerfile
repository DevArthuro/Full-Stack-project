FROM python:3.11.4-alpine3.18

WORKDIR /home/src

RUN apk --no-cache add curl

COPY requirements.txt .

RUN python -m pip install -r requirements.txt

COPY . .
