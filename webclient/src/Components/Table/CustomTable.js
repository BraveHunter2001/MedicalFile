import { Table } from "reactstrap";
import LoadingButton from "../Buttons/LoadingButton";
import { MODEL_MODE } from "../../constants";
import { ROLE } from "../../constants";
import HumanModal from "../Formik/HumanModal";
import { useState } from "react";

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

const CustomTable = ({
  items,
  headers,
  classNameTable,
  classNameHeaders,
  onEditItem,
  onViewItem,
}) => {
  return (
    <Table className={classNameTable}>
      <CustomTableHeaders headers={headers} className={classNameHeaders} />
      {items?.map((item) => {
        return (
          <tr>
            {headers.map((header) => (
              <td>{item[header.name]}</td>
            ))}
            {onEditItem && (
              <LoadingButton
                size="sm"
                color="primary"
                className="px-4 mx-2 mb-2"
                caption={"Edit"}
                classNameIcon={"me-1"}
                onClick={() => onEditItem?.(item.id)}
              />
            )}
            {onViewItem && (
              <LoadingButton
                size="sm"
                color="primary"
                className="px-4 mx-2 mb-2"
                caption={"View"}
                classNameIcon={"me-1"}
                onClick={() => onViewItem?.(item.id)}
              />
            )}
          </tr>
        );
      })}
    </Table>
  );
};

export default CustomTable;
