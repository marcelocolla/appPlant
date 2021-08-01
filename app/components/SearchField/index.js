import React, { useState } from 'react'

import { BoxSearch, Search } from './styled'

const SearchField = ({ placeholder = 'Pesquisar', searchTerm = '', setSearchTerm }) => {
  const [searchQuery, setSearchQuery] = useState(searchTerm)

  const onChangeSearch = (query) => {
    setSearchQuery(query)

    if (setSearchTerm) {
      setSearchTerm(query)
    }
  }

  return (
    <BoxSearch>
      <Search
        placeholder={placeholder}
        onChangeText={onChangeSearch}
        value={searchQuery}
        theme={{ mode: 'outlined' }}
      />
    </BoxSearch>
  )
}

export default SearchField
