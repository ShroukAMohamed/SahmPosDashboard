# Sahm POS Dashboard

## 1. Project Overview

Sahm POS Dashboard is a modern, high-performance Point of Sale (POS) and operational dashboard designed specifically for fast-paced restaurant environments. The application seamlessly bridges front-of-house operations with back-of-house fulfillment through a reactive, offline-capable architecture.

The main workflows include:
- **New Order (Front-of-house)**: Rapid order creation through a categorized product catalog and cart management.
- **Live Orders (Operations)**: Real-time tracking of order progress through a dynamic Kanban workflow.
- **Kitchen Monitor (Back-of-house)**: Real-time calculation of kitchen workloads, station capacity monitoring, and automated AI-driven operational insights.

---

## 2. Architecture Overview

The application is built on modern Angular (v17+) principles, heavily utilizing **Standalone Components** and a strict **Feature-Based Architecture**.

The separation of concerns is explicitly defined:
- **`core/`**: Singleton services, interfaces, types, interceptors, and mock APIs.
- **`shared/`**: Highly reusable UI components, pipes, and directives (e.g., search inputs, skeleton loaders).
- **`layout/`**: Application shell components, responsive top navigation, and global layout wrappers.
- **`features/`**: Domain-specific logic, split by bounded contexts (New Order, Live Orders, Kitchen Monitor).

This architecture was chosen to ensure **scalability**, **maintainability**, and strict **domain isolation**. It prevents module tangling, simplifies dependency injection, and makes it much easier for multiple developers to collaborate without merge conflicts.

---

## 3. Folder Structure

```text
src/app/
├── core/
│   ├── mock-api/         # Simulated backend logic (sessionStorage persistence)
│   ├── models/           # Domain interfaces (Order, Product, etc.)
│   ├── services/         # Global singletons (NetworkService, OfflineSyncService)
│   └── types/            # Global type definitions
├── layout/
│   └── top-navigation/   # Responsive application header shell
├── shared/
│   └── components/       # Reusable UI (SyncIndicator, SearchInput)
└── features/
    ├── kitchen-monitor/  # Back-of-house workload tracking
    ├── live-orders/      # Kanban board and real-time operations
    └── new-order/        # POS order creation
```

---

## 4. Feature Architecture

### New Order POS
- **Product Catalog**: Responsive grid displaying available menu items.
- **Category Filtering**: Horizontal scrolling chip bar (on mobile) or sidebar for quick category isolation.
- **Search**: Fast local filtering by product name or ID.
- **Cart Management**: Real-time total and tax calculations, quantity modifications, and item removal.
- **Order Creation Flow**: Synchronous (or offline-queued) submission to the central Live Orders store.

### Live Orders Workspace
- **Kanban Workflow**: Drag-and-drop enabled board processing orders through: `RECEIVED → PREPARING → READY → DELIVERED → COMPLETED`.
- **Filtering & Search**: Instantly find specific orders via ID, shortcode, or customer name.
- **Optimistic Updates**: Immediate UI reflections for drag-and-drop state changes prior to backend confirmation.
- **Real-Time Simulation**: Orders are dynamically generated and transitioned through statuses to mimic a live restaurant environment.

### Kitchen Monitor
- **Kitchen Stations**: Granular tracking for specific prep areas (Grill, Fryer, Assembly).
- **Workload Calculation**: Automatic aggregation of active item counts based on items in `PREPARING` status.
- **Station Capacity**: Real-time visual gauges showing current utilization against maximum station capacity.
- **Overloaded Detection**: Visual warnings when a station crosses critical capacity thresholds.
- **AI Insights Simulation**: Mocked AI rules analyzing orders to provide layout or prioritization suggestions.

---

## 5. State Management Approach

The application completely bypasses heavy external state libraries (like NgRx) in favor of **Angular Signals**.

- **Signals for State**: Mutable state (like orders, carts, and UI flags) is managed via `signal()`.
- **Derived State**: Complex calculations (subtotals, filtered lists, active alert counts) are purely functional and handled via `computed()`.
- **Feature Stores**: Each feature encapsulates its domain logic inside an Injectable store (e.g., `LiveOrdersStore`, `KitchenMonitorStore`).
- **RxJS for Streams**: Used exclusively for asynchronous operations, timeouts, and WebSocket event simulation, converting seamlessly into signals.

**Single Source of Truth**:
`LiveOrdersStore` holds the master state for all active orders. Instead of duplicating order data, the `KitchenMonitorStore` injects `LiveOrdersStore` and uses `computed()` to derive its station workloads directly from the live orders signal.

---

## 6. Real-Time Architecture

To simulate a live operational environment without a physical backend, the app features a robust mocked real-time system:

- **RxJS Streams**: `LiveOrdersRealtimeService` utilizes `timer()` and `Subject` to pulse events every 10-15 seconds.
- **WebSocket Mocking**: Emits strict payloads (`ORDER_CREATED`, `ORDER_STATUS_CHANGED`).
- **Signal Integration**: The `LiveOrdersStore` subscribes to these streams and performs immutable `.update()` calls on its signals, instantly triggering change detection across the Kanban board without a page refresh.
- **Persistence**: Real-time events write directly to `MockApiService`'s `sessionStorage`, ensuring generated orders survive page reloads.

*Note: This architecture is fully prepared to be swapped for a real WebSocket/SignalR connection.*

---

## 7. Offline Support

The dashboard utilizes an offline-first, optimistic update pattern to ensure restaurant operations never halt during internet outages.

**Flow:**
1. **User Action**: Waiter submits an order or moves a Kanban card.
2. **Immediate UI Update**: Signal state updates instantly.
3. **Network Check**: `NetworkService` (listening to `navigator.onLine`) verifies connectivity.
4. **Offline Queueing**: If offline, `OfflineSyncService` securely persists the pending API payload into the browser's **IndexedDB**.
5. **Restoration**: Upon reconnection, the queue is drained sequentially. The UI state is rolled back only if the background synchronization explicitly fails.

---

## 8. Design Decisions

- **Standalone Components**: Removes `NgModule` boilerplate, creating a much cleaner dependency graph.
- **Feature-Based Structure**: Ensures high cohesion and low coupling.
- **Signals over NgRx**: Drastically reduces boilerplate while maintaining excellent reactive performance.
- **Tailwind CSS**: Utility-first CSS provides high-speed, consistent styling and easy mobile responsiveness.
- **PrimeNG**: Used sparingly for complex overlays (like Drawers and Skeleton loaders) to save development time.
- **Angular CDK**: Utilized for robust, accessible drag-and-drop mechanics in the Kanban board.

---

## 9. Performance Optimizations

- **`ChangeDetectionStrategy.OnPush`**: Applied globally to components, ensuring Angular only checks views when Signal values actually change or Inputs mutate.
- **Computed Selectors**: Prevents unnecessary recalculations in templates.
- **Control Flow Syntax (`@for`, `@track`, `@if`)**: Uses Angular's new optimized template syntax to efficiently track and render DOM nodes.
- **Memory Safety**: Strict use of `takeUntilDestroyed(this.destroyRef)` on all persistent RxJS subscriptions to prevent memory leaks in a standalone environment.

---

## 10. Assumptions

- Backend APIs are entirely simulated via `MockApiService` running against browser `sessionStorage`.
- Real-time communication and AI insights are purely rule-based frontend simulations.
- Authentication/Authorization and Multi-tenant logic are currently out of scope.
- Pricing logic and tax calculations (hardcoded at 8%) are simplified for demonstration purposes.

---

## 11. Known Limitations

- No real production backend or database exists.
- Offline synchronization cannot fully complete its lifecycle (beyond mock APIs) without real endpoints.
- Real-time events are simulated locally, so multiple browser tabs will run independent simulations rather than syncing through a central server.
- The product catalog is currently static and mocked in-memory.

---

## 12. Future Improvements

- **API Integration**: Swap `MockApiService` with real `HttpClient` implementations.
- **WebSockets**: Replace the simulated RxJS timer streams with real WebSocket or SignalR connections.
- **Authentication**: Implement JWT-based auth guards and role-based permissions (Cashier vs Manager vs Kitchen).
- **End-to-End Testing**: Introduce Cypress or Playwright to cover critical offline/online transition workflows.
- **Analytics Dashboard**: Add a historical reporting feature for sales and kitchen performance metrics.

---

## 13. Running the Project

**Installation:**
```bash
npm install
```

**Development Server:**
```bash
npm run start
# or
ng serve
```
*Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.*

**Production Build:**
```bash
npm run build
# or
ng build
```
*The build artifacts will be stored in the `dist/` directory.*
