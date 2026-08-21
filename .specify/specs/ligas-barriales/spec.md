# 📋 Feature Specification: Nueva Aplicación para Ligas Barriales

> **Spec Version:** 1.0.0  
> **Status:** PROPOSED  
> **Feature Name:** `ligas-barriales-platform`  
> **Target Framework:** Wasp (React + Node.js + Prisma) + Mobile-First Web / Native Shell  
> **Governing Constitution:** [`.specify/constitution.md`](file:///c:/Users/ADMIN/Downloads/Practicas%202026/social-soccer/.specify/constitution.md)  

---

## 💡 Executive Summary & Vision

La **Plataforma para Ligas Barriales** es una solución digital integral diseñada para modernizar la gestión operativa, comunicacional y financiera de torneos de fútbol amateur barrial (ej. Liga Mena Alta). Elimina las ineficiencias de las credenciales físicas de plástico, la desinformación en grupos de WhatsApp, los errores en actas manuales de juego y el cobro informal de arbitrajes en efectivo, ofreciendo una experiencia ágil, confiable y adaptada a la realidad local.

---

## 👤 User Personas & User Stories

### Persona A: El Jugador Barrial (Juan - 24 años)
* **Perfil:** Estudiante/Trabajador que juega los fines de semana. Valora el torneo como tradición y desahogo.
* **US-01 (Carnet Digital):** *Como jugador, quiero presentar mi carnet digital con código QR en mi teléfono al vocal de mesa para ser habilitado en el partido sin depender de una tarjeta plástica.*
* **US-02 (Calendario & Horarios):** *Como jugador, quiero consultar el horario exacto, cancha y estado del clima del partido de mi equipo con notificaciones automáticas para no acudir a ciegas.*
* **US-03 (Estadísticas Personales):** *Como jugador, quiero revisar mis goles, asistencias, minutos y tarjetas acumuladas en mi perfil para medir mi rendimiento torneo a torneo.*
* **US-04 (Pago Móvil Local):** *Como jugador/capitán, quiero pagar la cuota de arbitraje o multas mediante Deuna o transferencia bancaria directa desde mitad de semana para evitar manejar efectivo en camerinos.*
* **US-05 (Comunidad & Incentivos):** *Como jugador, quiero votar por el "11 Ideal" de la fecha y canjear puntos de Fair Play por descuentos en fisioterapia e hidratación.*

### Persona B: Dirigentes y Vocales de Mesa (Don Carlos - 52 años)
* **Perfil:** Dirigente o vocal de mesa responsable del control de los partidos del fin de semana. Busca simplicidad extrema.
* **US-06 (Digitalización de Vocalía):** *Como vocal de mesa, quiero registrar los eventos del partido (goles, tarjetas, cambios) en una interfaz táctil ultra-simple desde una tablet/teléfono al instante.*
* **US-07 (Canal Oficial & Alertas):** *Como dirigente, quiero emitir comunicados oficiales y suspensiones por mal clima que notifiquen inmediatamente a todos los delegados y jugadores.*
* **US-08 (Cierre de Actas & Tablas):** *Como dirigente, quiero que al finalizar el partido el acta se liquide automáticamente actualizando la tabla de posiciones y goleadores sin trabajo manual posterior.*

---

## 🎯 Functional Requirements (FR)

### FR-01: Módulo de Carnet Digital e Identidad
- **FR-01.1:** Perfil único de jugador con fotografía oficial, número de cédula/ID, equipo actual y estado de sanción (Habilitado / Suspendido).
- **FR-01.2:** Generación de código QR dinámico/verificable offline para validación por parte del vocal de mesa al ingreso a cancha.
- **FR-01.3:** Registro e inscripción rápida de plantillas gestionada por el delegado del equipo.

### FR-02: Digitalización de Vocalía, Calendario y Tablas
- **FR-02.1:** Calendario interactivo (fixtures) con ubicación GPS de la cancha, estado del terreno de juego y horarios actualizados.
- **FR-02.2:** Interfaz táctil de Vocalía Digital para registro en vivo de alineaciones, goles, asistencias, tarjetas amarillas/rojas y minutos jugados.
- **FR-02.3:** Generación automática del acta digital de partido al silbatazo final con firma digital o confirmación de los dos capitanes/delegados.
- **FR-02.4:** Recálculo instantáneo de la tabla de posiciones (PTS, PJ, PG, PE, PP, GF, GC, GD) y tabla de goleadores/valla menos vencida.

### FR-03: Canal Oficial de Comunicación y Alertas Push
- **FR-03.1:** Feed de comunicados oficiales de la directiva con etiquetado por categoría (Urgente, Clima, Sanciones, Calendario).
- **FR-03.2:** Sistema de notificaciones Push (vía WebPush / FCM) para alertar cambios de horario, suspensiones por lluvia y acumulación de tarjetas.

### FR-04: Estadísticas e Historial del Jugador
- **FR-04.1:** Historial acumulativo del jugador a lo largo de múltiples temporadas y equipos.
- **FR-04.2:** Ficha técnica con métricas de rendimiento: promedio de goles por partido, efectividad de asistencias, índice de disciplina (Fair Play rating).

### FR-05: Integración de Pasarelas de Pago Móvil Local
- **FR-05.1:** Integración con **Deuna** (QR / Link de Pago) y soporte de comprobantes de transferencia bancaria directa (Banco Pichincha, Guayaquil, Produbanco, etc.).
- **FR-05.2:** Módulo de liquidación de pagos de arbitraje y multas por equipo con estado en tiempo real (Pendiente / Pagado / Verificado por Tesorería).
- **FR-05.3:** Bloqueo automático de alineación si el equipo mantiene saldos pendientes no regularizados antes del partido.

### FR-06: Módulo de Incentivos y Fidelización Comunitaria
- **FR-06.1:** Votación semanal del "11 Ideal" de la fecha impulsada por la comunidad de jugadores y aficionados.
- **FR-06.2:** Ranking de Fair Play para equipos y jugadores con menos tarjetas/sanciones.
- **FR-06.3:** Marketplace de beneficios locales (cupones de descuento en fisioterapia, medicina deportiva, tiendas locales e hidratación gratuita).

---

## 🗄️ Proposed Data Model (Prisma Schema Abstract)

```prisma
model PlayerProfile {
  id              String         @id @default(uuid())
  userId          String         @unique
  fullName        String
  dni             String         @unique
  photoUrl        String?
  qrCode          String         @unique
  isSuspended     Boolean        @default(false)
  currentTeamId   String?
  team            Team?          @relation(fields: [currentTeamId], references: [id])
  matchEvents     MatchEvent[]
  communityPoints Int            @default(0)
  createdAt       DateTime       @default(now())
}

model Team {
  id              String         @id @default(uuid())
  name            String
  logoUrl         String?
  category        String
  delegateId      String
  players         PlayerProfile[]
  homeMatches     Match[]        @relation("HomeTeam")
  awayMatches     Match[]        @relation("AwayTeam")
  payments        PaymentRecord[]
}

model Match {
  id              String         @id @default(uuid())
  homeTeamId      String
  awayTeamId      String
  homeTeam        Team           @relation("HomeTeam", fields: [homeTeamId], references: [id])
  awayTeam        Team           @relation("AwayTeam", fields: [awayTeamId], references: [id])
  scheduledAt     DateTime
  pitchName       String
  status          MatchStatus    @default(SCHEDULED) // SCHEDULED, LIVE, FINISHED, SUSPENDED
  homeGoals       Int            @default(0)
  awayGoals       Int            @default(0)
  events          MatchEvent[]
  vocalSignedAt   DateTime?
}

enum MatchStatus {
  SCHEDULED
  LIVE
  FINISHED
  SUSPENDED
}

model MatchEvent {
  id              String         @id @default(uuid())
  matchId         String
  match           Match          @relation(fields: [matchId], references: [id])
  playerId        String
  player          PlayerProfile  @relation(fields: [playerId], references: [id])
  eventType       EventType      // GOAL, ASSIST, YELLOW_CARD, RED_CARD, SUB_IN, SUB_OUT
  minute          Int
}

enum EventType {
  GOAL
  ASSIST
  YELLOW_CARD
  RED_CARD
  SUB_IN
  SUB_OUT
}

model PaymentRecord {
  id              String         @id @default(uuid())
  teamId          String
  team            Team           @relation(fields: [teamId], references: [id])
  amount          Float
  paymentType     PaymentType    // REFEREE_FEE, FINE, INSCRIPTION
  paymentMethod   PaymentMethod  // DEUNA, BANK_TRANSFER, CASH
  referenceNumber String?
  proofUrl        String?
  status          PaymentStatus  @default(PENDING) // PENDING, VERIFIED, REJECTED
  createdAt       DateTime       @default(now())
}

enum PaymentType {
  REFEREE_FEE
  FINE
  INSCRIPTION
}

enum PaymentMethod {
  DEUNA
  BANK_TRANSFER
  CASH
}

enum PaymentStatus {
  PENDING
  VERIFIED
  REJECTED
}
```

---

## 🔒 Security, Compliance & Performance Standards

1. **Protección de Datos e Identidad:** Encriptación de números de cédula y generación de QR firmado con timestamp de expiración breve para evitar duplicación/captura de pantalla fraudulenta.
2. **Resiliencia Offline de Vocalía:** El formulario de vocalía de mesa debe contar con almacenamiento local (IndexedDB / LocalStorage) para registrar el partido sin conexión a internet y sincronizar al detectar red.
3. **Integridad Financiera:** Todo pago reportado vía Deuna o Transferencia requiere estado de verificación manual o webhook seguro antes de desbloquear la habilitación deportiva del equipo.

---

## 🏁 Criteria for Acceptance & Success Metrics

- [ ] **Acceso a Carnet < 2 segundos:** El jugador puede abrir su carnet QR en pantalla en menos de 2 segundos.
- [ ] **Reducción de Tiempo de Vocalía:** El acta de partido se completa en menos de 3 minutos al finalizar el encuentro.
- [ ] **Publicación Inmediata de Tablas:** Las tablas de posiciones se actualizan en < 5 segundos tras la firma del acta digital.
- [ ] **Adopción de Pagos Digitales:** Al menos 70% de los pagos de arbitraje realizados vía Deuna / Transferencia bancaria antes del fin de semana.

---

## ⚖️ Compliance Matrix with Project Constitution (`constitution.md`)

- [x] **Article I (SSOT):** Specification and data model defined prior to implementation.
- [x] **Article II (Tech Stack):** Utilizes Wasp, React + TypeScript, Prisma ORM, ShadCN UI styling.
- [x] **Article III (Security):** Strict auth isolation, secret isolation, input sanitization.
- [x] **Article IV (Quality):** End-to-end type safety across Wasp RPC and Prisma models.
