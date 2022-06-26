# boluo

A chat tool made for play RPG.

This is next version of [boluo](https://github.com/mythal/boluo), which is still under development.

see also the [server backend](https://github.com/mythal/boluo-server).

## Start development server

```
yarn install
make dev
```

## Configure editors

### VSCode

Install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), then make

```json
"files.associations": {
    "*.tailwind.css": "tailwindcss"
},
"tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "'([^']*)'"],
]
```

In your vscode configuration file.
