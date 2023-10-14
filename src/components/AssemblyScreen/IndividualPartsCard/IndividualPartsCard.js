import React from 'react';
import girlD1 from '../../../assets/girl-dress-1.png';
import './IndividualPartsCard.css';
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDrag } from 'react-dnd';

const IndividualPartsCard = ({part}) => {

    console.log(part);
    const [{isDragging}, drag] = useDrag(() =>({
        type:"image",
        item:{id: part.id},
        collect:(monitor) =>({
isDragging: !!monitor.isDragging()
        })
    }))

  return (
    // <Droppable droppableId="some_id">
    // {provided => (
    // <Draggable draggableId='part-1' ref={provided.innerRef} {...provided.droppableProps}>

    // {(provided) => (


        <article 
        style={{border: isDragging ? "1px solid red" :""}} 
        ref={drag}
        className='individual__selected__parts__card'>
        <div class="article-wrapper">
          <figure>
            <img src={part.url} alt="" />
          </figure>
          <div class="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
            </p>
     
          </div>
        </div>
      </article>
//       )}
 
//   </Draggable>
//     )}
//   </Droppable>
  );
}

export default IndividualPartsCard;
