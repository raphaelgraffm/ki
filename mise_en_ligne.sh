#!/bin/bash 
./lessify.sh

# Envoie sur GitHub
git add *
git commit
git pull
git push

# Recuperation sur le serveur
ssh root@vps293012.ovh.net