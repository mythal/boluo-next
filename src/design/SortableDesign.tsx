import React, { forwardRef, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/react';

interface SortableItemProps {
  id: UniqueIdentifier;
}
const styles = {
  item: css`
    color: black;
    width: 100%;
    padding: 1rem 1rem;
    cursor: move;
    background-color: antiquewhite;
    border: 1px solid antiquewhite;

    &:hover {
      border: 1px solid black;
    }
    &[data-dragging='true'] {
      opacity: 40%;
    }
  `,
};
export function SortableItem({ id }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition!,
  };

  return (
    <div ref={setNodeRef} css={styles.item} data-dragging={isDragging} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}
export const Item = forwardRef<HTMLDivElement, { id: UniqueIdentifier }>(({ id, ...props }, ref) => {
  return (
    <div css={styles.item} {...props} ref={ref}>
      {id}
    </div>
  );
});
export function SortableDesign() {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState<UniqueIdentifier[]>(['1', '2', '3']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
      <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
    </DndContext>
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over!.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over!.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }
}
