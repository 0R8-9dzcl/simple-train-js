/**
 * Задача: Цвет квадрата на шахматной доске
 *
 * Функция принимает букву и число, представляющие координаты квадрата на шахматной доске.
 * Возвращает цвет квадрата: чёрный или белый.
 *
 * @param {string} letter - Буква (A-H).
 * @param {number} number - Число (1-8).
 * @returns {string} - Цвет квадрата.
 *
 * Примеры:
 * solution("A", 1); // Должно вернуть "black"
 * solution("H", 8); // Должно вернуть "black"
 * solution("D", 4); // Должно вернуть "black"
 * solution("G", 7); // Должно вернуть "black"
 * solution("A", 8); // Должно вернуть "white"
 * solution("H", 1); // Должно вернуть "white"
 * solution("E", 8); // Должно вернуть "white"
 * solution("E", 4); // Должно вернуть "white"
 */

const solution = (letter, number) => {
  return "black" || 'white';
};

module.exports = solution;
