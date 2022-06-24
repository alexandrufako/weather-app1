import React, { useState, useEffect } from 'react';

const search = (props) => {
    const [ searchInput , setSearchInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(searchInput);
    };

    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        const tempValue = inputValue;
        setSearchInput(tempValue);
    }
}

