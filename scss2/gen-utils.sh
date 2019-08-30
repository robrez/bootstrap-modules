#!/bin/bash
temp=.genutil.temp
grep "utils:" _utilities.scss | sed "s/:.*//g" | sed "s/^.*\\$//g" > $temp

header="@import \"./utilities\";"
footer="@import \"../node_modules/bootstrap/scss/utilities/api\";"

for util in `cat $temp`
do

  base=`echo $util | sed 's/.utils//g'`
  f1=${base}.scss
  f2=${base}-responsive.scss

  echo $header > $f1
  echo "\$utilities: no-media(\$${util});" >> $f1
  echo $footer >> $f1

  echo $header > $f2
  echo "\$utilities: \$${util};" >> $f2
  echo $footer >> $f2

done
rm $temp
