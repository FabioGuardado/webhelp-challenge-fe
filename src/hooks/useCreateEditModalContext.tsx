import { useContext } from 'react';

import { CreateEditModalContext } from '../context/CreateEditModalContext';

const useCreateEditModalContext = () => {
  const context = useContext(CreateEditModalContext);

  if (!context) throw new Error('ModalContext is not defined');
  return { ...context };
};

export default useCreateEditModalContext;
