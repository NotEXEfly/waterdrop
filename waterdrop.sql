-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Авг 29 2019 г., 15:14
-- Версия сервера: 5.7.27-0ubuntu0.16.04.1
-- Версия PHP: 7.0.33-0ubuntu0.16.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `waterdrop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `secondary_info` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `date`, `secondary_info`) VALUES
(4, 'Антоний', '89092233391', '2018-04-24 17:54:10', 'Вода Королевская, 319р.'),
(5, 'Нокемм', '87676768767', '2018-04-27 18:10:15', ''),
(6, 'Lsdss', '81233212312', '2019-08-29 10:33:52', ''),
(7, 'asddasdas', '82132132132', '2019-08-29 10:34:00', ''),
(9, 'Сергей', '84444444444', '2019-08-29 10:39:24', ''),
(10, 'Евгений', '83333333333', '2019-08-29 10:39:37', 'Белый лёд, 195р.'),
(11, 'Сергей', '82222222222', '2019-08-29 10:39:51', 'Павловская вода, 275р.'),
(12, 'Дмитрий', '83333333333', '2019-08-29 10:40:03', 'Акция: 6 бутылей'),
(13, 'Ольга', '82343334343', '2019-08-29 10:40:13', 'Акция: 10 бутылей'),
(14, 'Семен', '81233122132', '2019-08-29 10:40:29', ''),
(15, 'Екатерина', '81231287321', '2019-08-29 10:40:43', 'Акция: 6 бутылей');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
