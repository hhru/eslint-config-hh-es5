module.exports = {
    // https://github.com/hhru/eslint-config-hh
    "extends": "hh",
    "parserOptions": {
        // Не используем ES6 модули,
        // поэтому эта настройка нужна для того чтобы корректно отрабатывало правило `strict`
        "sourceType": "script"
    },
    "rules": {
        // Используем 'use strict'
        "strict": ["error", "function"],
        // Запятую в последнем свойстве объекта не ставим
        // Из-за того, что поддерживаем IE8 - выводим ошибку
        "comma-dangle": ["error", "never"],
        // В ES5 нет "толстых стрелок"
        "prefer-arrow-callback": 0,
        // В ES5 нет const
        "prefer-const": 0,
        // В ES5 нет let
        "no-var": 0,
        // В ES5 нет ...rest
        "prefer-rest-params": 0,
        // В ES5 нет строк шаблонов
        "prefer-template": 0,
        // В ES5 нет сокращенной форме объекта
        "object-shorthand": 0,
        // Это правило продублировано из eslint-config-hh
        // Иначе IDE его игнорирует
        "func-names": 0,
        // Не выводим ошибку при переназначении аргументов функции (только предупреждение)
        // Потому что хотим использовать вот так:
        // function(options) {
        //     options = options || {};
        // }
        "no-param-reassign": ["warn"],
        // capIsNew: false, для корректного вызова синглтонов и зависимостей.
        // properties: false, для jQuery и Backbone с его $.Deferred() и new this.model();
        "new-cap": ["error", {
            "capIsNew": false,
            "properties": false
        }],
        // ** вместо Math.pow пока не поддерживается нормально, убираем его из списка, переносим правила из airbnb
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
        "no-restricted-properties": ['error', {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        }, {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        }, {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        }]
    }
};
