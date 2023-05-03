### 起動まで

```
npm ci
npm run dev
```

### 全体フォーマッタ

```
npm run pretty
```

### production

- manegement  
  https://vercel.com/monkey999por/monkey999-site
- site  
  https://monkey999-site.vercel.app/
- local deploy(design)  
  http://192.168.10.61/

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

### その他

- `jest`のサンプルあり
- `typescript, nextjs`のサンプルもあり
- `nodejs`なんかの javascript エコシステム関連もここで検証
