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

## Ссылки

- **Production:** https://savecows.dayadevraha.com/
- **Cloudflare Pages:** https://savecows-landing.pages.dev/
- **GitHub:** https://github.com/daya-admin/savecows-landing
