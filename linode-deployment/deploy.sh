#!/bin/bash
set -e

HOST=${DEPLOY_USER:?"Deployment user is required"}@${SERVER:?"Server is required"}
DEPLOYMENT_NAME=app_$(date +%Y%m%d_%H%M%S)
DEPLOYMENT_DIR=/opt/mynetflixhistory/frontend/$DEPLOYMENT_NAME

ssh "$HOST" "mkdir -p $DEPLOYMENT_DIR"
scp dist/netflix-activity $HOST:/usr/share/www/html
scp nginx.conf $HOST:/etc/nginx/conf.d/default.conf

ssh "$HOST" "sudo systemctl daemon-reload && sudo systemctl reload nginx"
