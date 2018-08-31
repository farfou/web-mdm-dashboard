#!/bin/bash
sed -i.bak 's,your_URL,https://demo-api.flyve.org,g' $1
cp $1 build/ 
mv $1.bak $1
