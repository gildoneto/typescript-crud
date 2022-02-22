## TypeScript CRUD

yarn init -y
yarn add typescript -D
yarn add express
yarn tsc --init


no tsconfig.json:
"compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "baseUrl": "./src",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }

yarn add eslint -D
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
