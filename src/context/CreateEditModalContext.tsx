import { createContext, useState } from 'react';

import { CreateEditModalAction } from '../types/CreateEditModalAction';
import EmployeeDto from '../types/EmployeesDto';

type ContextValues = {
  isModalOpen: boolean;
  action: CreateEditModalAction | undefined;
  employee: EmployeeDto | undefined;
  openModal: (arg1: CreateEditModalAction, arg2?: EmployeeDto) => void;
  closeModal: () => void;
};

type ContextProviderProps = {
  children: JSX.Element;
};

export const CreateEditModalContext = createContext<ContextValues | undefined>(
  undefined,
);

export const CreateEditModalProvider = ({ children }: ContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [action, setAction] = useState<CreateEditModalAction | undefined>(
    undefined,
  );
  const [employee, setEmployee] = useState<EmployeeDto | undefined>(undefined);

  const openModal = (action: CreateEditModalAction, employee?: EmployeeDto) => {
    setAction(action);
    setEmployee(employee || undefined);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAction(undefined);
    setEmployee(undefined);
  };

  return (
    <CreateEditModalContext.Provider
      value={{ isModalOpen, action, employee, openModal, closeModal }}
    >
      {children}
    </CreateEditModalContext.Provider>
  );
};
