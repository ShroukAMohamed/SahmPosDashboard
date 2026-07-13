const fs = require('fs');
const path = require('path');

const fileReplacements = [
  {
    file: 'src/app/features/live-orders/components/ai-assistant-panel/ai-assistant-panel.component.ts',
    replacements: [
      { from: /..\/..\/interfaces\/order.interface/g, to: '../../../../core/models/order.interface' }
    ]
  },
  {
    file: 'src/app/features/live-orders/components/kanban-board/kanban-board.component.ts',
    replacements: [
      { from: /..\/..\/interfaces\/order.interface/g, to: '../../../../core/models/order.interface' },
      { from: /..\/..\/types\/order-status.type/g, to: '../../../../core/types/order-status.type' }
    ]
  },
  {
    file: 'src/app/features/live-orders/components/kanban-column/kanban-column.component.ts',
    replacements: [
      { from: /..\/..\/interfaces\/order.interface/g, to: '../../../../core/models/order.interface' },
      { from: /..\/..\/types\/order-status.type/g, to: '../../../../core/types/order-status.type' }
    ]
  },
  {
    file: 'src/app/features/live-orders/components/order-card/order-card.component.ts',
    replacements: [
      { from: /..\/..\/interfaces\/order.interface/g, to: '../../../../core/models/order.interface' }
    ]
  },
  {
    file: 'src/app/features/live-orders/components/order-filters/order-filters.component.ts',
    replacements: [
      { from: /..\/..\/types\/order-channel.type/g, to: '../../../../core/types/order-channel.type' }
    ]
  },
  {
    file: 'src/app/features/live-orders/services/live-orders.service.ts',
    replacements: [
      { from: /..\/interfaces\/order.interface/g, to: '../../../core/models/order.interface' },
      { from: /..\/interfaces\/order-status-update.interface/g, to: '../../../core/models/order-status-update.interface' },
      { from: /..\/types\/order-status.type/g, to: '../../../core/types/order-status.type' }
    ]
  },
  {
    file: 'src/app/features/live-orders/state/live-orders.store.ts',
    replacements: [
      { from: /..\/interfaces\/order.interface/g, to: '../../../core/models/order.interface' },
      { from: /..\/types\/order-status.type/g, to: '../../../core/types/order-status.type' },
      { from: /..\/types\/order-channel.type/g, to: '../../../core/types/order-channel.type' }
    ]
  },
  {
    file: 'src/app/features/new-order/components/cart-panel/cart-panel.component.ts',
    replacements: [
      { from: /..\/..\/..\/live-orders\/interfaces\/order.interface/g, to: '../../../../core/models/order.interface' },
      { from: /..\/..\/..\/live-orders\/types\/order-status.type/g, to: '../../../../core/types/order-status.type' }
    ]
  }
];

fileReplacements.forEach(fr => {
  const filePath = path.join(__dirname, fr.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    fr.replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fr.file}`);
  } else {
    console.warn(`File not found: ${fr.file}`);
  }
});
