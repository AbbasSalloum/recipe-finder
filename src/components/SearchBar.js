import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () =>{
        if(query.trim()){
            onSearch(query);
        }
    };

    return(
        <div>
            <TextField
                label="Search for recipes..."
                variant="outlined"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}

            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;