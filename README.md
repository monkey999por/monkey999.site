### 起動まで

```
npm ci
npm run dev
```

### 全体フォーマッタ

```
npm run pretty
```

### ディレクトリ構成

```
├─components
│  ├─atoms
│  │  └─SampleAtom
│  │    ├─index.tsx ※コンポーネント本体
│  │    └─sampleAtom.scss ※コンポーネント固有のCSS
│  ├─molecules
│  │  └─SampleMolecules
│  ├─organisms
│  └─templates
│      └─SampleTemplates
├─pages
│  ├─api
│  └─sample-page
└─utils
    ├─functions
    ├─hooks
    ├─styles
    └─types
```
