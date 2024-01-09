import { useEffect, useState } from 'react';
import { getAllDocumentTypes } from '../api/documentTypes';
import DocumentTypeDto from '../types/DocumentTypeDto';

const useGetDocumentTypes = () => {
  const [documentTypes, setDocumentTypes] = useState<
    DocumentTypeDto[] | undefined
  >(undefined);

  const getData = async () => {
    const { data } = await getAllDocumentTypes();
    setDocumentTypes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return documentTypes;
};

export default useGetDocumentTypes;
