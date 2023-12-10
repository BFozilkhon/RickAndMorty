import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import noData from '../assets/images/no-data.png';

import { Box, NoDataBox, Wrapper } from './Column.styled';

const Column = ({ title, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
          <Wrapper.Title>{title}</Wrapper.Title>
          {/* items */}
          {items.length === 0 && (
            <NoDataBox>
              <NoDataBox.Img src={noData} alt='noData' />
              <NoDataBox.Text>No Data Yet</NoDataBox.Text>
            </NoDataBox>
          )}
          {items.map((item, index) => (
            <Draggable draggableId={item.id} index={index} key={item.id}>
              {(provided) => (
                <Box
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  {item?.name}
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Column;
