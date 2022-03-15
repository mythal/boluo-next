i18n-compile:
	@echo "Compiling i18n files..."
	yarn run formatjs compile-folder --ast --format crowdin ./lang ./lang/compiled

i18n-extract:
	@echo "Extracting i18n files..."
	yarn run formatjs extract 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format crowdin

dev: i18n-extract i18n-compile
	@echo "Starting development server..."
	yarn run next dev

build: i18n-extract i18n-compile
	@echo "Building production bundle..."
	yarn run next build

start: build
	@echo "Starting production server..."
	yarn run next start

format:
	@echo "Formatting code..."
	yarn run prettier --write --config ./.prettierrc .

lint:
	@echo "Linting code..."
	yarn run next lint
