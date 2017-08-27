# A better way to inject environmental variables in Angular

## How to run

Simply run `node index` to run node server. This will also generate angular configuration file and place it in client folder.
Configuration file is angular constant service with key value pairs for certain node env variables.
Process of injecting these values is done by gulp command: `config`.

Reference: https://medium.com/@kudresov/a-better-way-to-inject-environmental-variables-in-angular-d3b2d01a3c5e

## gulp config

`gulp config` takes _config.json_ as default config and generates angular constant service.
It will inject all the configs from _config.json_.
If you want to override some of the value from the config or add new ones, add them to enviromental variables and
`constants` in `configureSetup` (gulpfile.js).
