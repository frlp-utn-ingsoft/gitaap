# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2021-06-17

### Added

-   Agregar validación de HTML5 en el form de crear movimiento
-   Crear vista de egresos de manera análoga a la tabla de ingresos
-   Agregar campo description al modelo
-   Agregar un signo “-” delante de cada gasto y un signo “+” delante de cada ingreso de
todas las listas

## [1.1.0] - 2021-06-16

### Added

-   Alerta que indica que un movimiento se guardó exitosamente
-   Agregar endpoint en la API para permitir borrar un movimiento

### Fixed

-   Agregacion de los headers de la card de los gráficos
-   Correcion de fecha en creacion de movimientos
-   Arreglar el formato de los montos en las tablas

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/lucasantarelli18/gitapp/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/lucasantarelli18/gitapp/releases/tag/v1.2.0
[1.1.0]: https://github.com/lucasantarelli18/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/lucasantarelli18/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/lucasantarelli18/gitapp/releases/tag/v1.0.0
