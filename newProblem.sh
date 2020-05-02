#!/bin/zsh

readQ () {
  echo "$1"
  read -r "$2"
}

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
touch "$javascriptFile"
touch "$testFile"

readQ "Do you want to create a test? [Y/n]" createTest

if [ "$createTest" == "" ] || [ "$createTest" == 'Y' ] || [ "$createTest" == 'y' ]; then
  readQ "Give me the input:" input
  readQ "Give me the expected output" output
  sed 's/::input::/'${input}'/gm' < test_template.templ | sed 's/::output::/'${output}'/gm' | sed 's/::name::/'${problemNameCamelCase}'/gm' > "${testFile}"
fi
