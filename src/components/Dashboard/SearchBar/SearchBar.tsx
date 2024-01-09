import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stack, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('searchString') || '',
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchValue.replace(' ', '').length) {
      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.delete('searchString');
      currentSearchParams.append('searchString', searchValue);
      window.location = `/dashboard?${currentSearchParams.toString()}` as
        | Location
        | (string & Location);
    }
  };

  const handleClearFilter = () => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('searchString');
    window.location = `/dashboard?${currentSearchParams.toString()}` as
      | Location
      | (string & Location);
  };

  return (
    <Stack direction="row" sx={{ padding: '1rem', width: '100%' }}>
      <Stack sx={{ width: '90%', position: 'relative' }}>
        <TextField
          name="searchString"
          value={searchValue}
          placeholder="Search by name or document number"
          sx={{ width: '100%' }}
          onChange={handleChange}
        />
        <Button
          variant="text"
          onClick={handleClearFilter}
          sx={{
            marginLeft: '1rem',
            position: 'absolute',
            right: 0,
            top: '10px',
          }}
        >
          <ClearIcon />
        </Button>
      </Stack>

      <Button
        variant="text"
        onClick={handleSearchClick}
        sx={{ marginLeft: '1rem' }}
      >
        <SearchIcon />
      </Button>
    </Stack>
  );
};

export default SearchBar;
