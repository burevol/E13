# E13.7 Практическая работа

## Запуск webpack-dev-server
``` npx webpack serve ```

или

``` npm run serve ```

## Сборка проекта

1. Development
   
``` npm run build:dev ```
В этом режиме включен Hot Module Replacement и отключены опимизаторы кода


2. Production

``` npm run build:prod ```

В этом режиме отключен Hot Module Replacement и включены опимизаторы кода

## Запуск JSON-server

``` json-server --watch database.json ```