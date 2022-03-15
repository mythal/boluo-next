import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/react';

interface SortableItemProps {
  id: string;
}
const styles = {
  item: css`
    width: 100%;
    padding: 1rem 1rem;
    cursor: move;

    &:hover {
      background-color: rgba(131, 131, 131, 0.55);
    }
  `,
};
export function SortableItem({ id }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition!,
  };

  return (
    <div ref={setNodeRef} css={styles.item} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

export function Sortable() {
  const [items, setItems] = useState(['1', '2', '3']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over!.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over!.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
