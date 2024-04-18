import { Table } from "reactstrap";

const CustomTableHeaders = ({ headers, className }) => {
  return (
    <thead className={className}>
      <tr>
        {headers?.map((header) => (
          <th>{header.title}</th>
        ))}
      </tr>
    </thead>
  );
};

const CustomTable = ({ items, headers, classNameTable, classNameHeaders }) => {
  return (
    <Table className={classNameTable}>
      <CustomTableHeaders headers={headers} className={classNameHeaders} />
      {items?.map((item) => {
        return (
          <tr>
            {headers.map((header) => (
              <td>{item[header.name]}</td>
            ))}
          </tr>
        );
      })}
    </Table>
  );
};

export default CustomTable;
