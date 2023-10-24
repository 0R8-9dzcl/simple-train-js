/**
 * Задача: Генерировать команду сборки Docker образа для practicum.
 *
 * @param {string} language - Язык программирования.
 * @param {string} version - Версия языка.
 * @param {string} path - Путь к Dockerfile (может быть пустой строкой).
 * @returns {string} - Сгенерированная команда сборки Docker образа.
 *
 * Примеры:
 * solution("clojure", "1.1.2:slim", "");                            // Должно вернуть "docker build -t practicum/clojure:1.1.2:slim ."
 * solution("ruby", "3.0.2:latest", "");                              // Должно вернуть "docker build -t practicum/ruby:3.0.2:latest ."
 * solution("elixir", "1.12.2:alpine", "./Some/Dockerfile");          // Должно вернуть "docker build -t practicum/elixir:1.12.2:alpine -f ./Some/Dockerfile ."
 */

const solution = (language = '', version = '', path = '') => {
  return '';
};

module.exports = solution;
