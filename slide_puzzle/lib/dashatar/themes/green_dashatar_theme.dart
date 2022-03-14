import 'package:flutter/material.dart';
import 'package:very_good_slide_puzzle/colors/colors.dart';
import 'package:very_good_slide_puzzle/dashatar/dashatar.dart';
import 'package:very_good_slide_puzzle/l10n/l10n.dart';

/// {@template green_dashatar_theme}
/// The green dashatar puzzle theme.
/// {@endtemplate}
class GreenDashatarTheme extends DashatarTheme {
  /// {@macro green_dashatar_theme}
  const GreenDashatarTheme() : super();

  @override
  String semanticsLabel(BuildContext context) =>
      context.l10n.dashatarGreenDashLabelText;

  @override
  Color get backgroundColor => PuzzleColors.dkpurp;

  @override
  Color get defaultColor => PuzzleColors.lavendar;

  @override
  Color get buttonColor => PuzzleColors.orange2;

  @override
  Color get buttonColorCorrect => PuzzleColors.inplace;

  @override
  Color get menuInactiveColor => PuzzleColors.redorange;

  @override
  Color get countdownColor => PuzzleColors.orange2;

  @override
  String get themeAsset => 'assets/images/dashatar/gallery/green.png';

  @override
  String get successThemeAsset => 'assets/images/dashatar/success/green.png';

  @override
  String get audioControlOffAsset =>
      'assets/images/audio_control/green_dashatar_off.png';

  @override
  String get audioAsset => 'assets/audio/skateboard.mp3';

  @override
  String get dashAssetsDirectory => 'assets/images/dashatar/green';
}
