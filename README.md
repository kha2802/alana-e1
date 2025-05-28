## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### tạo table in sql ở prisma/schema.prisma

`npx prisma db push`

### insert dữ liệu mẫu

> file 'package.json' thêm

### tạo table in sql ở prisma/schema.prisma

`npx prisma db push`

### insert dữ liệu mẫu

> file 'package.json' thêm

```json
"prisma": {
  "seed": "npx tsx prisma/seed/seed.ts"
},
"scripts": {
    "migrate": "prisma migrate dev",
    "postmigrate": "npx @snaplet/seed sync"
}
```

và chạy lệnh để tạo file

```npm
npx @snaplet/seed init prisma/seed
```

manually with `prisma db seed` and (in some scenarios) `prisma migrate dev`.

When you want to use `prisma migrate dev` without seeding, you can pass the `--skip-seed` flag.
