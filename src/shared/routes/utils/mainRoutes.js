import Characters from '../../../components/characters/Characters';
import Episode from '../../../components/episode/Episode';
import Locations from '../../../components/locations/Locations';
import DragAndDrop from '../../../components/todoList/TodoList';

export const mainRoutes = [
  {
    id: 1,
    title: 'Episodes',
    path: '/episode/:episodeId',
    element: <Episode />,
  },
  {
    id: 2,
    title: 'See All Characters',
    path: '/characters',
    element: <Characters />,
  },
  {
    id: 3,
    title: 'Location',
    path: '/locations',
    element: <Locations />,
  },
  {
    id: 4,
    title: 'TodoList',
    path: '/todo-list',
    element: <DragAndDrop />,
  },
];
