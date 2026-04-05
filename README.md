# SaveCows Landing Page

Лендинг для пожертвований на содержание коров — Kamdhenuseva.

**Сайт:** https://savecows.dayadevraha.com/

## Технологии

- Next.js 15
- Cloudflare Pages
- Tailwind CSS
- TypeScript

## Локальная разработка

```bash
npm install
npm run dev
```

Сайт будет доступен на http://localhost:3000

## Деплой

### Требования

1. **GitHub CLI** (`gh`) — авторизован
2. **Wrangler CLI** — авторизован (`npx wrangler login`)
3. **AWS CLI** — настроен (для DNS)

### Деплой на Cloudflare Pages

```bash
npm run deploy
```

Эта команда:
1. Собирает Next.js проект через `@cloudflare/next-on-pages`
2. Загружает на Cloudflare Pages

### Настройка кастомного домена

#### 1. Добавить домен в Cloudflare Pages

Через Dashboard: Pages → savecows-landing → Custom domains → Add domain

Или домен автоматически добавляется при первом деплое, если уже был настроен.

#### 2. Добавить DNS запись в AWS Route 53

```bash
# Получить ID зоны
aws route53 list-hosted-zones

# Добавить CNAME запись
aws route53 change-resource-record-sets \
  --hosted-zone-id Z05837091WC0SLUAGEMYQ \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "savecows.dayadevraha.com",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [{"Value": "savecows-landing.pages.dev"}]
      }
    }]
  }'
```

#### 3. Проверить DNS

```bash
# Проверить через Google DNS
dig savecows.dayadevraha.com @8.8.8.8 +short

# Должно вернуть:
# savecows-landing.pages.dev.
# 172.66.x.x
```

## Структура проекта

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Главная страница
│   ├── layout.tsx         # Корневой layout
│   ├── api/               # API endpoints
│   │   ├── campaign/      # Данные кампании
│   │   └── webhook/       # Razorpay webhook
│   └── legal/             # Юридические страницы
├── lib/
│   └── constants.ts       # Константы (URL, контакты)
├── wrangler.toml          # Cloudflare конфигурация
└── package.json
```

## Конфигурация

### Razorpay

В `lib/constants.ts`:
- `RAZORPAY_PAGE_URL` — страница оплаты с поддержкой prefill суммы
- `RAZORPAY_DONATE_URL` — короткая ссылка

### Cloudflare KV (опционально)

Для хранения данных кампании:
1. Создать KV namespace в Cloudflare Dashboard
2. Привязать к Pages проекту как `CAMPAIGN_DATA`

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Локальная разработка |
| `npm run build` | Сборка для production |
| `npm run deploy` | Деплой на Cloudflare Pages |
| `npm run preview` | Локальный preview Cloudflare |

## Работа с изображениями

### Скачивание фото с Яндекс Диска

```bash
# Получить ссылку на скачивание через API
DOWNLOAD_URL=$(curl -sL "https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=YANDEX_DISK_URL&path=/путь/к/файлу.jpg" | python3 -c "import json,sys; print(json.load(sys.stdin)['href'])")

# Скачать файл
curl -sL "$DOWNLOAD_URL" -o /tmp/photo.jpg
```

Пример:
```bash
# Скачать фото из папки на Яндекс Диске
DOWNLOAD_URL=$(curl -sL "https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=https://disk.yandex.ru/d/q-pDbwmIu2zHHA&path=/Madhav%20das%20ji%20-%20web/0K1A7565.jpg" | python3 -c "import json,sys; print(json.load(sys.stdin)['href'])")
curl -sL "$DOWNLOAD_URL" -o /tmp/goshala.jpg
```

### Загрузка фото в Cloudflare R2

```bash
# Загрузить в R2 bucket
npx wrangler r2 object put dayadevraha-assets/kamdhenuseva/assets/savecows/photo.jpg \
  --file /tmp/photo.jpg \
  --content-type "image/jpeg"
```

После загрузки фото доступно по URL:
```
https://pub-4d0f40a00e3346068d49bbdd4c914540.r2.dev/kamdhenuseva/assets/savecows/photo.jpg
```

### Добавление фото в проект

1. Добавить URL в `lib/constants.ts`:
```typescript
export const IMAGES = {
  newPhoto: `${ASSET_BASE_URL}/assets/savecows/photo.jpg`,
  // ...
};
```

2. Использовать в компоненте:
```tsx
<img src={IMAGES.newPhoto} alt="Description" />
```

## Структура контента

Лендинг состоит из секций:
1. **Hero** — слайдер с фото и заголовком
2. **Campaign Progress** — прогресс сбора
3. **Quick Impact** — статистика (1000+ коров, ₹5,000/месяц)
4. **Donation Section** — выбор суммы пожертвования
5. **Story Section** — About Our Goshala, Why We Care, Preserving Rare Breeds, Ecological Significance
6. **Urgent Appeal** — срочный сбор на корм
7. **Where Donations Go** — куда идут пожертвования
8. **Video Section** — YouTube видео
9. **Quote Section** — цитаты от Shri Devraha Baba
10. **International Support** — контакты для международных доноров
11. **Footer** — название траста, ссылки

## Ссылки

- **Production:** https://savecows.dayadevraha.com/
- **Cloudflare Pages:** https://savecows-landing.pages.dev/
- **GitHub:** https://github.com/daya-admin/savecows-landing
