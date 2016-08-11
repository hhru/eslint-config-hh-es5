module.exports = {
    // https://github.com/hhru/eslint-config-hh
    "extends": "hh",
    "parserOptions": {
        // Не используем ES6 модули,
        // поэтому эта настройка нужна для того чтобы корректно отрабатывало правило `strict`
        "sourceType": "script"
    },
    "rules": {
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
        "no-param-reassign": ["warn"]
    }
};
