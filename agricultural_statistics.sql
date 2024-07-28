/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : agricultural_statistics

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 29/07/2024 00:07:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for agricultural_production_mechanization_2
-- ----------------------------
DROP TABLE IF EXISTS `agricultural_production_mechanization_2`;
CREATE TABLE `agricultural_production_mechanization_2`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `effective_irrigation_area` double NULL DEFAULT NULL COMMENT '有效灌溉面积(千公顷)',
  `Flood_Drought_area` double NULL DEFAULT NULL COMMENT '旱涝保收面积(千公顷)',
  `pumped_irrigation_area` double NULL DEFAULT NULL COMMENT '机电排灌面积(千公顷)',
  `mulch_film_area` double NULL DEFAULT NULL COMMENT '农用塑料薄膜使用量-地膜覆盖面积(千公顷)',
  `diesel_engines` double NULL DEFAULT NULL COMMENT '柴油发动机动力(万千瓦)',
  `gasoline_engines` double NULL DEFAULT NULL COMMENT '汽油发动机动力(万千瓦)',
  `large_tractors` int NULL DEFAULT NULL COMMENT '大中型拖拉机(台)',
  `large_power` double NULL DEFAULT NULL COMMENT '动力 (万千瓦)',
  `mini_tractors` int NULL DEFAULT NULL COMMENT '小型及扶手拖拉机(台)',
  `mini_powers` double NULL DEFAULT NULL COMMENT '动力(万千瓦)',
  `large_machinery` int NULL DEFAULT NULL COMMENT '大中型拖拉机配套农具(部)',
  `mini_machinery` int NULL DEFAULT NULL COMMENT '小型拖拉机配套农具(部)',
  `pumps` int NULL DEFAULT NULL COMMENT '农用水泵(台)',
  `combine` int NULL DEFAULT NULL COMMENT '联合收割机(台)',
  `combine_power` double NULL DEFAULT NULL COMMENT '动力 (千瓦)',
  `motorized_thresher` int NULL DEFAULT NULL COMMENT '机动脱离机(台)',
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `electricity_rural_area` double NULL DEFAULT NULL COMMENT '农村用电量(万千瓦小时)',
  `nitrogenous_fertilizer` double NULL DEFAULT NULL COMMENT '农用化肥施用量-氮肥(吨)',
  `phosphate_fertilizer` double NULL DEFAULT NULL COMMENT '农用化肥施用量-磷肥(吨)',
  `potash_fertilizer` double NULL DEFAULT NULL COMMENT '农用化肥施用量-钾肥(吨)',
  `compound_fertilizer` double NULL DEFAULT NULL COMMENT '农用化肥施用量-复合肥(吨)',
  `mulch_film` double NULL DEFAULT NULL COMMENT '农用塑料薄膜使用量-地膜(吨)',
  `agricultural_diesel_oil` double NULL DEFAULT NULL COMMENT '农用柴油(吨)',
  `comsumption_pesticide` double NULL DEFAULT NULL COMMENT '农药使用量 (吨)',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of agricultural_production_mechanization_2
-- ----------------------------
INSERT INTO `agricultural_production_mechanization_2` VALUES (13, 157.06, 116.96, 120.16, 25.99, 142.48, 7.78, 9448, 37.81, 22465, 20.65, 2940, 57700, 40339, 2020, 108303, 14818, '2020', 144889, 39299, 16344, 12970, 42171, 3292, 20575, 3351, 0);
INSERT INTO `agricultural_production_mechanization_2` VALUES (15, 157.64, 119.12, 121.71, 27.58, 139.98, 7.7, 9129, 35.96, 22461, 20.65, 2580, 57355, 39914, 1988, 104984.9, 14695, '2019', 142793, 38711, 16224, 12487, 40078, 2901, 18583, 3221, 0);
INSERT INTO `agricultural_production_mechanization_2` VALUES (16, 5, 53, 55, 30, 59, 61, 91, 76, 100, 5, 85, 52, 93, 40, 70, 14, '43423', 77, 100, 28, 20, 35, 13, 78, 99, 1);
INSERT INTO `agricultural_production_mechanization_2` VALUES (18, 45434, 53, 42, 59, 69, 78, 68, 70, 50, 19, 4, 98, 55, 13, 47, 60, '201230', 25, 2, 12, 63, 37, 34, 5, 51, 1);
INSERT INTO `agricultural_production_mechanization_2` VALUES (23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, '3', 3, 3, 3, 3, 3, 3, 3, 3, 1);
INSERT INTO `agricultural_production_mechanization_2` VALUES (24, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, '4', 4, 4, 4, 4, 4, 4, 4, 4, 1);
INSERT INTO `agricultural_production_mechanization_2` VALUES (26, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, '123', 123, 123, 123, 123, 123, 123, 123, 123, 1);

-- ----------------------------
-- Table structure for category_gross_output_5
-- ----------------------------
DROP TABLE IF EXISTS `category_gross_output_5`;
CREATE TABLE `category_gross_output_5`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cereal` double NULL DEFAULT NULL COMMENT '谷物',
  `beans` double NULL DEFAULT NULL COMMENT '豆类',
  `cotton` double NULL DEFAULT NULL COMMENT '棉花',
  `oil_crops` double NULL DEFAULT NULL COMMENT '油料',
  `fiber_crops` double NULL DEFAULT NULL COMMENT '麻类',
  `sugar_crops` double NULL DEFAULT NULL COMMENT '糖料',
  `tobacco` double NULL DEFAULT NULL COMMENT '烟草',
  `herb_crops` double NULL DEFAULT NULL COMMENT '药材',
  `tuber_crops` double NULL DEFAULT NULL COMMENT '薯类',
  `vagetable` double NULL DEFAULT NULL COMMENT '蔬菜和菌子',
  `tea_fruit` double NULL DEFAULT NULL COMMENT '茶桑果',
  `flower` double NULL DEFAULT NULL COMMENT '花卉园艺',
  `other_crops` double NULL DEFAULT NULL COMMENT '其他作物',
  `wild_plants` double NULL DEFAULT NULL COMMENT '采集野生植物',
  `forestry` double NULL DEFAULT NULL COMMENT '林业产值',
  `animal_husbandry` double NULL DEFAULT NULL COMMENT '牧业产值',
  `fishery` double NULL DEFAULT NULL COMMENT '渔业产值',
  `Industrial_service` double NULL DEFAULT NULL COMMENT '服务业产值',
  `farming` double NULL DEFAULT NULL COMMENT '农业产值',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category_gross_output_5
-- ----------------------------
INSERT INTO `category_gross_output_5` VALUES (30, '2019', 252984, 8948, 27457, 86099, NULL, 36413, NULL, 7207, 5926, 2741851, 243741, 678201, 22666, NULL, 135289, 739799, 1031017, 514110, 4111493, 0);
INSERT INTO `category_gross_output_5` VALUES (31, '2020', 256767, 8810, 15797, 89073, NULL, 35811, NULL, 8263, 6023, 2746264, 263431, 733307, 11125, NULL, 134294, 982100, 1127982, 536236, 4174671, 0);
INSERT INTO `category_gross_output_5` VALUES (36, '3333', 16, 74, 72, 41, 18, 97, 79, 25, 35, 63, 21, 2, 4, 2, 82, 54, 11, 63, 92, 1);
INSERT INTO `category_gross_output_5` VALUES (37, '2222', 97, 55, 27, 68, 42, 61, 8, 91, 97, 30, 19, 96, 24, 41, 19, 64, 60, 38, 13, 1);
INSERT INTO `category_gross_output_5` VALUES (38, '5555', 97, 55, 27, 68, 42, 61, 8, 91, 97, 30, 19, 96, 24, 41, 19, 64, 60, 38, 13, 1);
INSERT INTO `category_gross_output_5` VALUES (39, '4444', 97, 55, 27, 68, 42, 61, 8, 91, 97, 30, 19, 96, 24, 41, 19, 64, 60, 38, 13, 1);

-- ----------------------------
-- Table structure for crops_sown_output_hectare_7
-- ----------------------------
DROP TABLE IF EXISTS `crops_sown_output_hectare_7`;
CREATE TABLE `crops_sown_output_hectare_7`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `classify` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '分类：sown|output|per hectare',
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年份',
  `grain_crops` double NULL DEFAULT NULL COMMENT '粮食作物',
  `summer_grain_crops` double NULL DEFAULT NULL COMMENT '夏收粮食',
  `wheat` double NULL DEFAULT NULL COMMENT '小麦',
  `soybean_summer` double NULL DEFAULT NULL COMMENT '豆类',
  `tuber_crops_summer` double NULL DEFAULT NULL COMMENT '薯类',
  `other_cereals_summer` double NULL DEFAULT NULL COMMENT '其他小谷物-夏',
  `early_season_rice` double NULL DEFAULT NULL COMMENT '早稻',
  `autumn_grain_crops` double NULL DEFAULT NULL COMMENT '秋收粮食',
  `paddy_rice` double NULL DEFAULT NULL COMMENT '稻谷',
  `mid_season_rice` double NULL DEFAULT NULL COMMENT '中稻',
  `double_rotation_rice` double NULL DEFAULT NULL COMMENT '双季晚稻',
  `corn` double NULL DEFAULT NULL COMMENT '玉米',
  `soybean_autumn` double NULL DEFAULT NULL COMMENT '豆类',
  `tuber_crops_autumn` double NULL DEFAULT NULL COMMENT '薯类',
  `other_cereals_autumn` double NULL DEFAULT NULL COMMENT '其他小谷物-秋',
  `cotton` double NULL DEFAULT NULL COMMENT '棉花',
  `oil_berain` double NULL DEFAULT NULL COMMENT '油料',
  `rape_seeds` double NULL DEFAULT NULL COMMENT '油菜籽',
  `peanuts` double NULL DEFAULT NULL COMMENT '花生',
  `sesame` double NULL DEFAULT NULL COMMENT '芝麻',
  `fiber_crops` double NULL DEFAULT NULL COMMENT '麻类',
  `sugar_crops` double NULL DEFAULT NULL COMMENT '糖料',
  `tobacco` double NULL DEFAULT NULL COMMENT '烟草',
  `herb_crops` double NULL DEFAULT NULL COMMENT '药材',
  `vagetable` double NULL DEFAULT NULL COMMENT '蔬菜',
  `melons` double NULL DEFAULT NULL COMMENT '瓜果',
  `vagetable_melons` double NULL DEFAULT NULL COMMENT '蔬菜与瓜果',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1087 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of crops_sown_output_hectare_7
-- ----------------------------
INSERT INTO `crops_sown_output_hectare_7` VALUES (1061, 'sown', '2016', 156, 10.63, 10.63, 0, 0, 0, 28.07, 116.8, 85.49, 62.81, 22.68, 20.11, 8.95, 2.15, 0.1, 14.46, 56.21, 34.24, 13.35, 8.47, 0, 0.42, 0, 0.25, 163.06, 14.98, 178.04, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1062, 'sown', '2017', 151.36, 10.45, 10.34, 0, 0, 0, 18.97, 121.8, 90.59, 69.64, 20.95, 20.29, 8.7, 1.83, 0.39, 14.17, 54.19, 32.73, 13.17, 8.13, 0, 0.42, 0, 0.26, 159.48, 17.34, 176.82, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1063, 'sown', '2018', 150.79, 11.18, 10.14, 0.22, 0.72, 0.1, 18.73, 120.88, 90.49, 69.84, 20.65, 18.64, 9.79, 1.96, NULL, 12.45, 53.69, 32.41, 13.18, 8.1, 0, 0.42, 0, 0.31, 164.18, 16.38, 180.56, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1064, 'sown', '2019', 143.05, 10.6, 9.55, 0, 0.72, 0.08, 15.55, 116.91, 87.1, 68.56, 18.54, 18.09, 8.92, 1.96, 0.02, 12.47, 54.21, 32.75, 13.38, 8.08, 0, 0.41, 0, 0.39, 169.91, 16, 185.91, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1065, 'sown', '2020', 144, 10.49, 9.52, 0.23, 0.68, 0.05, 15.33, 118.19, 89.48, 71.44, 18.04, 17.05, 9.66, 1.97, 0.02, 10.03, 56.53, 36.07, 13.22, 7.24, 0, 0.41, 0, 0.38, 177.64, 16.59, 194.22, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1066, 'output', '2016', 959977, 29465, 29465, NULL, NULL, NULL, 141163, 789347, 667660, 515948, 151712, 99183, 14022, 8127, 355, 13498, 131211, 75603, 44460, 10792, 3, 16787, NULL, 1895, 7176243, 501296, 7677539, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1067, 'output', '2017', 947717, 29505, 29118, NULL, NULL, 387, 106983, 811075, 689446, 557739, 131707, 99469, 14423, 7121, 616, 12775, 137123, 76673, 44619, 15481, 3, 16787, NULL, 1932, 7389953, 547709, 7937662, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1068, 'output', '2018', 941423, 31460, 28600, 348, 2135, 377, 107237, 802726, 695860, 563700, 132160, 81800, 16532, 8534, NULL, 11700, 133568, 75114, 44126, 14328, 2, 19820, NULL, NULL, 7668384, 551506, 8219890, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1069, 'output', '2019', 886043, 30520, 27647, 0, 2204, 277, 89656, 765867, 660416, 543781, 116635, 80427, 14823, 8536, 74, 10673, 134101, 75063, 44803, 14235, 0, 19333, NULL, NULL, 7798724, 544439, 8343163, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1070, 'output', '2020', 895956, 29992, 27254, 361, 2190, 187, 86208, 779756, 682304, 569974, 112330, 72733, 16083, 8568, 67, 8185, 139199, 82600, 44205, 12394, 0, 19524, NULL, NULL, 7775202, 561001, 8336203, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1071, 'perHectare', '2016', 6173, 2773, 2773, NULL, NULL, NULL, 5029, 6758, 7810, 8214, 6689, 4931, 1567, 3774, 3553, 933, 2334, 2208, 3330, 1275, 2813, 40444, NULL, 7710, 44009, 33470, 43123, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1072, 'perHectare', '2017', 6261, 2825, 2815, NULL, NULL, 3762, 5640, 6659, 7611, 8009, 6287, 4902, 1657, 3900, 1561, 902, 2531, 2343, 3389, 1903, 2813, 40444, NULL, 7431, 46338, 31578, 44890, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1073, 'perHectare', '2018', 6243, 2814, 2821, 1582, 2965, 3770, 5725, 6641, 7690, 8071, 6400, 4388, 1689, 4354, NULL, 940, 2488, 2318, 3348, 1769, 3333, 47190, NULL, NULL, 46707, 33669, 45524, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1074, 'perHectare', '2019', 6194, 2880, 2895, 0, 3055, 3332, 5766, 6551, 7582, 7931, 6291, 4447, 1662, 4352, 4074, 856, 2474, 2292, 3349, 1762, 0, 47154, NULL, NULL, 45899, 34027, 44877, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1075, 'perHectare', '2020', 6222, 2860, 2863, 1580, 3199, 3485, 5623, 6598, 7625, 7978, 6227, 4265, 1664, 4346, 4099, 816, 2462, 2290, 2244, 1711, 0, 47511, NULL, NULL, 43770, 33823, 42921, 0);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1076, 'sown', '2222', 61, 98, 73, 60, 39, 7, 87, 93, 59, 48, 60, 75, 59, 24, 40, 62, 57, 75, 25, 45, 9, 99, 78, 62, 22, 82, 76, 1);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1085, 'sown', '3', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1086, 'sown', '4', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1);
INSERT INTO `crops_sown_output_hectare_7` VALUES (1087, 'sown', '2028', 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1);

-- ----------------------------
-- Table structure for crops_sown_output_hectare_7_parent
-- ----------------------------
DROP TABLE IF EXISTS `crops_sown_output_hectare_7_parent`;
CREATE TABLE `crops_sown_output_hectare_7_parent`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `agricultural_product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 80 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of crops_sown_output_hectare_7_parent
-- ----------------------------
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (53, 'notParent', 'grainCrops', '粮食作物');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (54, 'grainCrops', 'summerGrainCrops', '夏收粮食');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (55, 'summerGrainCrops', 'wheat', '小麦');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (56, 'summerGrainCrops', 'soybeanSummer', '豆类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (57, 'summerGrainCrops', 'tuberCropsSummer', '薯类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (58, 'summerGrainCrops', 'otherCerealsSummer', '其他小谷物');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (59, 'grainCrops', 'earlySeasonRice ', '早稻');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (60, 'grainCrops', 'autumnGrainCrops', '秋收粮食');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (61, 'autumnGrainCrops', 'paddyRice', '稻谷');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (62, 'autumnGrainCrops', 'midSeasonRice', '中稻');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (63, 'autumnGrainCrops', 'doubleRotationRice', '双季晚稻');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (64, 'autumnGrainCrops', 'corn', '玉米');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (65, 'autumnGrainCrops', 'soybeanRutumn', '豆类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (66, 'autumnGrainCrops', 'tuberCropsRutumn', '薯类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (67, 'autumnGrainCrops', 'otherCerealsRutumn', '其他小谷物');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (68, 'notParent', 'cotton', '棉花');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (69, 'notParent', 'oilBerain', '油料');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (70, 'oilBerain', 'rapeSeeds', '油菜籽');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (71, 'oilBerain', 'peanuts  ', '花生');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (72, 'oilBerain', 'sesame', '芝麻');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (73, 'notParent', 'fiberCrops', '麻类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (74, 'notParent', 'sugarCrops', '糖料');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (75, 'notParent', 'tobacco', '烟叶');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (76, 'notParent', 'herbCrops', '药材');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (77, 'vagetableMelons', 'vagetable', '蔬菜、瓜类');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (78, 'vagetableMelons', 'melons', '蔬菜');
INSERT INTO `crops_sown_output_hectare_7_parent` VALUES (79, 'notParent', 'vagetableMelons', '瓜类');

-- ----------------------------
-- Table structure for forproducts_forestry_output_8
-- ----------------------------
DROP TABLE IF EXISTS `forproducts_forestry_output_8`;
CREATE TABLE `forproducts_forestry_output_8`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `barren_mountain` double NULL DEFAULT NULL COMMENT '荒山沙堤造林面积',
  `forest_afforestation` double NULL DEFAULT NULL COMMENT '有林地造林面积',
  `reforestation_area` double NULL DEFAULT NULL COMMENT '更新改造面积',
  `scattered_tree_planging` double NULL DEFAULT NULL COMMENT '四旁零星植树',
  `forest_tending_area` double NULL DEFAULT NULL COMMENT '森林抚育面积',
  `seedling_yield` double NULL DEFAULT NULL COMMENT '当年苗木产量',
  `seedling_area` double NULL DEFAULT NULL COMMENT '育苗面积',
  `bamboo_timber_harvesting` double NULL DEFAULT NULL COMMENT '竹木采伐',
  `timber` double NULL DEFAULT NULL COMMENT '木材',
  `bamboo` double NULL DEFAULT NULL COMMENT '竹材',
  `nan_bamboo` double NULL DEFAULT NULL COMMENT '楠竹',
  `sundry_bamboo` double NULL DEFAULT NULL COMMENT '杂竹',
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `seeds_tung_oil_tree` double NULL DEFAULT NULL COMMENT '油桐籽',
  `oil_tea_camellia_seed` double NULL DEFAULT NULL COMMENT '油茶籽',
  `chinese_sapium_seed` double NULL DEFAULT NULL COMMENT '乌椿籽',
  `chinese_gall` double NULL DEFAULT NULL COMMENT '五倍子',
  `chinese_chestnut` double NULL DEFAULT NULL COMMENT '板栗',
  `mushroom` double NULL DEFAULT NULL COMMENT '香菇',
  `white_fungus` double NULL DEFAULT NULL COMMENT '白木耳',
  `black_fungus` double NULL DEFAULT NULL COMMENT '黑木耳',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of forproducts_forestry_output_8
-- ----------------------------
INSERT INTO `forproducts_forestry_output_8` VALUES (16, 21148, 15277.5, 8073, 488.17, 185703, 2966.48, 138245, NULL, 62.68, 75.46, 9.54, 65.92, '2019', NULL, 11442, NULL, NULL, 3094, NULL, NULL, NULL, 0);
INSERT INTO `forproducts_forestry_output_8` VALUES (17, 57898, 7011, 18960, 379.62, 264115, 3357.9, 155678, NULL, 14, 96.21, 33.36, 62.85, '2020', NULL, 11812, NULL, NULL, 3098, NULL, NULL, NULL, 0);
INSERT INTO `forproducts_forestry_output_8` VALUES (18, 2313, 74, 48, 15, 32, 47, 36, 23, 8, 75, 78, 98, '2222', 4, 20, 18, 78, 30, 17, 99, 28, 1);
INSERT INTO `forproducts_forestry_output_8` VALUES (23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, '3', 3, 3, 3, 3, 3, 3, 3, 3, 1);
INSERT INTO `forproducts_forestry_output_8` VALUES (24, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, '4', 4, 4, 4, 4, 4, 4, 4, 4, 1);
INSERT INTO `forproducts_forestry_output_8` VALUES (25, 1, 1, 1323, 1, 1, 1, 1, 1, 11, 1, 1, 1, '2028', 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- ----------------------------
-- Table structure for gross_indicesgross_3
-- ----------------------------
DROP TABLE IF EXISTS `gross_indicesgross_3`;
CREATE TABLE `gross_indicesgross_3`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年份',
  `gross_output_value` double NULL DEFAULT NULL COMMENT '农林牧渔总产值',
  `indices_gross_total` double NULL DEFAULT NULL COMMENT '农林渔牧总产值指数',
  `indices_gross_farming` double NULL DEFAULT NULL COMMENT '农业',
  `indices_gross_forestry` double NULL DEFAULT NULL COMMENT '林业',
  `indices_gross_husbandry` double NULL DEFAULT NULL COMMENT '牧业',
  `indices_gross_fishery` double NULL DEFAULT NULL COMMENT '渔业',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1229 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gross_indicesgross_3
-- ----------------------------
INSERT INTO `gross_indicesgross_3` VALUES (1139, '1952', 11134, 110, 109.3, 116.1, 115, 108.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1140, '1953', 13934, 113.9, 114.6, 111.8, 113.4, 105.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1141, '1954', 10565, 76.3, 61, 125.6, 125.1, 173.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1142, '1955', 14089, 129.2, 158.1, 95.2, 79.3, 71.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1143, '1956', 17254, 116.3, 117.9, 135.6, 107.6, 111.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1144, '1957', 19424, 109.8, 106.8, 103.8, 129.2, 111.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1145, '1958', 20250, 100.6, 103.5, 108.8, 85.3, 99.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1146, '1959', 16722, 78.2, 76.9, 110.3, 76, 91, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1147, '1960', 19239, 111.2, 115.6, 97.9, 94.3, 96.2, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1148, '1961', 20144, 89.8, 91.6, 83.1, 95.4, 61.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1149, '1962', 22901, 112.7, 111.5, 77.2, 119.7, 128.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1150, '1963', 29824, 129.9, 128.2, 168.7, 142.7, 121.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1151, '1964', 29568, 100.6, 101, 122.9, 92.9, 107, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1152, '1965', 40569, 130.5, 134.2, 118.1, 121.5, 97.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1153, '1966', 46023, 98.1, 93.3, 139.7, 122.4, 119.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1154, '1967', 44789, 97.3, 99.4, 86.6, 92.2, 81.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1155, '1968', 44403, 99.3, 100.2, 66.7, 93, 115.2, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1156, '1969', 36686, 79.8, 75.6, 101.5, 95.2, 109, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1157, '1970', 43815, 119.3, 124.2, 144.6, 102.8, 90.4, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1158, '1971', 50414, 117.5, 118.9, 112.9, 127.4, 72.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1159, '1972', 53667, 104.3, 104.8, 92, 104.6, 96.4, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1160, '1973', 56244, 104.7, 105.5, 121.3, 95.5, 115.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1161, '1974', 62128, 106.9, 109.2, 99.1, 95.4, 94.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1162, '1975', 59702, 96.1, 95.2, 108.2, 100.7, 97.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1163, '1976', 61725, 104.5, 103.8, 106.4, 109.5, 106, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1164, '1977', 61436, 98.2, 98.5, 94.2, 93.6, 111.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1165, '1978', 65218, 103.3, 102.5, 89.1, 111, 102.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1166, '1979', 87748, 114.8, 112.9, 92.6, 133.2, 106, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1167, '1980', 69502, 81.4, 80.1, 87.8, 79.2, 122.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1168, '1981', 81558, 110.2, 109.3, 122.7, 116.4, 101.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1169, '1982', 99678, 121, 122.4, 101.2, 113.9, 124.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1170, '1983', 94353, 91, 87.9, 93.4, 106.6, 100.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1171, '1984', 133116, 125.8, 127.1, 103.1, 119.5, 132.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1172, '1985', 161919, 107.5, 102, 104.4, 131.2, 124.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1173, '1986', 178272, 104.1, 102.3, 99.8, 106.1, 122.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1174, '1987', 216576, 106.6, 103.2, 105.8, 114.1, 122, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1175, '1988', 294433, 104.1, 100, 107.3, 114.7, 114.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1176, '1989', 326277, 103.8, 102.4, 96.7, 106.3, 109.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1177, '1990', 368637, 106.3, 96.5, 99.5, 115.8, 157.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1178, '1991', 352689, 94.4, 88.9, 104.3, 104.4, 100.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1179, '1992', 411035, 113.3, 115.8, 78, 110.4, 111, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1180, '1993', 485043, 107.9, 105.8, 114.6, 107.1, 118.2, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1181, '1994', 723819, 109.4, 104.6, 101.9, 111.4, 124.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1182, '1995', 943381, 112, 109.3, 122.6, 110, 123.6, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1183, '1996', 1098393, 108.7, 106.7, 103.4, 113, 108.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1184, '1997', 1213162, 108.4, 108.7, 99.1, 107, 109.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1185, '1998', 1176359, 99.7, 97.8, 110.3, 93.4, 113.6, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1186, '1999', 1211291, 106.9, 106.6, 118.9, 107.1, 107.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1187, '2000', 1269443, 105.3, 104.5, 108, 106.9, 105.2, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1188, '2001', 1337788, 105.6, 104.6, 88.7, 106.1, 108.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1189, '2002', 1412480, 105.2, 104.7, 124.9, 104.7, 106.2, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1190, '2003', 1517909, 106.5, 103, 139.5, 108.5, 103, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1191, '2004', 1656507, 106.2, 107.9, 91.1, 102.3, 107.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1192, '2005', 1805957, 105.5, 105.8, 100.8, 106.3, 105, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1193, '2006', 1912103, 105.1, 105.6, 85.8, 102.8, 107.9, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1194, '2007', 2159177, 104, 102.2, 99.3, 106.6, 106.8, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1195, '2008', 2446364, 103.5, 101.3, 97.1, 110.9, 99.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1196, '2009', 2517873, 102.9, 100.8, 84.9, 104.9, 107.1, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1197, '2010', 2810947, 104.5, 102.8, 125.4, 106.5, 106.4, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1198, '2011', 3294880, 104, 102.4, 160.4, 105.1, 104.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1199, '2012', 4760365, 105.7, 106.2, 127.7, 106.3, 102, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1200, '2013', 5302657, 104.5, 108.5, 122.9, 97.6, 100.6, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1201, '2014', 5594354, 105, 105.6, 118.2, 103, 102.5, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1202, '2015', 6202842, 104.8, 105.2, 111.7, 101.2, 105, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1203, '2016', 5648500, 103.6, 106.6, 83, 95.2, 102.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1204, '2017', 6118426, 104.8, 105.2, 100.6, 101.6, 100.6, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1205, '2018', 6197369, 103.3, 103.5, 107.7, 99.6, 101.3, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1206, '2019', 6531708, 103.3, 104.1, 121.7, 91.9, 101.7, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1207, '2020', 6955283, 95.4, 98.5, 95.6, 70.1, 104.6, 0);
INSERT INTO `gross_indicesgross_3` VALUES (1215, '2045', 29, 65, 14, 12, 91, 41, 1);
INSERT INTO `gross_indicesgross_3` VALUES (1216, '2044', 29, 65, 14, 12, 91, 41, 1);
INSERT INTO `gross_indicesgross_3` VALUES (1224, '1434', 36, 19, 59, 27, 15, 60, 1);
INSERT INTO `gross_indicesgross_3` VALUES (1227, '14', 14, 14, 14333, 14, 14, 14, 1);
INSERT INTO `gross_indicesgross_3` VALUES (1228, '15', 15, 15, 15, 15, 15, 15, 1);
INSERT INTO `gross_indicesgross_3` VALUES (1229, '2029', 1, 123123, 123, 123, 123, 12434, 1);

-- ----------------------------
-- Table structure for gross_output_compoosition_4
-- ----------------------------
DROP TABLE IF EXISTS `gross_output_compoosition_4`;
CREATE TABLE `gross_output_compoosition_4`  (
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年份',
  `total` double NULL DEFAULT NULL COMMENT '农林牧渔业总计',
  `farming` double NULL DEFAULT NULL COMMENT '农业',
  `forestry` double NULL DEFAULT NULL COMMENT '林业',
  `husbandry` double NULL DEFAULT NULL COMMENT '牧业',
  `fishery` double NULL DEFAULT NULL COMMENT '渔业',
  `Industrial_service` double NULL DEFAULT NULL COMMENT '农林牧渔服务业',
  `id` int NOT NULL AUTO_INCREMENT,
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gross_output_compoosition_4
-- ----------------------------
INSERT INTO `gross_output_compoosition_4` VALUES ('1999', 1211291, 757552, 7905, 263655, 182179, NULL, 1, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2000', 1269443, 782006, 8473, 291210, 187754, NULL, 2, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2001', 1337788, 794920, 7284, 325084, 210500, NULL, 3, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2002', 1412480, 842941, 8658, 338440, 222441, NULL, 4, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2003', 1517909, 881895, 15520, 368760, 233701, NULL, 5, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2004', 1656507, 959760, 13744, 409578, 260177, 13248, 6, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2005', 1805957, 1033226, 14974, 458194, 289117, 10446, 7, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2006', 1912103, 1122949, 13214, 447692, 317139, 11109, 8, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2007', 2159177, 1212819, 13738, 561204, 359839, 11577, 9, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2008', 2446364, 1322469, 14598, 695589, 401135, 12573, 10, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2009', 2517873, 1388083, 13867, 647831, 455231, 12861, 11, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2010', 2810947, 1512017, 19902, 739386, 525628, 14014, 12, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2011', 3294880, 1746823, 34861, 900221, 594045, 18930, 13, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2012', 4760365, 2585872, 48708, 1213014, 784105, 128666, 14, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2013', 5302657, 3051002, 65857, 1186703, 836617, 162478, 15, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2014', 5594354, 3162714, 87107, 1269943, 874004, 200586, 16, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2015', 6202842, 3591590, 99532, 1352725, 918058, 240937, 17, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2016', 5648500, 3525000, 101400, 778300, 942500, 301300, 18, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2017', 6118426, 3844815, 107029, 732446, 1033166, 400969, 19, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2018', 6197369, 3924611, 116594, 668744, 1032789, 454631, 20, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2019', 6531708, 4111493, 135289, 739799, 1031017, 514110, 21, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2020', 6955283, 4174671, 134294, 982100, 1127982, 536236, 22, 0);
INSERT INTO `gross_output_compoosition_4` VALUES ('2033', 9, 3, 65, 52, 38, 54, 26, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('2026', 62, 46, 78, 58, 82, 90, 29, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('2025', 62, 46, 78, 58, 82, 90, 30, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('2024', 62, 46, 78, 58, 82, 90, 31, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('3423', 55, 83, 36, 89, 69, 62, 32, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('234234', 56, 36, 95, 14, 53, 47, 33, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('3', 3, 3, 3, 3, 3, 3, 37, 1);
INSERT INTO `gross_output_compoosition_4` VALUES ('4', 4, 4, 4, 4, 4, 4, 38, 1);

-- ----------------------------
-- Table structure for major_agricultural_products_6
-- ----------------------------
DROP TABLE IF EXISTS `major_agricultural_products_6`;
CREATE TABLE `major_agricultural_products_6`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年份',
  `grains` double NULL DEFAULT NULL COMMENT '粮食',
  `cotton` double NULL DEFAULT NULL COMMENT '棉花',
  `oil_bearing` double NULL DEFAULT NULL COMMENT '油料',
  `vagetables` double NULL DEFAULT NULL COMMENT '蔬菜',
  `fruit` double NULL DEFAULT NULL COMMENT '水果',
  `slaughtered_hogs` double NULL DEFAULT NULL COMMENT '生猪出栏',
  `slaughtered_poultry` double NULL DEFAULT NULL COMMENT '家禽出笼',
  `eggs` double NULL DEFAULT NULL COMMENT '禽蛋产量',
  `milk` double NULL DEFAULT NULL COMMENT '牛奶',
  `aquatic_products` double NULL DEFAULT NULL COMMENT '水产品',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of major_agricultural_products_6
-- ----------------------------
INSERT INTO `major_agricultural_products_6` VALUES (38, '2016', 959977, 13498, 131211, 7176243, 100816, 263, 3752, 87546, 15966, 441401, 0);
INSERT INTO `major_agricultural_products_6` VALUES (39, '2017', 947717, 12775, 137123, 7389953, 112488, 252, 3735, 87654, 23251, 436546, 0);
INSERT INTO `major_agricultural_products_6` VALUES (40, '2018', 941423, 11700, 133568, 7668384, 128486, 247, 3820, 90250, 9471, 443141, 0);
INSERT INTO `major_agricultural_products_6` VALUES (41, '2019', 886043, 10673, 134101, 7798724, 141261, 169, 4089, 93272, 10421, 441871, 0);
INSERT INTO `major_agricultural_products_6` VALUES (42, '2020', 895956, 8185, 139199, 7775202, 148844, 114, 3446, 104721, 13853, 426723, 0);

-- ----------------------------
-- Table structure for rural_infrastructure_1
-- ----------------------------
DROP TABLE IF EXISTS `rural_infrastructure_1`;
CREATE TABLE `rural_infrastructure_1`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `township_gov` int NULL DEFAULT NULL COMMENT '乡政府（个）',
  `town_gov` int NULL DEFAULT NULL COMMENT '镇政府(个)',
  `subdistrict_off` int NULL DEFAULT NULL COMMENT '办事处(个)',
  `villagers_com` int NULL DEFAULT NULL COMMENT '村委会(个)',
  `villagers_sub` int NULL DEFAULT NULL COMMENT '村民小组(个)',
  `villages_water` int NULL DEFAULT NULL COMMENT '自来水受益村数(个)',
  `villages_tv` int NULL DEFAULT NULL COMMENT '通有线电视村数(个)',
  `villages_prop_tv` double NULL DEFAULT NULL COMMENT '通有线电视村数占全部村委会比重(%)',
  `villages_broad` int NULL DEFAULT NULL COMMENT '通宽带村数(个)',
  `villages_prop_broad` double NULL DEFAULT NULL COMMENT '通宽带村数占全部村委会比重(%)',
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年份',
  `villages_prop_water` double NULL DEFAULT NULL COMMENT '自来水受益村数占全部村委会比重(%)',
  `no_agriculture_employees` double NULL DEFAULT NULL COMMENT '农村非农从业人员(万人)',
  `agricultural_laborers` double NULL DEFAULT NULL COMMENT '国营农场农业从业人员(万人)',
  `no_agricultural_laborers` double NULL DEFAULT NULL COMMENT '国营农场非农业从业人员(万人)',
  `agriculture_employees` double NULL DEFAULT NULL COMMENT '农村农从业人员(万人',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 131 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '该数据库表包含`1 农村基层组织﹑户数、人口、从业人员`表 和 `2农村社会基础设施` 表的数据字段' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of rural_infrastructure_1
-- ----------------------------
INSERT INTO `rural_infrastructure_1` VALUES (111, 3, 3, 74, 1923, 16735, -1, -1, 1, -1, 1, '2017', 1, 2.26, 1.31, 94.74, 43.84, 0);
INSERT INTO `rural_infrastructure_1` VALUES (112, 3, 1, 118, 1893, 16649, -1, -1, -1, -1, -1, '2018', -1, 1.93, 0.79, 95.87, 42.69, 0);
INSERT INTO `rural_infrastructure_1` VALUES (113, 3, 1, 118, 1889, 16574, 1888, 1889, 100, 1889, 100, '2019', 99.9, 1.99, 0.79, 93.81, 42.93, 0);
INSERT INTO `rural_infrastructure_1` VALUES (114, 5, 3, 156, 1909, 16616, 1908, 1909, 100, 1909, 100, '2020', 99.9, 1.75, 0.58, 94.25, 42.32, 0);
INSERT INTO `rural_infrastructure_1` VALUES (115, 3, 1, 72, 16787, 43, -1, -1, -1, -1, -1, '2016', -1, 3.5, 2.61, 93.81, 42.96, 0);
INSERT INTO `rural_infrastructure_1` VALUES (126, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2028', 1, 1, 1, 1, 1, 1);
INSERT INTO `rural_infrastructure_1` VALUES (131, 2343, 2343, 2343, 2343, 2343, 2343, 2343, 2343, 2343, 2343, '2343', 2343, 2343, 2343, 2343, 2343, 1);

-- ----------------------------
-- Table structure for statistics_production_9
-- ----------------------------
DROP TABLE IF EXISTS `statistics_production_9`;
CREATE TABLE `statistics_production_9`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `yearend_stock_animals` int NULL DEFAULT NULL COMMENT '年末大牲畜存栏',
  `cows_breed` int NULL DEFAULT NULL COMMENT '良种及改良种乳牛',
  `beef_cattle` int NULL DEFAULT NULL COMMENT '肉用牛',
  `horses` int NULL DEFAULT NULL COMMENT '马',
  `donkeys` int NULL DEFAULT NULL COMMENT '驴',
  `mutes` int NULL DEFAULT NULL COMMENT '骡',
  `yearend_sheep` int NULL DEFAULT NULL COMMENT '年末羊只数',
  `yearend_hogs` double NULL DEFAULT NULL COMMENT '年末牲猪存栏',
  `femal_hogs` double NULL DEFAULT NULL COMMENT '能繁母猪',
  `slaughtered_fattened_hogs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '全年肉猪出栏',
  `slaughtered_cattle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '全年出售和自宰肉用牛',
  `slaughtered_sheep` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '自宰肉羊',
  `slaughtered_poultry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '自宰家禽',
  `year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '年份',
  `milk` double NULL DEFAULT NULL COMMENT '牛奶产量',
  `honey` double NULL DEFAULT NULL COMMENT '蜂蜜',
  `eggs` double NULL DEFAULT NULL COMMENT '禽蛋产量',
  `tea_output_all` double NULL DEFAULT NULL COMMENT '茶叶总产量',
  `green_tea` double NULL DEFAULT NULL COMMENT '绿茶',
  `wulong_tea` double NULL DEFAULT NULL COMMENT '清茶',
  `white_tea` double NULL DEFAULT NULL COMMENT '白茶',
  `other_tea` double NULL DEFAULT NULL COMMENT '其他茶',
  `tea_plantation_area` double NULL DEFAULT NULL COMMENT '年末茶园面积',
  `picked_area` double NULL DEFAULT NULL COMMENT '采摘面积',
  `fruit_output_all` double NULL DEFAULT NULL COMMENT '水果产量',
  `peaches` double NULL DEFAULT NULL COMMENT '桃子',
  `citrus` double NULL DEFAULT NULL COMMENT '柑橘',
  `pears` double NULL DEFAULT NULL COMMENT '梨子',
  `grapes` double NULL DEFAULT NULL COMMENT '葡萄',
  `persimmons` double NULL DEFAULT NULL COMMENT '葡萄',
  `kiwi_fruit` double NULL DEFAULT NULL COMMENT '猕猴桃',
  `yearend_orchard_area` double NULL DEFAULT NULL COMMENT '年末果园面积',
  `citrus_area` double NULL DEFAULT NULL COMMENT '柑橘园面积',
  `pears_area` double NULL DEFAULT NULL COMMENT '梨园面积',
  `grapes_area` double NULL DEFAULT NULL COMMENT '葡萄园面积',
  `peachs_area` double NULL DEFAULT NULL COMMENT '桃园面积',
  `kiwi_area` double NULL DEFAULT NULL COMMENT '猕猴桃面积',
  `aquatic_products` double NULL DEFAULT NULL COMMENT '水产产量',
  `fish_caught_all` double NULL DEFAULT NULL COMMENT '淡水捕捞产量',
  `fish_caught` double NULL DEFAULT NULL COMMENT '鱼类捕捞',
  `shrimps_caught` double NULL DEFAULT NULL COMMENT '虾蟹类',
  `shellfhsh_caught` double NULL DEFAULT NULL COMMENT '贝类',
  `other_caught` double NULL DEFAULT NULL COMMENT '其他类',
  `fish_artificially_all` double NULL DEFAULT NULL COMMENT '淡水养殖产量',
  `fish_artificially` double NULL DEFAULT NULL COMMENT '鱼类养殖',
  `shrimps_artificially` double NULL DEFAULT NULL COMMENT '虾蟹养殖',
  `shellfhsh_artificially` double NULL DEFAULT NULL COMMENT '贝类养殖',
  `other_artificially` double NULL DEFAULT NULL COMMENT '其他类',
  `fish_cultured_all` double NULL DEFAULT NULL COMMENT '增值养殖产量',
  `fish_cultured` double NULL DEFAULT NULL COMMENT '鱼类增殖',
  `shrimps_cultured` double NULL DEFAULT NULL COMMENT '蟹类增值',
  `shellfhsh_cultured` double NULL DEFAULT NULL COMMENT '贝类增值',
  `other_cultured` double NULL DEFAULT NULL COMMENT '其他增值类',
  `fresh_cultured_area` double NULL DEFAULT NULL COMMENT '淡水养殖面积',
  `paddy_cultured_area` double NULL DEFAULT NULL COMMENT '稻田养殖面积',
  `proliferation_artificially_area` double NULL DEFAULT NULL COMMENT '增值养殖面积',
  `isDel` tinyint NULL DEFAULT 1 COMMENT '能否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of statistics_production_9
-- ----------------------------
INSERT INTO `statistics_production_9` VALUES (18, 63935, 3145, 60703, NULL, 13, NULL, 32171, 86.28, 8.59, '168.61/103633', '22551/3434', '35479/648', '4088.50/57280', '2019', 10421, 932, 93272, 2558, 2433, NULL, 76, 6, 7153, 5781, 141261, 46524, 22782, 16510, 26037, 487, 15014, 8743, 2439, 654, 1549, 2366, 876, 441871, 17938, 14053, 3848, 37, NULL, 401219, 350107, 47879, NULL, 3233, 22714, 22714, NULL, NULL, NULL, 42891, 13903, 47285, 0);
INSERT INTO `statistics_production_9` VALUES (19, 47333, 2857, 44397, 79, NULL, NULL, 30079, 105.24, 10.5, '113.94/86270', '19757/2984', '20138/335', '3446.30/45892', '2020', 13853, 714, 104721, 2636, 2512, NULL, 78, 46, 7217, 5900, 148844, 54504, 36465, 16188, 25132, 1705, 10912, 895, 2399, 755, 1484, 2498, 1004, 426723, 8896, 7213, 1670, 13, NULL, 396193, 345833, 46625, NULL, 3735, 21634, 21634, NULL, NULL, NULL, 39219, 15347, 38674, 0);
INSERT INTO `statistics_production_9` VALUES (27, 1, 11, 1, 2, 11, 1, 1, 1, 1, '1', '11', '1', '1', '2028', 1, 11, 1, 111, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, NULL, 1, 1, 1, 1, 11, 1);
INSERT INTO `statistics_production_9` VALUES (28, 2222, 33, 3, 3, 33, 3, 33, 3, 3, '3', '3', '3', '33', '1991', 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 33, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 33, 3, 3, 3, 33, 3, 3, 3, 3, NULL, 3, 33, 3, 3, 3, 1);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码(md5加密)',
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '123456', 1);
INSERT INTO `user` VALUES ('xiaogao', 'c69ba4cd68f663be1621b12d64bba158$78b9fc1e06d50ab8c32345cc4412a83feb141d3f799030db712d6a59418b284f', 2);
INSERT INTO `user` VALUES ('xiaogaotest1', '7fc6f5f30309f31af606f5fda4b1b664$99d8b9f325093727b5ad78eeeca4de3e05c5b883378b20d0b1b53734cd73ee25', 3);

SET FOREIGN_KEY_CHECKS = 1;
