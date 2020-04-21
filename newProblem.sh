#!/bin/zsh

week=${1}
problemNameWithSpaces=${@:2}

problemNameCamelCase=$(echo ${problemNameWithSpaces} | perl -nE 'say lcfirst join "", map {ucfirst lc} split /[^[:alnum:]]+/')

workdir=${week}/${problemNameWithSpaces}
echo "Creating problem ${problemNameWithSpaces} in ${workdir}, problemName: ${problemNameCamelCase}";
mkdir -p "${workdir}"

# shellcheck disable=SC2154
javascriptFile="$workdir/$problemNameCamelCase.js"
testFile="$workdir/$problemNameCamelCase.test.js"
echo "Creating files: ${javascriptFile}"
echo "Creating files: ${testFile}"
touch $javascriptFile
touch $testFile

echo "const test = require('ava');" > ${testFile};
