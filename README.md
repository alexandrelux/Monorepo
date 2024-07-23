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
```

Create Package Directories
```console
mkdir -p packages/
```
