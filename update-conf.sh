#!/bin/bash
sed -i.bak 's,https://dev.flyve.org/glpi,https://demo-api.flyve.org,g' $1
cp $1 build/static/js
mv $1.bk $1
