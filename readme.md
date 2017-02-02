# eslint конфиги HH.ru - ES5 (DEPRECATED)

Репозиторий, содержит файлы конфигурации для eslint.

!!! - DEPRECATED, используйте [`eslint-config-hh`](https://github.com/hhru/eslint-config-hh), с `"extends": "hh/legacy"`

## Установка конфигов

Проекты hh.ru подтягивают этот репозиторий по зависимости после запуска `npm install`

Достаточно, чтобы в проекте был файл `.eslintrc`:

```json
{
    "extends": "hh-es5"
}
```

Если необходимы стили для ES6, то их можно взять из основного репозитория [`eslint-config-hh`](https://github.com/hhru/eslint-config-hh).

Эти конфиги базируются на [`eslint-config-hh`](https://github.com/hhru/eslint-config-hh). Поэтому для подключения их в ваш в проект нужно также подключить все зависимости родительского репозитория.

## История изменений

### 1.6.0

* Прописали `env` свойство

### 1.5.0

* Отключаем `prefer-spread`, в es5 нет spread оператора.

### 1.4.0

* Выставляем `new-cap.properties:false` для jQuery и Backbone с его $.Deferred() и new this.model().

### 1.3.0

* Отключаем `no-restricted-properties` касаемо Math.pow, так как оператор ** пока не поддерживается нормально.

### 1.2.0

* Используем  "new-cap": ["error", { "capIsNew": false }] для корректного вызова Singleton

### 1.0.0

* Первичный релиз
