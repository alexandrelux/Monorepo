# Monorepo

Initialize the Monorepo
```console
    npm init -y
```

Configure Yarn Workspaces in package.json file
```package.json
    (...)
    "private": true,
    "workspaces": [
        "packages/*"
    ]
    (...)
    "scripts": {
        "mobile": "npm run start --workspace=mobile",
        "web": "npm run dev --workspace=web",
        "desktop": "npm run start --workspace=desktop"
    }
```

Create Package Directories
```console
mkdir -p packages/
```
