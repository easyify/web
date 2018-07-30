module.exports = {
    env: {
        prod: {
            NODE_ENV: '"production"',
            API: '""'
        },
        dev: {
            NODE_ENV: '"development"',
            API: '""'
        },
        alpha: {
            NODE_ENV: '"production"',
            API: '""'
        }
    },
    vendor:[
        {{#jQuery}}
        'jquery'
        {{/jQuery}}
    ],
    vue: false,
    {{#multi}}
    multi: true
    {{else}}
    multi: false
    {{/multi}}
}