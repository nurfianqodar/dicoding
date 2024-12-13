#! /bin/bash

read -p "Insert version (ex. 1.0.1): " VERSION

TAG="asia-southeast2-docker.pkg.dev/submissionmlgc-nurfianqodar/submission-mgcl-repo/backend:$VERSION"


echo "build image $TAG"

docker build -t $TAG . 
