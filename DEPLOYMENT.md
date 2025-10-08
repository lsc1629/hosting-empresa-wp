# 🚀 Guía de Deployment

Esta guía te ayudará a hacer deploy de tu página web de SiteGround en diferentes plataformas.

## 📋 Pre-requisitos

Antes de hacer deploy, asegúrate de:

1. **Configurar tu enlace de afiliado**:
   ```typescript
   // src/config/affiliate.ts
   export const AFFILIATE_CONFIG = {
     baseUrl: 'https://www.siteground.com/go/TU-ID-AFILIADO',
     // ...
   }
   ```

2. **Actualizar el dominio**:
   - `public/sitemap.xml` - Cambiar todas las URLs
   - `src/i18n/config.ts` - Actualizar URLs canónicas
   - `src/App.tsx` - Actualizar hreflang links

3. **Configurar Analytics** (opcional):
   ```bash
   cp .env.example .env
   # Editar .env con tu Google Analytics ID
   ```

## 🌐 Netlify (Recomendado)

### Deployment Automático desde GitHub

1. **Conectar repositorio**:
   - Ve a [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Conecta tu repositorio GitHub

2. **Configuración automática**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Variables de entorno** (opcional):
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   VITE_SITEGROUND_AFFILIATE_ID=tu-id-afiliado
   ```

4. **Deploy**:
   - Click "Deploy site"
   - El sitio estará disponible en minutos

### Deployment Manual

```bash
# Construir el proyecto
npm run build

# Instalar Netlify CLI
npm install -g netlify-cli

# Login a Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## ▲ Vercel

### Deployment desde GitHub

1. **Importar proyecto**:
   - Ve a [Vercel](https://vercel.com)
   - Click "New Project"
   - Importa desde GitHub

2. **Configuración automática**:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Variables de entorno** (opcional):
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   VITE_SITEGROUND_AFFILIATE_ID=tu-id-afiliado
   ```

### Deployment Manual

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login a Vercel
vercel login

# Deploy
vercel --prod
```

## 🐳 Docker

```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Construir imagen
docker build -t siteground-promo .

# Ejecutar contenedor
docker run -p 80:80 siteground-promo
```

## 🔧 Configuración Post-Deploy

### 1. Verificar SEO

- **Google Search Console**:
  - Agregar propiedad
  - Subir sitemap: `https://tudominio.com/sitemap.xml`
  - Verificar indexación

- **Bing Webmaster Tools**:
  - Agregar sitio
  - Subir sitemap
  - Verificar indexación

### 2. Configurar Analytics

```typescript
// src/utils/analytics.ts
export const GA_TRACKING_ID = 'G-TU-TRACKING-ID'
```

### 3. Verificar Performance

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://webpagetest.org/

### 4. Configurar CDN (opcional)

- **Cloudflare**:
  - Agregar dominio
  - Configurar DNS
  - Activar optimizaciones

## 📊 Monitoreo

### Analytics a Configurar

1. **Google Analytics 4**
2. **Google Search Console**
3. **Bing Webmaster Tools**
4. **Hotjar** (opcional para heatmaps)

### Métricas Importantes

- **Conversiones**: Clicks en enlaces de afiliado
- **Engagement**: Tiempo en página, scroll depth
- **SEO**: Posiciones, clicks, impresiones
- **Performance**: Core Web Vitals

## 🛡️ Seguridad

### Headers de Seguridad (ya configurados)

- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### SSL/TLS

- Netlify y Vercel proporcionan SSL automático
- Para otros proveedores, configura Let's Encrypt

## 🔄 Actualizaciones

### Flujo de Trabajo

1. **Desarrollo local**:
   ```bash
   npm run dev
   ```

2. **Testing**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy**:
   - Push a GitHub
   - Deploy automático

### Versionado

- Usa tags de Git para versiones
- Mantén changelog actualizado
- Prueba en staging antes de producción

## 🆘 Troubleshooting

### Problemas Comunes

1. **Build falla**:
   - Verificar Node.js version (18+)
   - Limpiar cache: `rm -rf node_modules package-lock.json && npm install`

2. **Rutas no funcionan**:
   - Verificar redirects en `netlify.toml` o `vercel.json`
   - Configurar SPA fallback

3. **Fonts no cargan**:
   - Verificar preconnect headers
   - Comprobar CORS

4. **SEO issues**:
   - Verificar meta tags
   - Comprobar sitemap.xml
   - Validar structured data

### Logs y Debug

```bash
# Netlify
netlify logs

# Vercel
vercel logs

# Local debug
npm run build -- --debug
```

## 📞 Soporte

Si necesitas ayuda con el deployment:

1. Revisa la documentación de la plataforma
2. Verifica logs de error
3. Comprueba configuración de DNS
4. Contacta soporte de la plataforma

---

¡Tu página web está lista para generar conversiones! 🎉
