import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useCreateEditModalContext from '../../../hooks/useCreateEditModalContext';
import { ChangeEvent, useEffect, useState } from 'react';
import EmployeeCreationDto from '../../../types/EmployeeCreationDto';
import useGetCountries from '../../../hooks/useGetCountries';
import useGetAreas from '../../../hooks/useGetAreas';
import useGetDocumentTypes from '../../../hooks/useGetDocumentTypes';
import useGetSubAreas from '../../../hooks/useGetSubAreas';
import moment from 'moment';
import useCreateEditEmployee from '../../../hooks/useCreateEditEmployee';
import { areFormFieldsValid } from '../../../utils/validateFormFields';

const INITIAL_STATE: EmployeeCreationDto = {
  id: 0,
  firstName: '',
  lastNames: '',
  documentTypeId: 0,
  documentNumber: '',
  hiringDate: moment().format('YYYY-MM-DD'),
  countryId: 0,
  areaId: 0,
  subAreaId: 0,
};

const CreateEditModal = () => {
  const navigate = useNavigate();
  const { action, isModalOpen, employee, closeModal } =
    useCreateEditModalContext();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const documentTypes = useGetDocumentTypes();
  const countries = useGetCountries();
  const areas = useGetAreas(formData?.countryId);
  const subAreas = useGetSubAreas(formData?.areaId);
  const { executeRequest } = useCreateEditEmployee();

  useEffect(() => {
    const updateformData = () => {
      if (employee) {
        setFormData({
          id: employee.id,
          firstName: employee.firstName,
          lastNames: employee.lastNames,
          documentTypeId: employee.documentType.id,
          documentNumber: employee.documentNumber,
          hiringDate: employee.hiringDate,
          countryId: employee.country.id,
          areaId: employee.area.id,
          subAreaId: employee.area.id,
        });
      }
    };

    updateformData();
  }, [employee]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setFormData(INITIAL_STATE);
    closeModal();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (areFormFieldsValid(formData)) {
      executeRequest(action, formData);
      closeModal();
      navigate(0);
    }
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      <DialogTitle>
        <span style={{ textTransform: 'capitalize' }}>{action}</span> Employee
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" gap="1rem">
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              sx={{ width: '400px', marginTop: '1rem' }}
            />

            <TextField
              name="lastNames"
              label="Last Names"
              value={formData.lastNames}
              onChange={handleChange}
              sx={{ width: '400px' }}
            />

            <TextField
              id="documentTypeId"
              name="documentTypeId"
              select
              label="Document Type"
              helperText="Please select the document type"
              defaultValue={
                formData.documentTypeId || employee?.documentType.id
              }
              onChange={handleChange}
            >
              {documentTypes?.map(documentType => (
                <MenuItem key={documentType.id} value={documentType.id}>
                  {documentType.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name="documentNumber"
              label="Document Number"
              value={formData.documentNumber}
              disabled={!formData.documentTypeId}
              onChange={handleChange}
              sx={{ width: '400px' }}
            />

            <TextField
              name="hiringDate"
              label="Hiring Date"
              value={formData.hiringDate}
              helperText="Format: YYYY-MM-DD"
              onChange={handleChange}
              sx={{ width: '400px' }}
            />

            <TextField
              id="countryId"
              name="countryId"
              select
              label="Country"
              helperText="Please select the country"
              defaultValue={formData.countryId || employee?.country.id}
              onChange={handleChange}
            >
              {countries?.map(country => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="areaId"
              name="areaId"
              select
              label="Area"
              helperText="Please select the area"
              defaultValue={formData.areaId || employee?.area.id}
              disabled={!formData.countryId}
              onChange={handleChange}
            >
              {areas?.map(area => (
                <MenuItem key={area.id} value={area.id}>
                  {area.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="subAreaId"
              name="subAreaId"
              select
              label="Sub Area"
              helperText="Please select the sub area"
              defaultValue={formData.subAreaId || employee?.subArea.id}
              disabled={!formData.areaId}
              onChange={handleChange}
            >
              {subAreas?.map(subArea => (
                <MenuItem key={subArea.id} value={subArea.id}>
                  {subArea.name}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '200px',
                alignSelf: 'end',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              {action === 'create' ? 'Create' : 'Edit'}
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEditModal;
