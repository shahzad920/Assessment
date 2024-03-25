echo "🤬 Running Post Install Script"
npx --yes patch-package
npx --yes jetify
bundle install
npx --yes pod-install
echo "😱 Post Install Complete"