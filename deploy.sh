#!/usr/bin/envsh
# abort on errorsset -e
# buildyarn run build
# navigate into the build output directorycd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:iammuttaqi/vue3.git master:gh-pages
cd -