import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './column/Column';
import { useCharacterTodoContext } from '../../storage/characterTodo/CharacterTodoContext';

import { Wrapper } from './TodoList.styled';

const DragAndDrop = () => {
  const { todoData: stores, setTodoData: setStores } =
    useCharacterTodoContext();

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Droppable droppableId='ROOT' type='group'>
          {(provided) => (
            <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
              {stores.map((todo) => {
                return (
                  <div
                    key={todo?.id}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <Column
                      id={todo?.id}
                      title={todo?.title}
                      items={todo?.items}
                    />
                  </div>
                );
              })}
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;
