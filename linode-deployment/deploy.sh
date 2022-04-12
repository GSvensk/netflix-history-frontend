#!/bin/bash
set -e

HOST=${DEPLOY_USER:?"Deployment user is required"}@${SERVER:?"Server is required"}
DEPLOYMENT_DIR=/usr/share/www/html

ssh "$HOST" "mkdir -p $DEPLOYMENT_DIR"
scp dist/netflix-activity/* $HOST:$DEPLOYMENT_DIR
scp nginx.conf $HOST:/etc/nginx/conf.d/default.conf

ssh "$HOST" "sudo systemctl daemon-reload && sudo systemctl reload nginx"
