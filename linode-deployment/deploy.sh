#!/bin/bash
set -e

HOST=${DEPLOY_USER:?"Deployment user is required"}@${SERVER:?"Server is required"}
DEPLOYMENT_DIR=/usr/share/www/html

ls
ls dist/netflix-activity
ls dist/netflix-activity/netflix-activity

ssh "$HOST" "mkdir -p $DEPLOYMENT_DIR"
scp -r dist/netflix-activity/ $HOST:$DEPLOYMENT_DIR
scp nginx.conf $HOST:/etc/nginx/conf.d/default.conf

ssh "$HOST" "sudo systemctl daemon-reload && sudo systemctl reload nginx"
