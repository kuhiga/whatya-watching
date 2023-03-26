/* eslint-disable no-unused-vars */
import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType, Media } from '../utils';

export const useMediaCollection = () => {
  return useLocalStorage<{ [key in ColumnType]: Media[] }>('medias', {
    'To Watch': [
      {
        id: uuidv4(),
        column: ColumnType.TO_WATCH,
        title: '',
        image: '',
      },
    ],
    'In Progress': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: '',
        image: '',
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: '',
        image: '',
      },
    ],
    Parked: [
      {
        id: uuidv4(),
        column: ColumnType.PARKED,
        title: '',
        image: '',
      },
    ],
  });
};
