i18n-compile:
	@echo "Compiling i18n files..."
	pnpm exec formatjs compile-folder --ast --format crowdin ./lang ./lang/compiled

i18n-extract:
	@echo "Extracting i18n files..."
	pnpm exec formatjs extract 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format crowdin

dev: i18n-extract i18n-compile
	@echo "Starting development server..."
	pnpm run dev

build: i18n-extract i18n-compile
	@echo "Building production bundle..."
	pnpm run build

analyze: export ANALYZE = true
analyze: build

start: build
	@echo "Starting production server..."
	pnpm run start

format:
	@echo "Formatting code..."
	pnpm exec prettier --write --config ./prettier.config.js .

lint:
	@echo "Linting code..."
	pnpm run lint
