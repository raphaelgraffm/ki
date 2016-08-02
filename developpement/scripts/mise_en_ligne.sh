#!/bin/bash 
developpement/scripts/process.sh

# Envoie sur GitHub
git add *
git commit
git pull
git push

# Ouverture du serveur
ssh root@vps293012.ovh.net