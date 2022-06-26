import React from 'react';

type Props = {
  person: Person | null
};
export const PersonRow: React.FC<Props> = ({ person }) => {
  return (
    <tr>
      <td>{person?.name}</td>
      <td>{person?.sex}</td>
      <td>{person?.born}</td>
      <td>{person?.died}</td>
      <td>{person?.fatherName}</td>
      <td>{person?.motherName}</td>
    </tr>
  );
};