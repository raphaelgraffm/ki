#!/bin/bash 
./lessify.sh

# Envoie sur GitHub
git add *
git commit
git pull
git push