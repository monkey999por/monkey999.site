import particlejs from "https://cdn.rawgit.com/ics-creative/ParticleJS/release/1.0.0/libs/particlejs.min.js";
import createjs from "https://code.createjs.com/1.0.0/createjs.min.js";

/**
 * particle test
 */
// Stageオブジェクトを作成します。表示リストのルートになります。
const stage = new createjs.Stage("myCanvas");

// パーティクルシステム作成します。
const particleSystem = new particlejs.ParticleSystem();

// パーティクルシステムの描画コンテナーを表示リストに登録します。
stage.addChild(particleSystem.container);

// Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
particleSystem.importFromJson({
  bgColor: "#0a1f1d",
  width: 207,
  height: 282,
  emitFrequency: 136,
  startX: 98.8511064280359,
  startXVariance: 272,
  startY: 136.92877483183673,
  startYVariance: "378",
  initialDirection: 0,
  initialDirectionVariance: 0,
  initialSpeed: 0,
  initialSpeedVariance: 12.4,
  friction: 0.111,
  accelerationSpeed: 0.0175,
  accelerationDirection: 29.3,
  startScale: "0.02",
  startScaleVariance: "0.63",
  finishScale: "0",
  finishScaleVariance: "0",
  lifeSpan: "136",
  lifeSpanVariance: "500",
  startAlpha: "0.51",
  startAlphaVariance: "1",
  finishAlpha: "0",
  finishAlphaVariance: "0",
  shapeIdList: ["blur_circle"],
  startColor: {
    hue: 25,
    hueVariance: 86,
    saturation: "0",
    saturationVariance: 0,
    luminance: 100,
    luminanceVariance: "47",
  },
  blendMode: true,
  alphaCurveType: "0",
  VERSION: "1.0.0",
});

// フレームレートの設定
createjs.Ticker.framerate = 60;
// 定期的に呼ばれる関数を登録
createjs.Ticker.on("tick", handleTick);

function handleTick() {
  // パーティクルの発生・更新
  particleSystem.update();

  // 描画を更新する
  stage.update();
}
