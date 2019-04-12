import React from 'react';
import { FilterLink } from './filter-link.component';

export const Footer = () => (
  <p style={{ 'textAlign': 'center' }}>
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);