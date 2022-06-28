i18n-compile:
	@echo "Compiling i18n files..."
	yarn run formatjs compile-folder --ast --format crowdin ./lang ./lang/compiled

i18n-extract:
	@echo "Extracting i18n files..."
	yarn run formatjs extract 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format crowdin

dev: i18n-extract i18n-compile
	@echo "Starting development server..."
	yarn dev

build: i18n-extract i18n-compile
	@echo "Building production bundle..."
	yarn build

analyze: export ANALYZE = true
analyze: build

start: build
	@echo "Starting production server..."
	yarn start

format:
	@echo "Formatting code..."
	yarn run prettier --write --config ./prettier.config.js .

lint:
	@echo "Linting code..."
	yarn lint
