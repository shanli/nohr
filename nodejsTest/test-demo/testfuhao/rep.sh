#!/bin/sh

sed --in-place 's/┏/<table border=1 cellspacing=0 bordercolorlight=#333333 bordercolordark=#efefef><tr bgcolor=#cccccc>/g' index.html
sed --in-place 's/━//g' index.html
sed --in-place 's/┳//g' index.html
sed --in-place 's/┓//g' index.html
sed --in-place 's/╋//g' index.html
sed --in-place 's/┫//g' index.html
sed --in-place 's/┻//g' index.html
sed --in-place 's/┛//g' index.html
sed --in-place 's///g' index.html
sed --in-place 's/\[36m//g' index.html
sed --in-place 's/\[39m//g' index.html
sed --in-place 's/┣/<\/tr><tr bgcolor=#cccccc>/g' index.html
sed --in-place 's/┗/<\/tr><\/table>/g' index.html
sed --in-place 's/^[\t]*[┃]/<td width="100">/g' index.html
sed --in-place 's/[┃][\t]*$/<\/td>/g' index.html
sed --in-place 's/┃/<\/td><td width="100">/g' index.html
sed --in-place '1 i\\<html><title>TestResults<\/title><body>' index.html
sed --in-place 's/[[:space:]][[:space:]]*/ /g' index.html
sed -i --in-place '$a\<\/body><\/html>' index.html
